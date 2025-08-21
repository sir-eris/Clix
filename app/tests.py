from django.test import TestCase
from rest_framework.test import APIRequestFactory, RequestsClient

from .models import *
from .views.auth import *

class TestAuth(TestCase):
    def setUp(self):
        pass

    def testRegister(self):
        """
        Register
        """
        print()
        #* control
        factory = RequestsClient()
        response = factory.post('http://localhost:8000/api/webapp/auth/register', json={
                "password": "Casilass!4411",
                "email": "email@email.com",
                "first_name": "first name",
                "last_name": "last name",
                "experience_level": 3,
            }, headers={"content_type":'application/json'})
        print("control: {} - {} \n".format(response.status_code, response.content))
        
        # email already exists
        response = factory.post('http://localhost:8000/api/webapp/auth/register', json={
                "password": "Casilass!4411",
                "email": "email@email.com",
                "first_name": "first name",
                "last_name": "last name",
                "experience_level": 3,
            }, headers={"content_type":'application/json'})
        print("email already exists: {} - {} \n".format(response.status_code, response.content))
        
        # experience not provided
        response = factory.post('http://localhost:8000/api/webapp/auth/register', json={
                "password": "Casilass!4411",
                "email": "email@email.com",
                "first_name": "first name",
                "last_name": "last name",
            }, headers={"content_type":'application/json'})
        print("experience not provided: {} - {} \n".format(response.status_code, response.content))
        
        # first and name combination already exists
        response = factory.post('http://localhost:8000/api/webapp/auth/register', json={
                "password": "Casilass!4411",
                "email": "mail@mail.com",
                "first_name": "first name",
                "last_name": "last name",
                "experience_level": 3,
            }, headers={"content_type":'application/json'})
        print("first and name combination already exists: {} - {} \n".format(response.status_code, response.content))

    # def testLogin(self):
    #     """
    #     Login
    #     """
    #     #* control
    #     login(request=dict({
    #         "method": "POST",
    #         "headers": {
    #             "Authorization": "Bearer "
    #         },
    #         "body": json.dumps({"password": "Casilass!4411"})
    #     }))
    #     # email doesn't exist
    #     login(request=dict({
    #         "method": "POST",
    #         "headers": {
    #             "Authorization": {"email": "mail@mail.com"}
    #         },
    #         "body": json.dumps({"password": "Casilass!4411"})
    #     }))
    #     #  email exists and !(email password combo)
    #     login(request=dict({
    #         "method": "POST",
    #         "headers": {
    #             "Authorization": "Bearer "
    #         },
    #         "body": json.dumps({"password": "Casilass4411"})
    #     }))
    #     """
    #     Login Check
    #     """
    #     #* control
    #     login(request=dict({
    #         "method": "GET",
    #         "headers": {
    #             "Authorization": "Bearer "
    #         },
    #     }))

    # def testResetPassword(self):
    #     """
    #     Password Reset
    #     """
    #     #* control
    #     reset_password()
    #     # email doesn't exist
    #     reset_password()
    #     #  email exists and !(email password combo)
    #     reset_password()

# @csrf_exempt
# def old_data(request, *args, **kwargs):
#     if request.method == 'GET':
#         try:
#             BASE_DIR = Path(__file__).resolve().parent.parent.parent
#             with open(BASE_DIR / "user_data.csv", 'r') as file:
#                 file = csv.reader(file)
#                 for i, row in enumerate(file):
#                     if i == 0:
#                         continue
                    
#                     id = row[0]
#                     username = row[1]
#                     email = row[2]
#                     thumbnail = row[3]
#                     terminal_token = row[4]
#                     email_verified_at = row[5]
#                     last_login = row[6]
#                     first_name = row[7]
#                     last_name = row[8]
#                     is_active = row[9]
#                     is_anonymous = row[10]
#                     is_authenticated = row[11]
#                     password = "argon2$argon2id$v=19$m=102400,t=2," + row[12]
#                     github = row[13]
#                     twitter = row[14]
#                     temp_code = row[15]
#                     created_at = row[16]
#                     initial_thumbnail = row[17]
#                     owner = row[18]
#                     experience_level = row[19]

#                     user = User.objects.get(email=email)

#                     UserInfo(
#                         user=user,
#                         first_name=first_name,
#                         last_name=last_name,
#                         experience_level=experience_level,
#                     ).save()

#             return JsonResponse(True, status=200, safe=False)
#         except Exception as e:
#             print(e)
#             return JsonResponse(False, status=500, safe=False)

