from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, "TheApp/index.html", 
                  {"content":""})

def about(request):
    return render(request, "TheApp/about.html", 
                  {"content":""})

def howWork(request):
    return render(request, "TheApp/howWork.html", 
                  {"content":""})

def projects(request):
    return render(request, "TheApp/projects.html", 
                  {"content":""})