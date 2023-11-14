class Genre:

    #constructuctor
    def __init__(self,name):
        self.name = name

    def __str__(self):
        return f'Genero: {self.name}'
    

class Movie:
    
    #atributo de clase
    movie_language = 'Ingles'

    #metodo constructor
    def __init__(self,titulo,fecha_lanzamiento,director):
        #defino propiedades-atributos
        self.title = titulo
        self.release_date = fecha_lanzamiento
        self.director = director
        #sea un listado de objetos de la clase Genre
        self.genres = [] #relacion de agregacion

    #metodo para mostrar objetos
    def __str__(self):
        return f'Pelicula: {self.title} - {self.director} ({self.release_date})'
    
    #Definición de metodos de la clase
    def watch_movie(self):
        print(f'Reproduciendo la pelicula: {self.title} - {self.director}')
    
    #Metodo para agregar objetos de la clase Genre
    #al listado de generos asociados a la pelicula
    def add_genre(self,genre):
        self.genres.append(genre)

movie1 = Movie('El señor de los anillos','2006-01-01','P. Jackson')
genre1 = Genre('Accion')
genre2 = Genre('Drama')

movie1.add_genre(genre1)
movie1.add_genre(genre2)

for genre in movie1.genres:
   print(f'El genero es: {genre.name}') 

