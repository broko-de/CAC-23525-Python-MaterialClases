class Movie:
    
    #atributo de clase
    movie_language = 'Ingles'

    #metodo constructor
    def __init__(self,titulo,fecha_lanzamiento,director):
        #oculto un atributo
        self.__title = titulo
        self.release_date = fecha_lanzamiento
        self.__director = director

    #metodo para mostrar objetos
    def __str__(self):
        return f'Pelicula: {self.__title} - {self.director} ({self.release_date})'
    
    #Definición de metodos de la clase
    def __watch_movie(self):
        print(f'Reproduciendo la pelicula: {self.title} - {self.director}')
    
    #explicita 
    #GETTER
    def get_title(self):
        return self.__title
    
    #SETTER
    def set_title(self, new_title):
        self.__title = new_title
    
    #CON DECORADORES
    #GETTER
    @property
    def prop_director(self):
        return self.__director
    
    #SETTER
    @prop_director.setter
    def prop_director(self,new_director):
        self.__director = new_director

    


movie1 = Movie('El señor de los anillos','2006-01-01','P. Jackson')
movie1.set_title('Avatar 2')
print(movie1.get_title())

movie1.prop_director = 'Nuevo director'
movie1.release_date = '2023-12-12'
print(movie1.prop_director)