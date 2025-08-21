"""
LOGIC CRUD VIEWS
"""
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def load(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            share_token = kwargs.get('share_token')
            try:
                arch = Architecture.objects.get(token=share_token)
                res = {
                    "token": arch.token,
                    "nodes": arch.nodes,
                    "edges": arch.edges,
                    "viewport": arch.viewport,
                }
                return JsonResponse(res, status=200, safe=False)
            except Exception:
                return JsonResponse(False, status=404, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)

    return JsonResponse(False, status=501, safe=False)


# @csrf_exempt
# def save(request, *args, **kwargs):
#     if request.method == 'PUT':
#         try:
#             return JsonResponse({}, status=200, safe=False)
#         except Exception as e:
#             return JsonResponse(False, status=500, safe=False)

#     return JsonResponse(False, status=501, safe=False)


@csrf_exempt
def share(request, *args, **kwargs):
    if request.method == 'POST':
        try:
            headers = request.headers
            body = json.loads(request.body)
            user_exs = None
            try:
                user = User.objects.get(email=decode_auth_token(headers.get('Authorization')).get('email'))
                user_exs = user
            except Exception:
                pass

            arch = Architecture(
                user=user_exs,
                token=body.get("token"),
                nodes=body.get("nodes"),
                edges=body.get("edges"),
                viewport=body.get("viewport"),
            )
            arch.save()
            return JsonResponse(True, status=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status=500, safe=False)

    return JsonResponse(False, status=501, safe=False)


