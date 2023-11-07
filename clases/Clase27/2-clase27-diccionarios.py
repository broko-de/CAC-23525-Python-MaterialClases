#DICCIONARIOS
movie = {
    'title':'Titanic',
    'year': 1997,
    'director':'Cameron'
}

movie['year']=2000
print(f"Pelicula: {movie['title']}, año: {movie['year']}, director: {movie['director']}")

for key in movie.keys():
    print(key)
print('***************')
for value in movie.values():
    print(value)
print('***************')
for key, value in movie.items():
    print(f'La llave: {key}, El valor: {value}')