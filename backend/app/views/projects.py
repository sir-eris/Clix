"""
PROJECT CRUD VIEWS
"""
import json
from django.utils import timezone
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def activate_project(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            project_id = kwargs.get('project_id')
            user = User.objects.get(email=decode_auth_token(
                request.headers.get('Authorization')).get('email'))
            project = Project.objects.get(id=project_id, user=user)
            project.activate()

            projects = [{
                'id': project.id,
                "name": project.name,
                'token': project.token,
                'is_active': project.is_active,
                "framework": project.framework,
                "language": project.language,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

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

            return JsonResponse({"projects": projects, "endpoints": endpoints, "models": models, "settings": project.settings}, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def projects(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            projects = [{
                'id': project.id,
                "name": project.name,
                'token': project.token,
                'is_active': project.is_active,
                "framework": project.framework,
                "language": project.language,
                "description": project.description,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            return JsonResponse(projects, safe=False)
        except Exception as e:
            # # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def project(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            project = Project.objects.get(
                pk=kwargs.get('project_id'), user=user)

            return JsonResponse(project)
        except Exception as e:
            return JsonResponse(False, safe=False)
    if request.method == 'PUT':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            project = Project.objects.get(
                pk=kwargs.get('project_id'), user=user)

            project.name = body.get('name')
            project.last_edited = timezone.now()
            project.save()

            projects = [{
                'id': project.id,
                "name": project.name,
                "token": project.token,
                'is_active': project.is_active,
                "language": project.language,
                "framework": project.framework,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            templates = [{
                'id': template.id,
                "name": template.name,
                "token": template.token,
                'is_active': template.is_active,
                "framework": template.framework,
                "endpoints": template.apps[0].endpoints.count(),
                "data_models": template.apps[0].models.count(),
                "settings": len(template.settings.items()),
                "created_at": time_from_now(template.created_at),
            } for template in user.templates]

            return JsonResponse({"projects": projects, "templates": templates}, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    elif request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            project = Project(
                user=user,
                token=generate_terminal_token(),
                name=body.get('name').replace(' ', '_'),
                framework=body.get('framework'),
                language=body.get('language'),
                description=body.get('description'),
            )
            project.save()
            app = App(
                user=user,
                is_active=True,
                project=project,
                name=body.get('app_name'),
                base_url=body.get('app_base_url'),
            )
            app.save()

            if len(user.projects) == 1:
                u = user.projects[0]
                u.is_active = True
                u.save()

            projects = [{
                'id': project.id,
                "name": project.name,
                "token": project.token,
                'is_active': project.is_active,
                "framework": project.framework,
                "language": project.language,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            return JsonResponse(projects, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)
    elif request.method == 'DELETE':
        try:
            headers = request.headers
            # body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            project = Project.objects.get(
                pk=kwargs.get('project_id'), user=user)

            if len(user.projects) > 1:
                if project.is_active:
                    project.delete()
                    project = user.projects[0]
                    project.is_active = True
                    project.save()
                else:
                    project.delete()
            else:
                project.delete()

            projects = [{
                'id': project.id,
                "name": project.name,
                "token": project.token,
                'is_active': project.is_active,
                "framework": project.framework,
                "language": project.language,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            return JsonResponse(projects, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def project_settings(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            settings = user.active_project.settings

            return JsonResponse(settings, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    if request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            project = user.active_project
            project.settings = {i: v for i, v in enumerate(
                body.get('fields').values())}
            project.save()

            return JsonResponse(project.settings, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)

    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def templates(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            templates = [{
                'id': template.id,
                "name": template.name,
                "token": template.token,
                'is_active': template.is_active,
                "framework": template.framework,
                "endpoints": template.apps[0].endpoints.count(),
                "data_models": template.apps[0].models.count(),
                "settings": len(template.settings.items()),
                "created_at": time_from_now(template.created_at),
            } for template in user.templates]

            return JsonResponse(templates, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def project_from_template(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))
            template = Project.objects.get(user=user, is_template=True, pk=kwargs.get('template_id'))

            # duplicate the template and every component with new ids
            new_apps = []
            new_models = []
            new_endpoints = []


            new_project = Project(
                user=user,
                token=generate_terminal_token(),
                is_active=False if user.projects.count() > 0 else True,
                is_template=False,
                from_template=template.id,
                name=template.name,
                settings=template.settings,
                framework=template.framework,
                language=template.language,
                description=template.description,
            )
            new_project.save()

            for app in template.apps:
                a = App(
                    user=user,
                    is_active=False,
                    project=new_project,
                    name=app.name,
                    base_url=app.base_url,
                )
                a.save()
                new_apps.append(a)

                for model in app.models:
                    m = Model(
                        user=user,
                        app=a,
                        name=model.name,
                        is_draft=model.is_draft,
                        fields=model.fields,
                    )
                    m.save()
                    new_models.append(m)
                
                for endpoint in app.endpoints:
                    e = Endpoint(
                        user=user,
                        app=a,
                        token=generate_terminal_token(True),
                        name=endpoint.name,
                        description=endpoint.description,
                        is_draft=endpoint.is_draft,
                        request=endpoint.request,
                        headers=endpoint.headers,
                        params=endpoint.params,
                        body=endpoint.body,
                        response=endpoint.response,
                        misc=endpoint.misc,
                    )
                    e.save()
                    new_endpoints.append(e)

            
            projects = [{
                'id': project.id,
                "name": project.name,
                "token": project.token,
                'is_active': project.is_active,
                # "framework": project.framework,
                # "language": project.language,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            return JsonResponse(projects, safe=False)
        except Exception as e:
            return JsonResponse(False, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def new_template(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))
            project = Project.objects.get(user=user, is_template=False, pk=kwargs.get('project_id'))
            project.name = project.name + '_TEMP'
            project.is_template = True
            # if this project was active_project, make next project active
            if project.is_active:
                project.is_active = False
            project.save()

            # activate next project
            if user.projects.count() > 0:
                project = user.projects[0]
                project.is_active = True
                project.save()

            templates = [{
                'id': template.id,
                "name": template.name,
                "token": template.token,
                'is_active': template.is_active,
                "framework": template.framework,
                "endpoints": template.apps[0].endpoints.count(),
                "data_models": template.apps[0].models.count(),
                "settings": len(template.settings.items()),
                "created_at": time_from_now(template.created_at),
            } for template in user.templates]

            projects = [{
                'id': project.id,
                "name": project.name,
                'token': project.token,
                'is_active': project.is_active,
                "framework": project.framework,
                "language": project.language,
                "description": project.description,
                "created_at": time_from_now(project.created_at),
                "last_edited": time_from_now(project.last_edited),
                "size": project.size,
            } for project in user.projects]

            return JsonResponse({"templates": templates, "projects": projects}, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def delete_template(request, *args, **kwargs):
    if request.method == 'DELETE':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            template = Project.objects.get(
                is_template=True, pk=kwargs.get('template_id'), user=user)
            template.delete()

            templates = [{
                'id': template.id,
                "name": template.name,
                "token": template.token,
                'is_active': template.is_active,
                "framework": template.framework,
                "endpoints": template.apps[0].endpoints.count(),
                "data_models": template.apps[0].models.count(),
                "settings": len(template.settings.items()),
                "created_at": time_from_now(template.created_at),
            } for template in user.templates]

            return JsonResponse(templates, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)
    
    return JsonResponse(False, status=501, safe=False)


# @csrf_exempt
# def share_template(request, *args, **kwargs):
#     # generate template id for share
#     if request.method == 'PUT':
#         try:
#             template_id = kwargs.get('template_id')
#             template = Project.objects.get(id=template_id, is_template=True)
#             headers = request.headers
#             user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))

#             # duplicate template for user_id
#             if user and template:
#                 if template.user != user.id:
#                     template.user = user
#                     template.save()
#                     return JsonResponse(True, safe=False)

#             return JsonResponse(False, safe=False)
#         except Exception as e:
#             # print(e)
#             return JsonResponse(False, safe=False)


# TODO
@csrf_exempt
def add_share_template(request, *args, **kwargs):
    # load project and duplicate for this user
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))
            token = request.PUT.get('token')
            template = Template.objects.get(token=token, is_public=True)
            project = Project.objects.get(
                id=template.project_id, is_public=True)

            new_template = Template(
                user=user,
                token=generate_terminal_token(),
                is_public=True,

            )
            new_template.save()
            template.share += 1
            template.save()

            response = project.name
            return JsonResponse(response, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)
    return JsonResponse(False, safe=False)


@csrf_exempt
def apps(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            headers = request.headers
            user = User.objects.get(email=decode_auth_token(
                headers.get('Authorization')).get('email'))

            apps = [{'id': app.id, 'name': app.name}
                    for app in user.active_project.apps]

            return JsonResponse(apps, safe=False)
        except Exception as e:
            # print(e)
            return JsonResponse(False, safe=False)

    return JsonResponse(False, safe=False)
