"""
ENDPOINT CRUD VIEWS
"""
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *

@csrf_exempt
def endpoints(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            endpoints = {}
            for app in user.active_project.apps:
                endpoints[app.name] = []
                for endpoint in app.endpoints:
                    param_s = []
                    for params in list(endpoint.params.values()):
                        if params[0] != None:
                            param_s.append('<'+params[0]+'>')
                        else:
                            param_s.append('None')

                    endpoints[app.name].append({
                        "id": endpoint.id,
                        "name": endpoint.name,
                        "request": endpoint.request,
                        "is_draft": endpoint.is_draft,
                        "params": '/'.join([p for p in param_s]),
                        "headers": ','.join([h[0] for h in endpoint.headers.get('body').values()]),
                        "auth_required": True if endpoint.headers.get('authorization') else False,
                        "body": endpoint.body,
                    })

            return JsonResponse(endpoints, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def endpoints_validations(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            endpoints = user.active_project.apps[0].endpoints
            validations = []
            for endpoint in endpoints:
                validations.append(endpoint.request.get(
                    'method') + endpoint.request.get('uri'))

            return JsonResponse(validations, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)

@csrf_exempt
def endpoint(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            endpoint = Endpoint.objects.get(
                id=kwargs.get('endpoint_id'), user=user)

            endpoint = {
                "id": endpoint.id,
                "name": endpoint.name,
                "description": endpoint.description,
                "is_draft": endpoint.is_draft,
                "request": endpoint.request,
                "headers": endpoint.headers,
                "params": endpoint.params,
                "body": endpoint.body,
                "response": endpoint.response,
                "misc": endpoint.misc,
            }

            return JsonResponse(endpoint, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    elif request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            # for endpoint in user.active_project.apps[0].endpoints:
            #     if endpoint.request.get('method') == body.get('form').get('request').method and endpoint.request.get('uri') == body.get('form').get('request').get('uri'):
            #         print('method and uri already exists\n')
            #         return JsonResponse(False, safe=False)

            endpoint = Endpoint(
                user=user,
                token=generate_terminal_token(True),
                app=user.active_project.apps[0],
                name=body.get('misc').get('name'),
                description=body.get('misc').get('description'),
                is_draft=body.get('misc').get('is_draft'),
                request=body.get('form').get('request'),
                headers=body.get('form').get('headers'),
                params=body.get('form').get('params'),
                body=body.get('form').get('body'),
                # logic=body.get('form').get('logic'),
                response=body.get('response'),
                misc=body.get('misc'),
            )
            endpoint.save()

            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, status=500, safe=False)

    elif request.method == 'PUT':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            endpoint = Endpoint.objects.get(
                pk=kwargs.get('endpoint_id'), user=user)

            endpoint.name = body.get('misc').get('name')
            endpoint.description = body.get('misc').get('description')
            endpoint.is_draft = body.get('misc').get('is_draft')
            endpoint.request = body.get('form').get('request')
            endpoint.headers = body.get('form').get('headers')
            endpoint.params = body.get('form').get('params')
            endpoint.body = body.get('form').get('body')
            endpoint.logic = body.get('form').get('logic')
            endpoint.response = body.get('response')
            endpoint.misc = body.get('misc')
            endpoint.save()

            return JsonResponse(True, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    elif request.method == 'DELETE':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            endpoint = Endpoint.objects.get(
                pk=kwargs.get('endpoint_id'), user=user)

            endpoint.delete()

            endpoints = {}
            for app in user.active_project.apps:
                endpoints[app.name] = []
                for endpoint in app.endpoints:
                    endpoints[app.name].append({
                        "id": endpoint.id,
                        "name": endpoint.name,
                        "request": endpoint.request,
                        "is_draft": endpoint.is_draft,
                        "auth_required": True if endpoint.headers.get('authorization') else False
                    })

            return JsonResponse(endpoints, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)

    return JsonResponse(False, status=501, safe=False)
