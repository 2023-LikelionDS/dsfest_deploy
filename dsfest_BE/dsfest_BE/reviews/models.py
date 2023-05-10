from django.db import models

# Create your models here.
class Review(models.Model):
    content = models.TextField(null=False, max_length=500)
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content