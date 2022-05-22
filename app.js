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
    buscarPersonaje(personajeSolicitado);
}



const buscarPersonaje = (unPersonaje) => {
    listaPersonajes.forEach(personaje =>{
        if(personaje.name.toUpperCase().includes(unPersonaje.toUpperCase())){
         console.log(personaje)   
        }
        // else 
        // console.log("no se encontraron coincidencias");
    })
}

const pintarGrafica =() => {
    const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
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
}

let url = 'https://api.disneyapi.dev/characters?page=';
let listaPersonajes =[];
traeTodosLosPersonajes();
pintarGrafica();