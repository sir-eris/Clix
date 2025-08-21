from django.contrib import admin

from .models import User, UserInfo, Project, App, Endpoint, Model, SyncHistory, Contact, Newsletter, FAQ

admin.site.register(User)
admin.site.register(UserInfo)
admin.site.register(Project)
admin.site.register(App)
admin.site.register(Endpoint)
admin.site.register(Model)
# admin.site.register(SyncHistory)
admin.site.register(Contact)
admin.site.register(Newsletter)
admin.site.register(FAQ)
