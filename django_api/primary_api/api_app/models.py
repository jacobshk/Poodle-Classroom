from django.db import models

# Create your models here.
class Data(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)

class user(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)