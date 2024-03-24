from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('signUp/', views.signUp),
    path('get', views.getData),
    path('post/', views.postData),
    path('', views.getData)
]

