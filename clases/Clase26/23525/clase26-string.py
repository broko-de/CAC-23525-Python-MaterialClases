# nombre = input('Ingrese un nombre: ')
# apellido = input('Ingrese un apellido: ')
# mensaje = "Hola, "+nombre+" "+apellido+"!"
# mensaje = f"Hola, {nombre} {apellido}!"
# print(mensaje)

# frase = input('Ingrese una frase: ')
# cantidad_caracteres = len(frase)
# print(f"La frase '{frase}' tiene {cantidad_caracteres} caracteres")

# frase = input('Ingrese una frase: ')
# minusculas = frase.lower()
# mayusculas = frase.upper()
# print(f"En mayusculas: {mayusculas}")
# print(f"En minusculas: {minusculas}")

frase = input('Ingrese una frase: ')
letra_a_reemplazar = input('Ingrese la letra que quiere reemplazar: ')
if letra_a_reemplazar in frase:
    nueva_letra = input('Ingrese la nueva letra: ')
    frase_modificada = frase.replace(letra_a_reemplazar,nueva_letra)
    print(f"Frase modificada: {frase_modificada}")
else:
    print(f"La letra ingresada '{letra_a_reemplazar}' no esta dentro de la frase")




