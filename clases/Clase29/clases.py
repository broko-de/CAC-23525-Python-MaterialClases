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

    #metodo para mostrar objetos
    def __str__(self):
        return f'Pelicula: {self.title} - {self.director} ({self.release_date})'
    
    #Definición de metodos de la clase
    def watch_movie(self):
        print(f'Reproduciendo la pelicula: {self.title} - {self.director}')
        
#Instancia un objeto de la clase Movie - CREO UN OBJETO
movie1 = Movie('El señor de los anillos','2006-01-01','P. Jackson')
print(movie1)
#acceder a las propiedades del objeto
# movie1.title = input('Ingrese la pelicula')
# movie1.director = 'Director UNo'
# movie1.release_date = '2023-01-01'
print(f'La Pelicula: {movie1.title}')
#llamar a un metodo del objeto
movie1.watch_movie()

movie2 = Movie('Batman 2','2006-01-01','C. Nolan')

#MODIFICAR EL VALOR DEL ATRIBUTO DE CLASE desde la CLASE
#Movie.movie_language = 'Italiano'

movie3 = Movie('Esperando la carroza','1985-01-01','Doria')
#Modifico el valor del atributo de clase, pero para el objeto en particular
movie3.movie_language='Español'

genre1 = Genre('Accion')
genre2 = Genre('Drama')
print(genre1)
print(genre2)
