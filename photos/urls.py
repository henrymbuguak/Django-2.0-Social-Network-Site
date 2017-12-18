from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^create/$', views.image_create, name='create_image'),
    url(r'^image/detail/(?P<id>\d+)/(?P<slug>[-\w]+)/$', views.image_detail, name='image_detail'),
]
