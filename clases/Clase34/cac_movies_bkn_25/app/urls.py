from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='inicio_app'),
    path('movies/', views.get_movies,name='get_movies_app'),
    path('create_movie/', views.create_movie,name='create_movies_app'),
    path('movies/<int:id>/', views.detail_movie,name='detail_movies_app'),
    path('delete_movie/<int:id>/', views.delete_movie,name='delete_movies_app'),
    path('update_movie/<int:id>/', views.update_movie,name='update_movies_app'),

]
