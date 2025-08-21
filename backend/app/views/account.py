""" 
ACCOUNT CRUD VIEWS
"""
import json
from django.conf import settings
from django.http import JsonResponse
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def account(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))
            user_info = user.user_info

            user = {
                "username": user.username,
                "terminal_token": user.terminal_token,
                "email": user.email,
                "email_verified": True if user.email_verified_at else False,
                "first_name": user_info.first_name,
                "last_name": user_info.last_name,
                # "thumbnail": str(user_info.thumbnail) if user_info.thumbnail else str(user_info.initial_thumbnail),
            }

            return JsonResponse(user, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)
    elif request.method == 'PUT':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            user.first_name = user.first_name if body['first_name'] == '' else body['first_name']
            user.last_name = user.last_name if body['last_name'] == '' else body['last_name']
            user.email = user.email if body['email'] == '' else body['email']
            # user.phone=body['phone']
            # user.twitter=body['twitter']
            # user.github=body['github']
            user.save()

            user = {
                "username": user.username,
                "terminal_token": user.terminal_token,
                "thumbnail": str(user.thumbnail) if user.thumbnail else str(user.initial_thumbnail),
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email_verified": True if user.email_verified_at else False,
            }

            return JsonResponse(user, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, safe=False)


@csrf_exempt
def thumbnail(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            content = ContentFile(request.FILES['file'].read())
            with open(settings.MEDIA_ROOT + '/thumbnails/' + str(user.id) + '.png', 'wb+') as th:
                for chunk in content.chunks():
                    th.write(chunk)
                user.thumbnail = 'thumbnails/' + str(user.id) + '.png'
                user.save()

            return JsonResponse({"thumbnail": user.thumbnail.url}, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)
    elif request.method == 'DELETE':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            user.thumbnail = None
            user.save()

            return JsonResponse({"thumbnail": user.initial_thumbnail.url}, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, safe=False)


@csrf_exempt
def send_verify_email(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            # TODO send_email(user.email, verify_account_template)
            return JsonResponse(True, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)


@csrf_exempt
def environment(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            
            return JsonResponse(user.env.environment, status=200, safe=True)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    elif request.method == 'PATCH':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            
            user.env.environment = body.get('environment')
            user.save()

            return JsonResponse(user.env.environment, status=200, safe=True)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)
