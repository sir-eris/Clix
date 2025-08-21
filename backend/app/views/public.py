"""
PUBLIC ENDPOINTS
"""
from pathlib import Path
import csv
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail, send_mass_mail

from app.utils import *
from app.models import *

BACKEND_JOB_HTML = """<!DOCTYPE html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;&display=swap" rel="stylesheet" />
</head>

<body
    style="font-family: 'Roboto', sans-serif; max-width: 500px; margin: 50px auto; background: white; color: #253035;line-height: 20px; font-size: 13px;">
    <br />
    <p>Hello {},</p>
    <br />


    <p>We have reviewed your application for our Mid-Senior Frontend Developer position at Clix.dev and are impressed with your
        background. Our hiring process consists of 3 steps where after each step we determine whether we see you a fit
        to move
        forward or not.</p>

    <br />

    <p>As tradition suggests around here, to make the first step strictly simpler, we would like to know your technical view of our software. The purpose of this
        step is
        to familiarize you with our tool as well as our vision.</p>
    <p>Attached is a link to a questionnaire that evaluates your understanding of our software. After you submit the form you will be notified of our decision in no later than 10 days.</p>

    <br />
    <br />
    <a href="https://forms.gle/gKTtr58VgKgPp2Qm7" style="color: #00BFFF;">Link to evaluation form</a>
    <br />
    <br />
    <br />

    <div style="font-size: 10px; color: gray;">
        <p>For better familiarity we highly recommend that you create an account at <a href="https://clix.dev/register" style="color: #00bfff;">Clix.dev</a> before answering the questions.</p>
    </div>

    <br /><br />
    <p style="font-size: 12px;">Cheers,<br />Eris Verne<br /><a href="https://clix.dev" style="color: #00BFFF;">Clix.dev</a><span style="padding: 0 5px;">-</span>Head of Engineering</p>
    <br />
    <img width="100%" src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/cta.png"
        style="margin-bottom: 24px;" />
    <footer style="text-align: center; font-size: 8px; color: gray;">
        <img src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png" width="22px" style="margin: 0; padding: 0;">
        <p style="padding: 0; margin: 0; color: #00BFFF; font-size: 16px; font-weight: bold;">Clix.dev</p>
        <br><span style="display: block; margin: 0; padding: 0; line-height: 10px;">&copy; Clix.dev 2022</span>
        <span style="display: block; line-height: 10px;">All Rights Reserved</span>
    </footer>
</body>

</html>
"""


@csrf_exempt
def send_job_application_emails(request, *args, **kwargs):
    try:
        with open("./backend-user-list.csv", 'r') as file:
            file = csv.reader(file)
            for i, row in enumerate(file):
                if 50 <= i < 75:
                    print(i)
                    email = str(row[0])
                    name = str(row[1].split(" ")[0])
                    m = send_mail(
                        subject='Your application for mid-senior frontend position - Clix.dev',
                        message="",
                        from_email='support@clix.dev',
                        recipient_list=[email],
                        fail_silently=True,
                        html_message=BACKEND_JOB_HTML.format(name),
                    )

        return JsonResponse(True, status=200, safe=False)
    except Exception as e:
        print(e)
        return JsonResponse(False, status=500, safe=False)


@csrf_exempt
def newsletter(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            
            # if already joined
            newsletter = Newsletter.objects.filter(email=body.get("email"))
            if newsletter.exists():
                newsletter = newsletter.first()
                newsletter.topics = body.get("topics")
                newsletter.save()
                return JsonResponse(True, status=200, safe=False)

            newsletter = Newsletter(
                email=body.get('email'),
                topics=body.get('topics'),
            )
            newsletter.save()
            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, status=500, safe=False)
    elif request.method == 'DELETE':
        try:
            body = json.loads(request.body)
            newsletter = Newsletter.objects.get(email=body.get('email'))
            newsletter.status = "US"
            newsletter.save()
            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(True, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def contact(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)

            contact = Contact(
                email=body.get('email'),
                topic=body.get('topic'),
                message=body.get('message'),
            )
            contact.save()

            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)

@csrf_exempt
def faqs(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            faqs = FAQ.objects.filter(status=1).all()
            faqs = [{
                "topic": faq.topic,
                "question": faq.question,
                "answer": faq.answer,
            } for faq in faqs]

            return JsonResponse(faqs, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    elif request.method == 'POST':
        try:
            body = json.loads(request.body)
            faq = FAQ(
                question=body.get("question"),
            )
            faq.save()

            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
            
    return JsonResponse(False, status=501, safe=False)


