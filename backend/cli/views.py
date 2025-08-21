import json
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from django.core.management.utils import get_random_secret_key

from app.models import User, Project
# , SyncHistory


@csrf_exempt
def verify_user(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            # headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(username=body.get('username'), terminal_token=body.get('terminal_token'))
            if user and check_password(body.get('password'), user.password):
                return JsonResponse(True, safe=False)
            
            return JsonResponse(False, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)


@csrf_exempt
def generate(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            terminal_token = body.get('terminal_token')
            project_token = body.get('project_token')
            user = User.objects.get(terminal_token=terminal_token)
            project = Project.objects.get(token=project_token, is_template=False, user=user)

            if not project:
                return JsonResponse(False, safe=False)
            
            app = project.apps[0]

            endpoints = [{
                "misc": {
                    "endpoint_id": endpoint.id,
                    "is_draft": endpoint.is_draft,
                    "token": endpoint.token,
                    "name": endpoint.name,
                    "description": endpoint.description,
                    'base_url': app.base_url,
                },
                "request": {
                    "method": endpoint.request.get('method'),
                    "host": endpoint.request.get('host'),
                    "uri": endpoint.request.get('uri'),
                },
                "headers": endpoint.headers,
                "params": endpoint.params,
                "body": endpoint.body,
                "response": endpoint.response,
            } for endpoint in app.endpoints]
            models = [{
                "table_name": model.name,
                "fields": model.fields,
            } for model in app.models]
            response = {
                "misc": {
                    "user_id": user.id,
                    "project_id": project.id,
                    "project_name": project.name,
                    "last_generated_name": project.last_generated_name,
                    "project_path": project.local_path,
                    "secret_key": get_random_secret_key(),
                },
                "apps": [
                    {
                        "name": app.name,
                        "base_url": app.base_url,
                        "endpoints": endpoints,
                        "models": models,
                    },
                ],
                "functions": project.functions,
                "integrations": project.integrations,
                "settings": project.settings,
            }
            
            if body.get('local_path'):
                project.local_path = body.get('local_path')

            if project.name != project.last_generated_name:
                project.last_generated_name = project.name
            
            project.generate_count += 1
            project.save()

            return JsonResponse(response)
        except Exception as e:
            print('error: ', e)
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)
    
@csrf_exempt
def sync(request, *args, **kwargs):
    try:
        body = json.loads(request.body)
        terminal_token = body.get('terminal_token')
        project_token = body.get('project_token')
        user = User.objects.get(terminal_token=terminal_token)
        project = Project.objects.get(token=project_token, is_template=False, user=user)

        if not project:
            return JsonResponse(False, safe=False)
        
        app = project.apps[0]
        
        # [method, base_url, uri, [headers], [params], [body], token, draft, host]
        endpoints_validations = [(endpoint.request.get('method'), app.base_url, endpoint.request.get('uri'), list(endpoint.headers.get('body').values()), list(endpoint.params.values()), list(endpoint.body.get('payload').values()), endpoint.token, endpoint.is_draft, endpoint.request.get('host')) for endpoint in app.endpoints]
        # settings = [setting for setting in project.settings.values()]
        endpoints = [{
            "misc": {
                "endpoint_id": endpoint.id,
                "is_draft": endpoint.is_draft,
                "token": endpoint.token,
                "name": endpoint.name,
                "description": endpoint.description,
                'base_url': app.base_url,
            },
            "request": {
                "method": endpoint.request.get('method'),
                "host": endpoint.request.get('host'),
                "uri": endpoint.request.get('uri'),
            },
            "headers": endpoint.headers,
            "params": endpoint.params,
            "body": endpoint.body,
            "response": endpoint.response,
        } for endpoint in app.endpoints]
        models = [{
            "table_name": model.name,
            "fields": model.fields,
        } for model in app.models]
        
        response = {
            "misc": {
                "user_id": user.id,
                "project_id": project.id,
                "project_name": project.name,
                "last_generated_name": project.last_generated_name,
                "project_path": project.local_path,
                "secret_key": get_random_secret_key(),
            },
            "apps": [
                {
                    "name": app.name,
                    "base_url": app.base_url,
                    "endpoints": endpoints,
                    "models": models,
                },
            ],
            'validations': endpoints_validations,
            "settings": project.settings,
        }
        
        if project.name != project.last_generated_name:
            project.last_generated_name = project.name
        project.sync_count += 1
        project.save()

        return JsonResponse(response)
    except Exception as e:
        print(e)
        return JsonResponse(False, safe=False)


@csrf_exempt
def docs(request, *args, **kwargs):
    try:
        body = json.loads(request.body)
        terminal_token = body.get('terminal_token')
        project_token = body.get('project_token')
        user = User.objects.get(terminal_token=terminal_token)
        project = Project.objects.get(token=project_token, is_template=False, user=user)

        if not project:
            return JsonResponse(False, safe=False)

        app = project.apps[0]
        docs = []
        for endpoint in app.endpoints:
            docs.append({
                "name": endpoint.name,
                "description": endpoint.description,
                "uri": app.base_url + "/" + endpoint.request.get('uri'),
                "headers": endpoint.headers,
                "params": [param for param in endpoint.params.values()],
                "body_type": endpoint.body.get('type') if endpoint.body.get('type') else None,
                "body": [body for body in endpoint.body.get('payload').values()],
                "response": endpoint.response,
            })
        
        response = {
            "misc": {
                "project_path": project.local_path,
            },
            "docs": {
                "endpoints": docs,
                "misc": {
                    "created_by": user.first_name + " " + user.last_name + " #" + user.terminal_token,
                    "project_name": project.name,
                    "total_endpoints": len(app.endpoints),
                }
            }
        }

        project.docs_count += 1
        project.save()
        
        return JsonResponse(response)
    except Exception as e:
        print(e)
        return JsonResponse(False, safe=False)


