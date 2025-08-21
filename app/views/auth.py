"""
AUTH VIEWS
"""
import json
import datetime
from django.utils import timezone
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password

from app.utils import *
from app.models import *


@csrf_exempt
def login(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            # TODO: check with exists() and return not authorized instead of 500
            if User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email')):
                return JsonResponse(True, status=200, safe=False)
            else:
                JsonResponse(False, status=400, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    elif request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            try:
                user = User.objects.get(email=body.get('email'))
                print(user)
            except:
                return JsonResponse(False, status=404, safe=False)
            
            if not check_password(body.get('password'), user.password):
                return JsonResponse(False, status=401, safe=False)

            response = {
                "access_token": generate_auth_access_token(user.email),
                "refresh_token": generate_auth_refresh_token(user.username),
                "first_login": not user.last_login,
                }
            
            user.last_login = timezone.now()
            user.save()
            
            return JsonResponse(response, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def register(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)

            if User.objects.filter(email=body.get('email')).exists():
                return JsonResponse(False, status=406, safe=False)
            
            #? is this necessary
            if UserInfo.objects.filter(first_name=body.get('first_name'), last_name=body.get('last_name')).exists():
                return JsonResponse(False, status=400, safe=False)
            
            status = 200
            user = User(
                username=generate_username(),
                terminal_token=generate_terminal_token(),
                password=make_password(body.get('password')),
                email=body.get('email'),
            )
            user.save()

            user_info = UserInfo(
                user=user,
                first_name=body.get('first_name'),
                last_name=body.get('last_name'),
                # experience_level=int(body.get('experience_level')),
                # initial_thumbnail='users/thumbnails/initial_' + str(user.id) + '.png',
            )
            user_info.save()

            # try:
            #     generate_initial_thumbnail(str(user.id))
            # except Exception as e:
            #     status += 1

            try:
                send_mail(
                    subject='Welcome to Clix.dev',
                    message="",
                    from_email='support@clix.dev',
                    recipient_list=[str(user.email)],
                    fail_silently=False,
                    html_message=f"""<!DOCTYPE html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;&display=swap" rel="stylesheet" />
</head>

<body
    style="position: relative; font-family: 'Roboto', sans-serif; max-width: 550px; margin: 20px auto 50px; background: white; color: #333; line-height: 20px; font-size: 14px;">
    <header style="display: block; margin: 0 auto;">
        <img src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png" width="30px">
        <p style="text-align: center; width: 35px; font-weight: 800; color: #00bfff; margin: 0; padding: 0;">Clix</p>
    </header>
    <br />
    <br />
    <p style="color: #253035;">Hi {str(user.first_name).capitalize()},</p>
    <p style="margin-bottom: 30px; color: #333;">Welcome to <a style="color: #00BFFF; text-decoration: none;"
            href="https://clix.dev">Clix</a>. We are thrilled to have you apart of our journey into helping developers like yourself create better software. Our goal is to
        help
        developers translate their mind into code in a modular manner.</p>
    <p style="font-weight: 600; padding: 0; margin: 0; font-size: 10px; color: gray;">WHAT'S NEW</p>
    <hr style="margin: 0 0 20px;" />
    <div style="display:block; margin-bottom: 66px;">
        <div style="margin-bottom: 60px;">
            <a href="https://clix.dev/login" style="display: block; margin: 0 auto;">
                <img
                    src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/the-badgebanner.png"
                    style="object-fit: cover; display: block; width: 100%; height: auto; border-radius: 10px; margin-right: 20px; margin-bottom: 15px; box-shadow: 0 1px 4px lightgray;" />
            </a>
            <div style="display: block;">
                <h1 style="font-size: 14px; margin: 5px 0; color: #253035;">1. Introducing The BadgeBanner.</h1>
                <p style="font-size: 13px; padding: 0; margin: 0 0 10px; color: #333;">The <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="gray"
                        style="width: 20px; margin: 0 3px;">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    icons next to any element will open The BadgeBanner on the right corner of the screen. You will find
                    a brief description of the element and more resources for better understanding.</p>
                <p style="font-size: 11px; font-weight: 600; color: gray; margin: 0; padding: 0;">Note: The BadgeBanner
                    will follow you around
                    Clix. It will also remember the last information it displayed.</p>
                <br />
                <a style="display: block; margin: 0; padding: 0; text-decoration: none; color: #00BFFF; text-align: center; font-size: 13px;"
                    href="https://clix.dev/endpoints">Learn More</a>
            </div>
        </div>
        <div style="margin-bottom: 60px;">
            <h1 style="font-size: 14px; margin: 5px 0 9px; color: #253035;">2. Now, <span style="color: #FF7B00;">Draft</span> an Endpoint.</h1>
            <a href="https://clix.dev/login" style="display: block; margin: 0 auto;">
                <img
                    src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/draft.png"
                    style="object-fit: cover; display: block; width: 100%; height: 125px; border: 4px solid lightgray; border-radius: 10px; margin-right: 20px; margin-bottom: 15px; box-shadow: 0 1px 4px lightgray;" />
            </a>
            <div style="display: block;">
                <p style="font-size: 13px; padding: 0; margin: 0; color: #333;">You can now save an endpoint as a draft if you'll be working on it later. Drafting an endpoint can also help you identify local testing before your submission to production.</p>
                <br />
                <a style="display: block; margin: 0; padding: 0; text-decoration: none; color: #00BFFF; text-align: center; font-size: 13px;"
                    href="https://clix.dev/endpoints">Learn More</a>
            </div>
        </div>
        <div style="margin-bottom: 60px;">
            <div style="display: block;">
                <h1 style="font-size: 14px; margin: 5px 0; color: #253035;">3. API Versioning is coming to Clix.</h1>
                <p style="font-size: 13px; padding: 0; margin: 0; color: #333;">We are bringing API versioning to Clix, but much
                    smoother. API versioning separates good software from bad. It gives teams a bonus layer of
                    organization throughout their stack. More updates Nov 12!</p>
            </div>
        </div>
    </div>

    <p style="margin-bottom: 30px;">Thanks,<br> The Clix team</p>
    <p style="color: #333; font-size: 12px; margin-bottom: 55px;">- Need immediate help getting started? Check out
        our
        <a style="color: #00bfff;" href="https://clix.dev/documentation">documentation</a>, or <a
            style="color: #00bfff;" href="https://clix.dev/contact">send us a message</a>
        and our support team will get back to you.
    </p>
    <footer style="text-align: center; font-size: 8px; color: gray;">
        <img src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png" width="20px"><br><span>&copy; Clix.dev 2022</span>
    </footer>
</body>

</html>"""
                )
            except Exception as e:
                status += 2

            response = {
                "access_token": generate_auth_access_token(user.email),
                "refresh_token": generate_auth_refresh_token(user.email),
            }

            return JsonResponse(response, status=status, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def update_password(request, *args, **kwargs):
    if request.method == 'PUT':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            if not check_password(body.get('old_password'), user.password):
                return JsonResponse(False, status=400, safe=False)
            
            user.password = make_password(body.get('new_password'))
            user.save()
            return JsonResponse(True, status=200, safe=False)

        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def reset_password(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            user = User.objects.get(email=body.get('email'))

            if not user:
                return JsonResponse(False, status=400, safe=False)

            tempCode = generate_terminal_token()
            user.temp_code = tempCode
            user.save()

            try:
                send_mail(
                    subject='Clix.dev Password Reset',
                    message="",
                    from_email='support@clix.dev',
                    recipient_list=[str(user.email)],
                    fail_silently=False,
                    html_message=f"""<!DOCTYPE html><html><head><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;&display=swap" rel="stylesheet" /></head><body style="font-family: 'Roboto', sans-serif; max-width: 500px; margin: 50px auto; background: white; color: #253035; line-height: 20px; font-size: 13px;"><h1 style="font-size: 22px"><span style="color: #00bfff">Clix</span></h1><p style="margin-bottom: 30px;">Thanks for trying Clix. We’re thrilled to have you on board. To get the most out of Clix, explore <a style="color: #00bfff;" href="https://clix.dev/documentation">Documentation</a>.</p><p>Your temporary password reset code is:</p><table style="background: white; color: #00bfff; border-radius: 20px; font-weight: bold; font-size: 21px; padding: 22px 12px; margin-bottom: 30px" width="100%" cellpadding="0" cellspacing="0"><tr><td class="attributes_content"><table width="100%" cellpadding="0" cellspacing="0"><tr><td>{tempCode}</td></tr></table></td></tr></table><p style="margin-bottom: 50px;">If you have any questions, feel free to <a style="color: #00bfff;" href="mailto:support@clix.dev">email our support team</a>. (We're lightning quick at replying.)</p><p style="margin-bottom: 30px;">Thanks,<br> support team</p><p style="color: #333; font-size: 12px; margin-bottom: 55px;">- Need immediate help getting started? Check out our <a style="color: #00bfff;" href="https://clix.dev/documentation">documentation</a>. Or, just reply to this email, our support team is always ready to help!</p><footer style="text-align: center; font-size: 8px; color: gray;"><img src="https://clix.dev/static/media/logo.bbd1f8bf.png" width="20px"><br><span>&copy; Clix.dev 2022</span></footer></body></html>"""
                )
            except Exception as e:
                return JsonResponse(False, status=500, safe=False)

            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    elif request.method == 'PUT':
        try:
            # headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(temp_code=body.get('temp_code'))

            if not user:
                return JsonResponse(False, status=400, safe=False)
            
            user.password = make_password(body.get('password'))
            user.temp_code = None
            user.save()

            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def logout(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            user.last_login = datetime.datetime.now()
            user.save()
            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def check_page_visited(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            page = str(kwargs.get('page'))
            if user := User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email')):
                user_info = UserInfo.objects.get(user=user)
                # first time visiting this page
                if not user_info.page_visited.get(str(page)) or user_info.page_visited.get(str(page)) == 0:
                    pages = user_info.page_visited
                    pages[str(page)] = 1
                    user_info.page_visited = pages
                    user_info.save()
                    return JsonResponse(True, status=200, safe=False)

                return JsonResponse(False, status=200, safe=False)
                                
            return JsonResponse(False, status=400, safe=False)
        except Exception as e:
            # print('\n\n', e, '\n\n')
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)

