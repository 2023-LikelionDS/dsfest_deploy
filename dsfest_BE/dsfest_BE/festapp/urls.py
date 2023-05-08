from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('blog/', views.BlogsAPIView.as_view()),
    path('blogs/<int:pk>/', views.BlogAPIView.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)