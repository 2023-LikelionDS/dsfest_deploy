from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import *
from .models import *

with open('badwords.txt', 'r', encoding='utf-8') as file:
    SWEAR_WORDS = [line.strip() for line in file]


# Create your views here.
class ReviewAPIView(APIView):
    def get(self, request):
        reviews = Review.objects.all().order_by('-date')
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ReviewListSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True): # 유효성 검사
            content = serializer.validated_data.get("content")

            swear_words = [word for word in content.split() if word in SWEAR_WORDS]

        if swear_words:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)