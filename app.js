// const bootstrap = require('bootstrap')
// // import 'bootstrap';
// // import * as bootstrap from 'bootstrap';
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// // app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

console.log ("HolaRebecca")

let url = 'https://api.disneyapi.dev/characters';
const peticion = async () => {
    const respuesta = await fetch (url);
    const datos = await respuesta.json();
        console.log(datos);
}
peticion();
