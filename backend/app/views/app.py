"""
APP CRUD VIEWS
"""
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def retrieve_all(request, *args, **kwargs):
    if request.method == "GET":
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))

            apps = user.active_project.apps
            res = [{
                "id": app.id,
                "name": app.name,
                "base_url": app.base_url,
                "is_active": app.is_active,
                "is_version": app.is_version,
                "created_at": app.created_at,
            } for app in apps]

            return JsonResponse(res, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    
    return JsonResponse(False, status_code=501, safe=False)


@csrf_exempt
def create(request, *args, **kwargs):
    if request.method == "POST":
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))
            body = json.loads(request.body)

            active_app = user.active_project.active_app
            
            app = App(
                name=body.get('name'),
                is_active=body.get('active_app'),
                base_url=body.get('base_url'),
            )
            app.save()
            active_app.is_active = False
            active_app.save()

            apps = user.active_project.apps
            res = [{
                "id": app.id,
                "name": app.name,
                "base_url": app.base_url,
                "is_active": app.is_active,
                "is_version": app.is_version,
                "created_at": app.created_at,
            } for app in apps]

            return JsonResponse(res, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    
    return JsonResponse(False, status_code=501, safe=False)


@csrf_exempt
def update(request, *args, **kwargs):
    if request.method == "PUT":
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))

            app = App.objects.get(id=kwargs.get('app_id'), user=user)
            app.name=body.get('name') if body.get('name') else app.name
            app.is_active=body.get('active_app') if body.get('active_app') else app.is_active
            app.base_url=body.get('base_url') if body.get('base_url') else app.base_url
            app.save()

            apps = user.active_project.apps
            res = [{
                "id": app.id,
                "name": app.name,
                "base_url": app.base_url,
                "is_active": app.is_active,
                "is_version": app.is_version,
                "created_at": app.created_at,
            } for app in apps]

            return JsonResponse(res, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    
    return JsonResponse(False, status_code=501, safe=False)


@csrf_exempt
def delete(request, *args, **kwargs):
    if request.method == "DELETE":
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))

            app = App.objects.get(id=kwargs.get('app_id'), user=user)
            app.delete()

            apps = user.active_project.apps
            res = [{
                "id": app.id,
                "name": app.name,
                "base_url": app.base_url,
                "is_active": app.is_active,
                "is_version": app.is_version,
                "created_at": app.created_at,
            } for app in apps]

            return JsonResponse(res, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    
    return JsonResponse(False, status_code=501, safe=False)


@csrf_exempt
def activate_app(request, *args, **kwargs):
    if request.method == "PATCH":
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))

            app = App.objects.get(id=kwargs.get('app_id'), user=user)
            app.activate()

            apps = user.active_project.apps
            res = [{
                "id": app.id,
                "name": app.name,
                "base_url": app.base_url,
                "is_active": app.is_active,
                "is_version": app.is_version,
                "created_at": app.created_at,
            } for app in apps]

            return JsonResponse(res, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    
    return JsonResponse(False, status_code=501, safe=False)

