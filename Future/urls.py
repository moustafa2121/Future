from django.urls import path
from TheApp import views

urlpatterns = [
   path('', views.index, name="index"),
   path('about', views.about, name="about"),
   path('howwework', views.howWork, name="howWork"),
   path('projects', views.projects, name="projects"),
]
