from django.contrib import admin

from .models import News, Car, CarInfo

admin.site.register(News),
admin.site.register(Car),
admin.site.register(CarInfo)
