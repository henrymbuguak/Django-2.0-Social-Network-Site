from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('', include('social_django.urls', namespace='social'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIAL_URL, document_root=settings.MEDIAL_ROOT)