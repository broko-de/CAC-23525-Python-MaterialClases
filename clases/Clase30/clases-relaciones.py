#RELACION DE AGREGACION
class Genre:

    #constructuctor
    def __init__(self,name):
        self.name = name

    def __str__(self):
        return f'Genero: {self.name}'
    
class Director:

    def __init__(self, lastname):
        self.lastname = lastname
        
    def show_director(self):
        print(f'Soy el director: {self.lastname}')

#EJEMPLO DE COMPOSICION
class Review:

    def __init__(self, reviewer_name,comment,rating):
        self.reviewer_name = reviewer_name
        self.comment = comment
        self.rating = rating
        
    def show_detail(self):
        print(f'Revisor: {self.reviewer_name} - Calificacion: {self.rating}')

class Movie:
    
    #atributo de clase
    movie_language = 'Ingles'

    #metodo constructor
    def __init__(self,titulo,fecha_lanzamiento,obj_director):
        #defino propiedades-atributos
        self.title = titulo
        self.release_date = fecha_lanzamiento
        self.director = obj_director
        #sea un listado de objetos de la clase Genre - Agregacion
        self.genres = [] #relacion de agregacion
        #listado de objetos de la clase Review - Composicion
        self.reviews = []

    #metodo para mostrar objetos
    def __str__(self):
        return f'Pelicula: {self.title} - {self.director.lastname} ({self.release_date})'
    
    #Definición de metodos de la clase
    def watch_movie(self):
        print(f'Reproduciendo la pelicula: {self.title} - {self.director}')
    
    #Metodo para agregar objetos de la clase Genre
    #al listado de generos asociados a la pelicula
    def add_genre(self,genre):        
        self.genres.append(genre)

    #metodo para agregar objetos de la clase review al listado
    #Instanciación desde la clase Movie
    def add_review(self,new_reviewer_name,new_comment,new_rating):
        review = Review(new_reviewer_name,new_comment,new_rating)
        self.reviews.append(review)


director1 = Director('Jackson')

movie1 = Movie('El señor de los anillos','2006-01-01',director1)
genre1 = Genre('Accion')
genre2 = Genre('Drama')

movie1.add_genre(genre1)
movie1.add_genre(genre2)

movie1.add_review('Fulanito','La pelicula muy buena',5)
movie1.add_review('Cosme','La pelicula muy mala',1)

for genre in movie1.genres:
   print(f'El genero es: {genre.name}') 

