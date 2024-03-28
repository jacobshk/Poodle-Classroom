from django.apps import AppConfig
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Data, user
from .serializer import DataSerializer
from.utils import login, signup, get_user_classes, join_class
import pymongo
from pymongo import MongoClient
import certifi

class ApiAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api_app'


# Create your views here.
@api_view(['GET'])
def getData(request):
    app = Data.objects.all()
    temp = login('student1', 'password123')
    #print("HERE")
    print(temp)
    serializer = DataSerializer(app, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postData(request):
    serializer = DataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# Create your views here.
@api_view(['GET'])
def signUp(request):
    email = request.query_params['email']
    password = request.query_params['password']
    username = request.query_params['username']
    temp = signup(email, password, username)
    return Response(temp)


# Create your views here.
@api_view(['GET'])
def logIn(request):
    password = request.query_params['password']
    username = request.query_params['username']
    temp = login(username, password)
    return Response(temp)


@api_view(['GET'])
def getUserClasses(request):
    username = request.query_params['username']
    temp = get_user_classes(username)
    """
    Classes should be an array of objects of shape:
        ['class1', 'teacherName1','classID1'], 
        per github
    """
    res = []
    for i in temp:
        obj = {
            'class_name':i['class_name'],
            'teacher_name':i['teacher_emails'][0],
            'class_ID': i['class_id']
            }
        res.append(obj)
    
    print(res)
    return Response({'response': res})


@api_view(['GET'])
def joinClass(request):
    username = request.query_params['username']
    class_id = request.query_params['class_id']
    """    
    Classes should be an array of objects of shape:
        ['class1', 'teacherName1','classID1'], 
        per github
    """
    res = join_class(username, class_id)
    return Response({'response': res})
