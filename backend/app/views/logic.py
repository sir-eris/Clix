"""
LOGIC CRUD VIEWS
"""
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from app.utils import *
from app.models import *


@csrf_exempt
def logic(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            return JsonResponse({}, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    elif request.method == 'POST':
        try:
            return JsonResponse({}, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    elif request.method == 'PUT':
        try:
            return JsonResponse({}, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    elif request.method == 'DELETE':
        try:
            return JsonResponse({}, status_code=200, safe=False)
        except Exception as e:
            return JsonResponse(False, status_code=500, safe=False)
    

    return JsonResponse(False, status_code=501, safe=False)


@csrf_exempt
def logic(request, *args, **kwargs):
    pass
