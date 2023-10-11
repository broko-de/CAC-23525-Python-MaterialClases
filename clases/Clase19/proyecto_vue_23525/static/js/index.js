console.log(Vue);
// destructuracion con JS
const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hola mundo Vue!',
        title:'Peliculas y series ilimitadas y mucho más',
        subtitle:'Disfruta donde quieras. Cancela cuando quieras.',
        card:`
            <h1>Peliculas y series ilimitadas y mucho más</h1>                    
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        `,
        login:true,
        btnHref:'logout.html',
        btnClass:'btn-danger'
      }
    }
}).mount('#app')