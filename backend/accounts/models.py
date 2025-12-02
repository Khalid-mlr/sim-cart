from django.db import models

class Users(models.Model):
    title = models.CharField(max_length=250)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
