from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^create/$', views.image_create, name='create_image'),
    url(r'^image/detail/(?P<id>\d+)/(?P<slug>[-\w]+)/$', views.image_detail, name='image_detail'),
    url(r'^like/$', views.image_like, name='image_like'),
    url(r'^$', views.image_list, name='image_list'),
]
