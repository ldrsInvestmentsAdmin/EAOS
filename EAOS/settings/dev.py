from .base import *

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

SECRET_KEY = 'django-insecure-1l^gr*i8+4p+^v4-c=%^3k-k9n2k^fy-l90+!%*^#avmug3_u#'

DEBUG = True

ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'railway',
        'USER':'postgres',
        'PASSWORD':'5r43UDwwtcevl7DLLhG7',
        'HOST':'containers-us-west-29.railway.app',
        'PORT':'7808'
    }
}
