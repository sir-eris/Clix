from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from app.views import auth, architecture, endpoints, models, projects, account, public, app


AUTH = [
    path('auth/logout', auth.logout), # GET
    path('auth/login', auth.login), # GET, POST
    path('auth/register', auth.register), # POST
    path('auth/update-password', auth.update_password),  # PUT
    path('auth/visited/<page>', auth.check_page_visited),  # GET
    path('auth/reset-password', auth.reset_password),  # POST, PUT
]

ARCHITECTURE = [
    # path('architecture/save', architecture.save), # PUT
    path('architecture/share', architecture.share), # POST
    path('architecture/load/<share_token>', architecture.load), # GET
]

ENDPOINTS = [
    path('endpoints', endpoints.endpoints),  # GET
    path('endpoint', endpoints.endpoint),  # POST
    path('endpoints/validations/', endpoints.endpoints_validations),  # GET
    path('endpoint/<endpoint_id>', endpoints.endpoint),  # GET, PUT, DELETE
    path('endpoints/validations/', endpoints.endpoints_validations),  # GET
]

# LOGIC = [
#     path('nodes/all', logic.retrieve_all),  # GET
#     path('node/create', logic.create),  # POST
#     path('node/update/<node_id>', logic.update),  # PUT
#     path('node/delete/<node_id>', logic.delete),  # DELETE
# ]

# ??? EDGES

MODELS = [
    path('models', models.models),  # GET
    path('model', models.model),  # POST
    path('model/<model_id>', models.model),  # GET, PUT, DELETE
    path('models-foreign-keys', models.model_foreign_keys),  # GET
    path('model/<model_id>/<field_id>', models.model),  # GET, PUT, DELETE
]

PROJECTS = [
    path('projects', projects.projects),  # GET
    path('project', projects.project),  # POST
    path('project/<project_id>', projects.project),  # GET, PUT, DELETE
    path('project/settings/', projects.project_settings),  # GET, POST
    path('project/activate/<project_id>', projects.activate_project),  # GET
]

TEMPLATES = [
    path('templates', projects.templates),  # GET
    path('template/delete/<template_id>', projects.delete_template),  # DELETE
    path('template-from-project/<project_id>', projects.new_template),  # POST
    path('project-from-template/<template_id>', projects.project_from_template),  # POST
]

APPS = [
    path('app/create', app.create),  # POST
    path('apps/all', app.retrieve_all),  # GET
    path('app/update/<app_id>', app.update),  # PUT
    path('app/delete/<app_id>', app.delete),  # DELETE
    path('app/activate/<app_id>', app.activate_app),  # PATCH
]

ACCOUNT = [
    path('account', account.account),  # GET, PUT
    path('environment', account.environment),  # GET, PATCH
    path('account/thumbnail', account.thumbnail),  # PUT, DELETE
    path('account/send-verify-email', account.send_verify_email),  # GET
]

urlpatterns = [
    # path('send-email', public.send_job_application_emails),
    
    path('contact', public.contact), # POST
    path('newsletter', public.newsletter),  # POST
    path('newsletter/unsubscribe', public.newsletter),  # PUT

    path('faqs', public.faqs),  # GET
    path('faqs/ask', public.faqs),  # POST
    ] + \
    AUTH + \
    ARCHITECTURE + \
    ENDPOINTS + \
    MODELS + \
    APPS + \
    PROJECTS + \
    TEMPLATES + \
    ACCOUNT + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
