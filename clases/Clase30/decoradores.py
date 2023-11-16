
#funcion A recibe parametro B
def funcion_decoradora(funcion_parametro):
    
    #funcion C
    def funcion_interior(a,b):

        #acciones adicionales que decoran
        print('Se inicia el calculo')
        funcion_parametro(a,b)
        #acciones adicionales que decoran
        print('Se ha terminado con el calculo')
    
    #retorno de la funcion C desde el decorador
    return funcion_interior


@funcion_decoradora
def suma(a,b):
    print(a+b)

@funcion_decoradora
def resta(a,b):
    print(a-b)

suma(4,5)

resta(10,45)