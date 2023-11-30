
const { createApp } = Vue;
createApp({
  data() {
    return {
        movies : [],
        api_server:"http://127.0.0.1:8000",
        id_movie:'',
        title:'',
        director:'',
        release_date:'',
        banner:null
    };
  },
  methods: {
    sendFormData(url, formData,method) {
        fetch(url, {
          method: method,
          body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Registro creado:");
            this.getMovies(`${this.api_server}/api/movies`);
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
        });
    },
    onFileChange(event) {
        // Manejar el cambio en el input de tipo file
        this.banner = event.target.files[0];
    },
    getMovies() {
      fetch(`${this.api_server}/api/movies`)
        .then((response) => response.json())
        .then((data) => {
          this.movies = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    getMovie(id_movie) {
        fetch(`${this.api_server}/api/movies/${id_movie}/`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            this.id_movie = data.id;
            this.title = data.title;
            this.director = data.director,
            this.release_date = data.release_date
            console.log(data);
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
        });
    },
   
    saveMovie() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('director', this.director);
        formData.append('release_date', this.release_date);
        formData.append('banner', this.banner);
        if(this.id_movie){
            this.sendFormData(`${this.api_server}/api/update_movie/${this.id_movie}/`, formData,'PUT');
        }else{
            this.sendFormData(`${this.api_server}/api/create_movie/`, formData,'POST');
        }
    },
    deleteMovie(id_movie) {
        console.log('teasd');
        fetch(`${this.api_server}/api/delete_movie/${id_movie}/`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Registro Eliminado");
            this.getMovies(`${this.api_server}/api/movies`);
        })
        .catch((error) => {
            console.error("Error al eliminar", error);
        });
    },
  },
  created() {
    this.getMovies();
  },
}).mount("#app");
