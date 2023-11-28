from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='inicio_app'),
    path('movies/', views.get_movies,name='get_movies_app'),
    path('create_movie/', views.create_movie,name='create_movies_app'),
    path('deletemovies/', views.delete_movies,name='delete_movies_app'),
]
