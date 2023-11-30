from django.shortcuts import render
from django.http import HttpResponse

from app.models import Movie

from app import serializers

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def index(request):
    return HttpResponse('<h1>Hola mundo Django! 23525!🦄</h1>')

@api_view(['GET']) 
def get_movies(request):
    """
    Lista todos las peliculas
    """
    #se buscan todos los registros guardados en la base
    movies = Movie.objects.all() #SELECT * FROM app_movie
    #cuando estás serializando múltiples instancias de un modelo
    serializer = serializers.MovieSerializer(movies, many=True)
    #Response es una clase que me permite devolver una respuesta
    #que cumple con los estandares de API-REST
    return Response(serializer.data)

@api_view(['POST'])
def create_movie(request):
    #Se seriala los datos recibidos desde el formulario
    serializer = serializers.MovieSerializer(data=request.data)
    #Se ejecutan las validaciones
    if serializer.is_valid():
        #Se registra en base de datos
        serializer.save()
        #Se genera la respuesta que deseamos devolver
        response = {'status':'Ok',
                    'message':'Pelicula creada exitosamente',
                    'data':serializer.data}
        return Response(data= response, status=status.HTTP_201_CREATED)
    
    response = {'status':'Error',
                'message':'No se pudo crear la pelicula',
                'errors':serializer.errors}
    return Response(data=response, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def detail_movie(request, id):
    """
    Muestra una pelicula.
    """
    try:
        #Se busca la pelicula en base por el id
        movie = Movie.objects.get(pk=id)        
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')

    serializer = serializers.MovieSerializer(movie)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_movie(request, id):
    """
    Eliminar una pelicula.
    """
    try:
        movie = Movie.objects.get(pk=id)        
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')
    #Se elimina la pelicula en base de datos
    movie.delete()
    return Response({'message':'Se elimino la pelicula'},status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_movie(request, id):
    """
    Actualiza una pelicula.
    """
    try:
        movie = Movie.objects.get(pk=id)
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')
    
    serializer = serializers.MovieSerializer(movie, data=request.data)
    if serializer.is_valid():
        serializer.save()
        response = {'status':'Ok',
                    'message':'Pelicula modificada exitosamente',
                    'data':serializer.data}
        return Response(data=response)
    #no se cumpla la validacion
    response = {'status':'Error',
                'message':'No se pudo modificar la pelicula',
                'errors':serializer.errors}
    return Response(data=response, status=status.HTTP_400_BAD_REQUEST)
