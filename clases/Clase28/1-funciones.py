def hello_world():
    print('Hola mundo con funciones')
    print('*******')

# hello_world()

#Definicion de parametros y valores por defecto
def saludar(nombre='Pablo',saludo='Hola!'):
    print(f'{saludo}, {nombre}')

# saludar('Hola','Pepe') # tener el orden del envio de argumentos
# saludar('Gabriela')
# saludar()

#llamar funcion indicando explicitamente los paremetros
# saludar(saludo='Buenas noches!',nombre='Juan')

#funciones que devuelve un valor
def sumar(a,b):
    resultado = a + b
    return resultado # return a+b

calculo = sumar(43,5)
# print(f'La suma es: {calculo}')
# print(f'La suma es: {sumar(43,5)}')

def sumar_dos(a,b,*args):
    total = a+b
    print(args)
    for numero in args:
        total += numero
    return total

#llamada a la funcion
# resultado_1 = sumar_dos(4,5,10,23,6,7)
# resultado_2 = sumar_dos(1,7,8,4)

# print(resultado_1)
# print(resultado_2)

def saludar_dos(nombre,saludo,**kwargs):
    print(f'{saludo}, {nombre}')
    print(kwargs)
    for key,value in kwargs.items():
        print(f'Key: {key}, Value: {value}')


saludar_dos(nombre='Dario',
            saludo='Buenas tardes!',
            mensaje_uno='Como estas?',
            despedida='Nos vemos!')
