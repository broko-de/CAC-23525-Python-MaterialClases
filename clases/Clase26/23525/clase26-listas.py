peliculas = ["Titanic","El Padrino","Avatar","Batman"]
# peliculas[2] = "El señor de los anillos 3"
print(peliculas[2])


nueva_pelicula = input('Ingrese el nombre de una nueva pelicula: ')
#peliculas.append(nueva_pelicula) #agregar al final
peliculas.insert(2,nueva_pelicula) #insertar en una posicion determinada
print(F'Lista de pelicula actualizada: {peliculas}')