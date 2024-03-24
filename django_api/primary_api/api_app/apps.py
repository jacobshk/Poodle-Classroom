from django.apps import AppConfig
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

class ApiAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api_app'
