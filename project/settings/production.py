from .common import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'project',
    }
}

PUBLIC_ROOT = os.path.join(os.sep, 'var', 'www', 'project', 'public')
STATIC_ROOT = os.path.join(PUBLIC_ROOT, 'static')
MEDIA_ROOT = os.path.join(PUBLIC_ROOT, 'media')

TEMPLATE_LOADERS = (
    ('django.template.loaders.cached.Loader', TEMPLATE_LOADERS),
)

ALLOWED_HOSTS = ['162.243.12.142', '162.243.129.112']

PREPEND_WWW = False
