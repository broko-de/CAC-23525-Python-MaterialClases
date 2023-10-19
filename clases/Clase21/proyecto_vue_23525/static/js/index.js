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
        login:false,
        btnHref:'logout.html',
        btnClass:'btn-cac',
        movies: [
          {
            title:'Mario Bros',
            subtitle:'2023 - 6.9',
            poster:'./static/img/mario.jpg'
          },
          {
            title:'The Flash',
            subtitle:'',
            poster:'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'
          },
          {
            title:'The Little Mermaid',
            subtitle:'2023 - 6.9',
            poster:'https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg'
          },
          {
            title:'Ruby Gillman, Teenage Kraken',
            subtitle:'',
            poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
          },
          {
            title:'La venganza de pepa pig',
            subtitle:'2023 - 5.9',
            poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
          },
        ]
      }
    }
}).mount('#app')