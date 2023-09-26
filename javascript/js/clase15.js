//definicion de una funcion - declarativa
function helloWorld(){
    console.log('Hola mundo con funciones - C#23525');
}

// llamada a la funcion
helloWorld();

/**
 * Función que comprueba si se puede ver la pelicula de acuerdo a la edad
 * @param { number } age - La edad evaluar
 */
function checkAgeForMovie(age){
    if(age >= 13){
        console.log('Puedes ver la pelicula');
    }else{
        console.error('No tienes la edad suficiente, no puedes ver la pelicula.')
    }
}

//llamadad a la función - envio de argumento
// checkAgeForMovie(25);
// checkAgeForMovie('una edad');

/**
 * Funcion que comprueba requisitos para acceder
 * @param { number } age - edad 
 * @param { boolean } hasTicket - si compro una entrada valor por defecto false
 */
function checkWatchMovie(age, hasTicket=false){
    console.log('Recibe hasTicket: ',hasTicket);
    if(age >= 13 && hasTicket===true){
        console.log('Puedes ver la pelicula');
    }else{
        console.error('No cumples con los requisitos 😣');
    }
}

//multiples argumentos
// checkWatchMovie(10,true);
// checkWatchMovie(23,true);
// checkWatchMovie(true,10); debe respetar el orden
// checkWatchMovie(7); 
//Scope Global
var globalMovie = "Inception";

let letVariable = "Padrino 2";

function watchMovie(){

    //Scope local - function scope
    var localMovie = "Esperando la carroza";
    letVariable = "Titanic";
    console.log("Estoy viendo ",localMovie);
    console.log("Estoy viendo ",globalMovie);

}

watchMovie();
// console.log('Fuera de la funcion: ',globalMovie);
// console.log('Fuera de la funcion: ',localMovie); Error al querer acceder a una variable local
console.log(letVariable);
function getMovie(){
    let movie1 = 'Mario bros';
    movie1='Barbie';
    if(true){
        var movie2='Megalodon 2';
        //SCOPE en BLOQUE - solo se pueden trabajar en el bloque que las contiene
        let movie3='La monja 2';
        const movie4 = 'El padrino';
        console.log('Dentro del IF: ',movie1);
        console.log('Dentro del IF: ',movie4);
    }

    console.log('Dentro de la funcion: ',movie1);
    console.log('Dentro de la funcion: ',movie2);
    // console.log('Dentro de la funcion: ',movie4); Error al querer alcanzar movie4 por fuera del bloque que la contiene


}

// getMovie();
// console.log('Por fuera de la funcion: ',movie1);


