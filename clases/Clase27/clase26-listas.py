peliculas = ["Titanic","El Padrino","Avatar","Batman"]
# peliculas[2] = "El señor de los anillos 3"
# print(peliculas[2])


# nueva_pelicula = input('Ingrese el nombre de una nueva pelicula: ')
# #peliculas.append(nueva_pelicula) #agregar al final
# peliculas.insert(2,nueva_pelicula) #insertar en una posicion determinada
# print(f'Lista de pelicula actualizada: {peliculas}')

print(f'Lista de peliculas: {peliculas}')
pelicula_a_eliminar = input('Ingrese el nombre de la pelicula: ')
if pelicula_a_eliminar in peliculas:
    #eliminar la pelicula
    peliculas.remove(pelicula_a_eliminar)
    print(f"Lista de peliculas actualizada: {peliculas}")
else:
    print(f'La pelicula {pelicula_a_eliminar} no se encuentra en la lista')