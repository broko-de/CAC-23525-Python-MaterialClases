// Estructura condicional
var condicion = false;
if(condicion){
    console.log('Se esta cumpliendo la condición');
}else{
    console.warn('No se cumple la condición');
}

var age = "13";
if(age >= 13){
    console.log('Puedes ver la pelicula');
}else{
    console.error('No tienes la edad suficiente, no puedes ver la pelicula.')
}

if(parseInt(age) === 13){
    console.log('Puedes ingresar, te ganaste unos 🍿');
}else if(age > 13){
    console.log('Puedes ver la pelicula');
}else{
    console.error('No tienes la edad suficiente, no puedes ver la pelicula.')
}