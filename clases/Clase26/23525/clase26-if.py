# asientos_disponibles = int(input('Ingrese la cantidad de asientos disponibles: '))
# if asientos_disponibles < 10:    
#     print('Quedan pocos asientos')
# else:
#     print('Quedan muchos asiento aun!')
# print(type(asientos_disponibles))

# edad = int(input('Ingrese una edad: '))
# if edad < 12:
#     precio = 500
# elif 12 <= edad <= 18:
#     precio = 900
# elif 18 < edad <= 65:
#     precio = 1500
# else:
#     precio = 1000
# print(f"El precio del ticket es: {precio}")

cantidad_tickets = int(input('Ingrese la cantidad de tickets a comprar:'))
PRECIO_UNITARIO = 1500 #constante en python
if cantidad_tickets > 5:
    precio_final = cantidad_tickets * PRECIO_UNITARIO * 0.9
else:
    precio_final = cantidad_tickets * PRECIO_UNITARIO
print(f"El precio final es: {precio_final}")








