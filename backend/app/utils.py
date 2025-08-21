import os
import jwt
import random
import datetime
import faker
import matplotlib
from django.utils import timezone
from randimage import get_random_image, show_array

from django.conf import settings as ST


def decode_auth_token(token):
    try:
        return jwt.decode(token.split(' ')[1], ST.SECRET_KEY, algorithms=['HS256'])
    except Exception as e:
        raise Exception('decode_auth_token error')


def generate_auth_access_token(email):
    try:
        return jwt.encode({
                'email': email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7, minutes=15),
                'iat': datetime.datetime.utcnow(),
            },
            ST.SECRET_KEY, algorithm='HS256')
    except Exception as e:
        raise Exception('generate_auth_access_token error')


def generate_auth_refresh_token(email):
    try:
        return jwt.encode({
                'email': email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
                'iat': datetime.datetime.utcnow()
            },
            ST.REFRESH_TOKEN_SECRET, algorithm='HS256')
    except Exception as e:
        raise Exception('generate_auth_refresh_token error')


def generate_username():
    try:
        fake = faker.Faker()
        return fake.simple_profile().get('username')
    except Exception as e:
        raise Exception('generate_username error')


def generate_terminal_token(abc_start=False):
    try:
        def c(): return random.randint(0, 255)
        token = '%02X%02X%02X' % (c(), c(), c())

        if abc_start:
            if token[0] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']:
                token = 'X' + token[1:]
            return token

        return token
    except Exception as e:
        raise Exception('generate_terminal_token error')


def generate_token(abc_start=False):
    try:
        def c(): return random.randint(0, 255)
        token = '%02X%02X%02X' % (c(), c(), c())

        return token
    except Exception as e:
        raise Exception('generate_token error')


def generate_initial_thumbnail(name):
    img_size = (128, 128)
    img = get_random_image(img_size)
    matplotlib.image.imsave(ST.MEDIA_ROOT + '/users/thumbnails/initial_' + name + ".png", img)

def mail():
    pass


def time_from_now(time):
    return str(round((timezone.now() - time).total_seconds() / (60 * 60) / 24)) + ' days ago' if (timezone.now() - time).total_seconds() / (60 * 60) / 24 > 2 else str(round((timezone.now() - time).total_seconds() / (60 * 60))) + ' hours ago' if (timezone.now() - time).total_seconds() / (60 * 60) > 2 else str(round((timezone.now() - time).total_seconds() / 60)) + ' min. ago'
