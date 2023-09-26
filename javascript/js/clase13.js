// Una forma de debugger nuestro codigo
console.log('Hola Mundo JS, por consola');

/*
Esto es un comentario
multinea
hola 
*/
console.error('Aqui esta ocurriendo un error');
console.warn('Esta sucediendo algo inesperado');


// Declaracion de una variable
var movie;
// definicion de una variable
movie = "El padrino";
// movie = "El Rey Leon";
console.log(movie);
var rating = 8;
console.log(typeof(rating));
var rating2= 9.0;
console.log(typeof(rating2)); //tipo number
var rating3 = "6.5";
console.log(typeof(rating3)); //tipo string
var isNew = false;
console.log(typeof(isNew)); //tipo boolean

var movie2;
console.log(typeof(movie2)); //tipo undefined

movie2 = null; // movie2={}
console.log(typeof(movie2)); //tipo objeto

var movie3 = {
    name: 'El padrino 2',
    rating: 8.3
}
console.log(typeof(movie3));  //tipo objeto

//CONSTANTES, snake_case y en mayuscula
const CURRENT_YEAR = 2023;
// CURRENT_YEAR = 2024; Error
console.log(CURRENT_YEAR);

var average = (rating + rating2 + parseFloat(rating3))/3;
console.log((rating + rating2 + parseFloat(rating3)));
console.log('El promedio es: ',average);









