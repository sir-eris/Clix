from django.contrib import admin
from django.urls import path, include

from app import urls as app_urls
from cli import urls as package_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/webapp/', include(app_urls)),
    path('api/package/', include(package_urls)),
]
