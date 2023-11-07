#TUPLAS
movie_1 = ('Titanic',1997,'Cameron')
movie_2 = ('El padrino',1972,'Coppola')
movie_3 = "Interestelar",2014,'Nolan'

print(movie_1[1])
print(type(movie_3))

#desempaquetado completo 
title, year, director = movie_1
print(f'Pelicula: {title}, año: {year}, director: {director}')
#desempaquetado ignorando elementos finales
title_2, year_2, *_ = movie_2
print(f'Pelicula: {title_2}, año: {year_2}')
#desempaquetado ignorador elementos intermedios
title_3, _, director_3 = movie_3
print(f'Pelicula: {title_3}, director: {director_3}')


