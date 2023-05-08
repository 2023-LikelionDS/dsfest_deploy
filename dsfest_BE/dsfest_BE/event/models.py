from django.db import models


# Create your models here.
class Post(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    author = models.CharField(max_length=10)
    content = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now=True)