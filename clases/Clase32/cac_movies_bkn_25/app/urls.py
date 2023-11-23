from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='inicio_app'),
    path('get_movies/', views.get_movies,name='get_movies_app'),
    path('deletemovies/', views.delete_movies,name='delete_movies_app'),
]
