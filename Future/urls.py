from django.urls import path
from TheApp import views

urlpatterns = [
   path('', views.index, name="index"),
   path('about', views.about, name="about"),
   path('gallery', views.gallery, name="gallery"),
   path('projects', views.projects, name="projects"),
   path('contact', views.contact, name="contact"),
]
