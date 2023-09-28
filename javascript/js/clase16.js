let movie = {
    title: 'El señor de los anillos 3',
    year: 2004,
    director: 'Peter Jackson',
    play : function(){
        console.log('Reproduciendo la pelicula');
    },
    stop: function(){
        console.log('Deteniendo la reproduccion');
    }
}

movie.title = 'Batman 2';
console.log('La pelicula: ',movie.title);
console.log('El director: ',movie.director);
movie.reparto = 'un actor';
console.log(movie.reparto);

movie.play();
movie.stop();

//LA CLASE MOVIE
class Movie{

    constructor(titulo,anio,director){
        this.title = titulo;
        this.year = anio;
        this.director = director;        
    }

    play(){
        console.log('Reproduciendo la pelicula');
    }

    stop(){
        console.log('Deteniendo la reproduccion');
    }

    showCredits(){
        console.log('La pelicula: ',this.title);
        console.log('Año: ',this.year);
        console.log('Director: ',this.director);

    }

}

let movie2 = new Movie('El señor de los anillos 2',2003,'Peter Jackson');
movie2.showCredits();
console.log(movie2.title);


let movie3 = new Movie('Batman 3',2006,'Nolan');
movie3.showCredits();


const viewMovie = () => {
    let div = document.querySelector('#movie-detail');
    // div.innerHTML='';
    let movie = new Movie('El señor de los anillos 1',2021,'Peter Jackson');
    let html = `
        <p>Titulo:${movie.title}</p>
        <p>Año:${movie.year}</p>
        <p>Director:${movie.director}</p>        
    `;
    div.insertAdjacentHTML('beforeend',html)
}