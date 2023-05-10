from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(format="%Y.%m.%d.", required=False)
    class Meta:
        model = Post
        fields = ('id', 'author', 'content', 'date')