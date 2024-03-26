from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('signUp/', views.signUp),
    path('logIn/', views.logIn),
    path('getUserClasses/', views.getUserClasses),
    path('get', views.getData),
    path('post/', views.postData),
    path('', views.getData)
]

