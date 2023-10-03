let arrayMovies = ['Batman','Mario Bros','Titanic', false, 2,4.5];

let arrayRatings = [2,3.5];

arrayMovies[2]='El hobbit';
// console.log(arrayMovies[2]);
// console.log(arrayMovies[8]);

// console.log(typeof(arrayMovies));
// console.log(arrayRatings);

//FUNCIONES ARRAYS
const showArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Posición: ${i}, Elemento: ${arr[i]}`);
        //console.log('Posicion: '+i+", Elemento: "+arr[i]);
    }    
}

// showArray(arrayMovies);
// console.log('********');
// showArray(arrayRatings);

//FUNCIONES PRETEDERMINADAS DE ARRAYS CON JS
let movies = [];

const addMovie = () => {
    let input = document.querySelector("#movieInput");
    // console.log(input);
    if(movies.includes(input.value) || input.value ==''){
        alert('Error ya agregaste esta pelicula');
    }else{
        movies.push(input.value);
        input.value=''; // limpio el elemento input
    }
    console.log(movies);
}

const showMovies = () => {
    let div = document.querySelector('#movie-list');
    div.innerHTML=''; // limpiar el elemento div
    for (let i = 0; i < movies.length; i++) {
        let html = `<p>Pelicula: ${movies[i]}</p>`;
        div.insertAdjacentHTML('beforeend',html);
    }
}

const deleteMovie = () => {
    let input = document.querySelector("#movieInput");
    //-1 si no existe, posicion si existe el valor dentro del array
    let index = movies.indexOf(input.value);
    if(index===-1){
        alert('La pelicula que quiere eliminar no existe en el listado');
    }else{
        //Elimina el elemento del vector en la posicion indicada
        movies.splice(index, 1);
        showMovies();
        console.log(movies);
    }
}


localStorage.setItem('movie1','Batman');