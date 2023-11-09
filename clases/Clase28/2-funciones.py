#PASAJE POR VALOR - PARA TIPOS DE DATOS INMUTABLES

def triplicar_valor(numero):
    numero *= 3
    return numero

# valor_original = int(input('Ingrese un numero: '))
# print(f'El valor triplicado es: {triplicar_valor(valor_original)}')

# print(valor_original)

#PASAJE POR REFERENCIA - PARA TIPO DE DATOS MUTABLES

def agregar_elemento(lista,elemento_agregar):
    lista.append(elemento_agregar)

lista_original = [4,6,7]
lista_copia = lista_original.copy()
# lista_copia = lista_original NO SE HACE
agregar_elemento(lista_copia,77)

# print(lista_original)

# DEVOLUCION DE VARIOS VALORES
def obtener_estadisticas(lista):
    suma = sum(lista)
    promedio = suma / len(lista)
    maximo = max(lista)
    minimo = min(lista)
    return (suma,promedio,maximo,minimo)

valores = [2,66,20,33,5]
resultado = obtener_estadisticas(valores)

print(resultado)

