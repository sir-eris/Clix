import uuid
from django.db import models
from django.utils import timezone

# TODO all updated_at fields should be moved to no-sql db and here record the ID only

# Needs to be on no-sql db
# class Subscription(models.Model):
#     id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
#     title = models.CharField(max_length=255, blank=True, null=True)
#     amount = models.DecimalField(default=0.00, decimal_places=4, max_digits=10)
#     currency = models.CharField(max_length=6, default="USD")
#     recursion_days = models.PositiveSmallIntegerField(default=28)
#     trial_period_days = models.PositiveSmallIntegerField(default=30)
#     updated_at = models.DateTimeField(blank=True, null=True)
#     created_at = models.DateTimeField(default=timezone.now, editable=False)


# Needs to be on no-sql db
# class Team(models.Model):
#     id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
#     username = models.CharField(max_length=255, unique=True, blank=True, null=True)
#     name = models.CharField(max_length=255, blank=True, null=True)
#     description = models.CharField(max_length=255, blank=True, null=True)
#     thumbnail = models.ImageField(upload_to='teams/thumbnails', blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)
#     created_at = models.DateTimeField(default=timezone.now, editable=False)


# Needs to be on no-sql db
# class Role(models.Model):
#     id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
#     name = models.CharField(max_length=255, blank=True, null=True)
#     team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True)
#     endpoint_permissions = models.CharField(max_length=255, blank=True, null=True)
#     logic_permissions = models.CharField(max_length=255, blank=True, null=True)
#     model_permissions = models.CharField(max_length=255, blank=True, null=True)
#     setting_permissions = models.CharField(max_length=255, blank=True, null=True)
#     projects_permissions = models.CharField(max_length=255, blank=True, null=True)
#     profile_permissions = models.CharField(max_length=255, blank=True, null=True)
#     environment_permissions = models.CharField(max_length=255, blank=True, null=True)
#     team_setting_permissions = models.CharField(max_length=255, blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)
#     created_at = models.DateTimeField(default=timezone.now, editable=False)


class User(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    # team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True)
    # role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    username = models.CharField(max_length=255, unique=True, blank=True, null=True)
    terminal_token = models.CharField(max_length=255)
    owner = models.UUIDField(max_length=21, null=True, blank=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_authenticated = models.BooleanField(default=True)
    is_anonymous = models.BooleanField(default=False)
    email_verified_at = models.DateTimeField(blank=True, null=True)
    temp_code = models.CharField(max_length=8, blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False, null=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'password']

    @property
    def user_info(self):
        try:
            user_info = UserInfo.objects.get(user=self)
        except Exception as e:
            # print(e)
            try:
                user_info = UserInfo(
                    user=self,
                    first_name=self.first_name,
                    last_name=self.last_name,
                )
                user_info = user_info.save()
            except Exception as ex:
                # print(ex)
                return False
        
        return user_info

    @property
    def env(self):
        try:
            env = UserInfo.objects.get(user=self.id).environment
        except:
            env = UserInfo(user=self.id)
            env = env.save()
            env = env.environment
        
        return env

    @property
    def lines_saved(self):
        try:
            lines = UserInfo.objects.get(user=self.id).lines_saved
        except:
            env = UserInfo(user=self.id)
            env = env.save()
            lines = env.lines_saved
        
        return lines

    @property
    def projects(self):
        return Project.objects.filter(user=self.id, is_template=False).all()
    
    @property
    def templates(self):
        return Project.objects.filter(user=self.id, is_template=True).all()
    
    @property
    def active_project(self):
        return Project.objects.get(user=self.id, is_template=False,  is_active=True)
            


class UserInfo(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, blank=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    initial_thumbnail = models.ImageField(upload_to='users/thumbnails', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='users/thumbnails', blank=True, null=True)
    lines_saved = models.PositiveIntegerField(default=0, blank=True, null=True)
    environment = models.JSONField(default=dict, blank=True, null=True)
    page_visited = models.JSONField(default=dict, blank=True, null=True)
    experience_level = models.PositiveSmallIntegerField(choices=((0, None),(1, "1"),(2, "2"),(3, "3"),(4, "4")), default=0, null=True, blank=True)


class Project(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    token = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=False, null=True)
    is_template = models.BooleanField(default=False, null=True)
    from_template = models.UUIDField(max_length=21, null=True, blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    framework = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=255, blank=True, null=True)
    settings = models.JSONField(default=dict, blank=True, null=True)
    size = models.CharField(max_length=20, default=0, blank=True, null=True)
    local_path = models.CharField(max_length=255, blank=True, null=True)
    lines = models.IntegerField(default=0, blank=True, null=True)
    last_generated_name = models.CharField(max_length=255, blank=True, null=True)
    generate_count = models.IntegerField(default=0, blank=True, null=True)
    sync_count = models.IntegerField(default=0, blank=True, null=True)
    docs_count = models.IntegerField(default=0, blank=True, null=True)
    last_edited = models.DateTimeField(default=timezone.now, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    @property
    def apps(self):
        return App.objects.filter(user=self.user, project=self.id).all()

    @property
    def nodes(self):
        return Node.objects.filter(user=self.user, project=self.id).all()

    @property
    def logics(self):
        return Logic.objects.filter(user=self.user, project=self.id).all()
    
    @property
    def active_app(self):
        return App.objects.get(user=self.user, project=self.id, is_active=True)

    def activate(self):
        Project.objects.filter(user=self.user).update(is_active=False)
        self.is_active = True
        return self.save()
    
    def temple(self):
        self.is_template = True
        return self.save()
    
    def duplicate(self):
        self.pk = None
        self.save()
        return self
    
    def update_last_edit(self):
        self.last_edited = timezone.now
        return self.save()


# class Template(models.Model):
#     id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
#     project_id = models.UUIDField(max_length=21, null=True, blank=True)
#     owner = models.UUIDField(max_length=21, null=True, blank=True)
#     is_public = models.BooleanField(default=False, null=True)
#     token = models.CharField(max_length=255, null=True, blank=True)
#     shared = models.IntegerField(null=True, blank=True)
#     created_at = models.DateTimeField(default=timezone.now, editable=False)


# TODO implement Version (turn App into Version?)
class App(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    # turn default to false when added new app creation functionality
    is_active = models.BooleanField(default=True, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    is_version = models.BooleanField(default=True, null=True, blank=True)
    base_url = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    @property
    def endpoints(self):
        return Endpoint.objects.filter(app=self.id).all()

    @property
    def models(self):
        return Model.objects.filter(app=self.id).all()

    @property
    def logics(self):
        return Logic.objects.filter(app=self.id).all()

    @property
    def nodes(self):
        return Node.objects.filter(app=self.id).all()

    def activate(self):
        App.objects.filter(user=self.user).update(is_active=False)
        self.is_active = True
        return self.save()


# TODO: turn into graphQL
class Architecture(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    token = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    viewport = models.JSONField(default=dict, blank=True, null=True)
    nodes = models.JSONField(default=dict, blank=True, null=True)
    edges = models.JSONField(default=dict, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    



# TODO: turn into graphQL
class Logic(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    # team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    app = models.ForeignKey(App, on_delete=models.SET_NULL, null=True, blank=True)
    structure = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField(default=timezone.now, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


# TODO: turn into graphQL
class Node(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    # team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    app = models.ForeignKey(App, on_delete=models.SET_NULL, null=True, blank=True)
    # logic = models.ForeignKey(Logic, on_delete=models.SET_NULL, null=True, blank=True)
    logic = models.TextField(null=True, blank=True) # the code
    grid_position = models.CharField(max_length=20, null=True, blank=True)
    structure = models.TextField(null=True, blank=True) # html + data
    updated_at = models.DateTimeField(default=timezone.now, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


    # @property
    # def logic(self):
    #     return Logic.objects.get(id=self.logic, team=self.team, project=self.project, app=self.app)
    #?     return self


class Endpoint(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    app = models.ForeignKey(App, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    token = models.CharField(max_length=69, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    is_draft = models.BooleanField(default=False)
    request = models.JSONField(default=dict, blank=True, null=True)
    headers = models.JSONField(default=dict, blank=True, null=True)
    params = models.JSONField(default=dict, blank=True, null=True)
    body = models.JSONField(default=dict, blank=True, null=True)
    # logic = models.ForeignKey(Logic, on_delete=models.SET_NULL, blank=True, null=True)
    response = models.JSONField(default=dict, blank=True, null=True)
    misc = models.JSONField(default=dict, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class Model(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    app = models.ForeignKey(App, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    is_draft = models.BooleanField(default=False, blank=True, null=True)
    fields = models.JSONField(default=dict)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class SyncHistory(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    system_info = models.JSONField(default=dict, blank=True, null=True)
    cpu_info = models.JSONField(default=dict, blank=True, null=True)
    memory_info = models.JSONField(default=dict, blank=True, null=True)
    disk_info = models.JSONField(default=dict, blank=True, null=True)
    network_info = models.JSONField(default=dict, blank=True, null=True)


class Contact(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    topic = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class Newsletter(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    status = models.PositiveSmallIntegerField(default=1, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    topics = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)


class FAQ(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, max_length=21, default=uuid.uuid4, auto_created=True)
    status = models.PositiveSmallIntegerField(default=0, blank=True, null=True)
    topic = models.CharField(max_length=255, blank=True, null=True)
    question = models.CharField(max_length=255, blank=True, null=True)
    answer = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(null=True, blank=True)



    # def create_role(self):
    #     return Role(name="Admin", team=self.team).save()

    # @property
    # def endpoint_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).endpoint_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def logic_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).logic_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def model_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).model_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def setting_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).setting_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def projects_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).projects_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def profile_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).profile_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def environment_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).environment_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def team_setting_permissions(self):
    #     try:
    #         return Role.objects.get(id=self.role).team_setting_permissions
    #     except:
    #         return self.create_role()
    
    # @property
    # def setting_permissions(self):
        # try:
        #     return Role.objects.get(id=self.role).setting_permissions
        # except:
        #     return self.create_role()