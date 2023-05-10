from .models import Post
from .serializers import PostSerializer

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

with open('badwords.txt', 'r', encoding='utf-8') as file:
    SWEAR_WORDS = [line.strip() for line in file]

class PostList(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True) # 여러 개 객체 serialization 위해 many=true
        return Response(serializer.data)
    
    
    def post(self, request):
        serializer = PostSerializer(data=request.data) # 사용자의 입력 데이터
        if serializer.is_valid(raise_exception=True): # 유효성 검사
            content = serializer.validated_data.get("content")

        if serializer.is_valid(raise_exception=True): # 유효성 검사
            content = serializer.validated_data.get("content")

            swear_words = [word for word in content.split() if word in SWEAR_WORDS]

        if swear_words:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)