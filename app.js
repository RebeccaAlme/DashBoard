// console.log ("HolaRebecca")
// const Chart = require('chart.js');
// const myChart = new Chart(ctx, {...});




const peticion = async (page) => {
    let urlActualizada = url+page;
    // console.log (urlActualizada);
    const respuesta = await fetch (urlActualizada);
    const datos = await respuesta.json();
    // console.log(datos);
    // listaPersonajes.push(datos["data"]);
    listaPersonajes = listaPersonajes.concat(datos["data"]);
    // console.log (listaPersonajes);
}
// peticion();

const traeTodosLosPersonajes = async () => {
    for (var i = 1; i < 150; i++) {
        await peticion(i);
    }
    var personajeSolicitado = prompt ("Por favor escriba un personaje de Disney", "Queen");
    let personajeEncontrado = buscarPersonaje(personajeSolicitado);
    // console.log(personajeEncontrado);
    pintarGrafica(personajeEncontrado);
}



const buscarPersonaje = (unPersonaje) => {
    let resultado
    for (var personaje of listaPersonajes){
        if(personaje.name.toUpperCase().includes(unPersonaje.toUpperCase())){
            //  console.log(personaje)
            resultado = personaje
            break
            }
    }
    return resultado
}

const pintarGrafica =(apariciones) => {
    console.log(apariciones);
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['TVShows', 'Films', 'VideoGames'],
            datasets: [{
                label: 'Apariciones',
                data: [apariciones.tvShows.length,apariciones.films.length,apariciones.videoGames.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('nombrePersonaje').innerHTML=apariciones.name
    document.getElementById('imagenPersonaje').src=apariciones.imageUrl
}

let url = 'https://api.disneyapi.dev/characters?page=';
let listaPersonajes =[];
traeTodosLosPersonajes();
// pintarGrafica();