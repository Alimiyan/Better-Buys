from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    price = models.FloatField(blank=False, null=False)
    image = models.ImageField(upload_to='uploads/images', blank=False, null=False)
    date = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=False, null=False)
    category = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self):
        return self.name

class User(models.Model):
    password = models.CharField(max_length=255, blank=False, null=False)
    email = models.CharField(max_length=255, blank=False, null=False)
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name