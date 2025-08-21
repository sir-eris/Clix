"""
MODEL CRUD VIEWS
"""
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def model_foreign_keys(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            user = User.objects.get(email=decode_auth_token(
                request.headers.get('Authorization')).get('email'))
            foreign_keys = []
            for app in user.active_project.apps:
                for model in app.models:
                    foreign_keys.append(model.name)

            return JsonResponse(foreign_keys, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)


@csrf_exempt
def models(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            models = {}
            for app in user.active_project.apps:
                models[app.name] = []
                for model in app.models:
                    models[app.name].append({
                        "id": model.id,
                        "name": model.name,
                        "is_draft": model.is_draft,
                        "fields": model.fields,
                    })

            return JsonResponse(models, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)


@csrf_exempt
def model(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            model = Model.objects.get(pk=kwargs.get('model_id'), user=user)

            foreign_keys = [
                model.name for model in user.active_project.apps[0].models]

            model = {
                "id": model.id,
                "name": model.name,
                "is_draft": model.is_draft,
                "fields": model.fields,
                "foreign_keys": foreign_keys,
            }

            return JsonResponse(model)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)
    elif request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            app = user.active_project.apps[0]

            fields = {}
            for id in body.get('fields'):
                field = body.get('fields')[id]
                fields[id] = [
                    generate_terminal_token(),
                    field[0],
                    field[1],
                    field[2],
                    field[3],
                    True if field[4] else False,
                    True if field[5] else False,
                    True if field[6] else False,
                    True if field[7] else False,
                    True if field[8] else False,
                ]

            model = Model(
                user=user,
                app=app,
                name=body.get('table_name'),
                is_draft=body.get('is_draft'),
                fields=fields,
            )
            model.save()

            models = {}
            for app in user.active_project.apps:
                models[app.name] = []
                for model in app.models:
                    models[app.name].append({
                        "id": model.id,
                        "name": model.name,
                        "is_draft": model.is_draft,
                        "fields": model.fields,
                    })

            return JsonResponse(models, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)
    elif request.method == 'PUT':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            model = Model.objects.get(pk=kwargs.get('model_id'), user=user)

            fields = body.get('fields')
            for key, field in fields.items():
                if not fields[key][0]:
                    fields[key][0] = generate_terminal_token()

            model.name = body.get('name')
            model.is_draft = body.get('is_draft')
            model.fields = {i: v for i, v in enumerate(fields.values())}
            model.save()

            models = {}
            for app in user.active_project.apps:
                models[app.name] = []
                for model in app.models:
                    models[app.name].append({
                        "id": model.id,
                        "name": model.name,
                        "is_draft": model.is_draft,
                        "fields": model.fields,
                    })

            return JsonResponse(models, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    elif request.method == 'DELETE':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            model = Model.objects.get(pk=kwargs.get('model_id'), user=user)

            if kwargs.get('field_id'):
                fields = {}
                for _, id in enumerate(model.fields):
                    if model.fields[id][0] != kwargs.get('field_id'):
                        fields[_] = model.fields[id]

                model.fields = {i: v for i, v in enumerate(fields.values())}
                model.save()
            else:
                model.delete()

            models = {}
            for app in user.active_project.apps:
                models[app.name] = []
                for model in app.models:
                    models[app.name].append({
                        "id": model.id,
                        "name": model.name,
                        "is_draft": model.is_draft,
                        "fields": model.fields,
                    })

            return JsonResponse(models, safe=False)
        except Exception as e:
            print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, safe=False)
