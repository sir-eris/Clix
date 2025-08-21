from django.contrib import admin
from django.urls import path, include

from .views import *

urlpatterns = [
    path('sync', sync),
    path('docs', docs),
    path('generate', generate),
    path('verify-user', verify_user),
]
