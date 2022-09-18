from django.shortcuts import render
from .models import Product, User
from .serializers import ProductSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
import json
from rest_framework.response import Response

# Create your views here.
# def front(request):
#     return render(request, 'index.html')


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['POST'])
def signup(request):
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.filter(email=data['email'])
    # print(User.objects.values())
    if not user.exists():
        user = User.objects.create(
            name=data['user'], email=data['email'], password=data['pass'])
    else:
        user = user[0]
    return Response(UserSerializer(user).data)


@api_view(['POST'])
def login(request):
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.filter(email=data['email'])
    mail = data['email']
    if user.exists():
        if user[0].password == data['password']:
            print(user[0].name)
            return Response({'status': 'success', 'user': user[0].name})
        else:
            return Response({'status': 'failed'})
    else:
        return Response({'status': 'failed'})
