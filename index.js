//Declarando variables de control
let puntos= 0;
let puntosJugadorUno = 0;
let puntosJugadorDos = 0;
let control = 0;
let jugador = 0;
let jugadas =0;
let conteo = 3;
let temporizador = 10;
let timer;
let contadorInicioInterval;
let contadorInicio = 3;


//Declarando variables del DOM
  
let pantallaComienzo = document.getElementById("pantallaInicial");
let botonComenzar = document.getElementById("comenzar");
let nombres = document.getElementById("seccionNombres");
let pantallaJugadores = document.getElementById("mostrandoJugadores");
let botonInstrucciones = document.getElementById("botonIntro");
let instruccionesJuego = document.getElementById("intros");
let inicio =  document.getElementById("seccionJuego");
let tableroPuntos = document.getElementById("puntos");
let cuadrado = document.getElementById("cuadrado");
let jugadorUno = document.getElementById("jugador1");
let jugadorDos = document.getElementById("jugador2");
let tableroPuntuacion = document.getElementById("tableroPuntuacion");
let comentarios = document.getElementById("comentarios");
let numeroJugador = document.getElementById("numeroJugador");
let tableroTemporizador = document.getElementById("temporizador");
;

//Comienzo de juego
const instrucciones = () => {
   instruccionesJuego.style.display = "block";
   botonInstrucciones.style.display = "none";
   pantallaComienzo.style.flexDirection = "column-reverse";
}

const contadorParaInicioJuego = (jugador) => {
   if(jugador===1){
      contadorInicioInterval = setInterval(() => {
         tableroTemporizador.innerHTML = contadorInicio
         contadorInicio = contadorInicio - 1
            if(contadorInicio<0){
               clearContadorInicio()
               iniciar(1);
            }
      }, 1000);
   }else{
      contadorInicioInterval = setInterval(() => {
         tableroTemporizador.innerHTML = contadorInicio
         contadorInicio = contadorInicio - 1
            if(contadorInicio<0){
               clearContadorInicio()
               iniciar(2);
            }
      }, 1000);   
   }
   
}
const nombreDeJugadores = () => {
   nombres.style.display = "block";
   pantallaComienzo.style.display = "none";
} 

const comenzarJuego = () => {
   let nombreJugadorUno = document.getElementById("nombreJugadorUno").value;
   let nombreJugadorDos = document.getElementById("nombreJugadorDos").value; 
   pantallaJugadores.style.display = "flex";
   pantallaJugadores.innerHTML = `<h2>${nombreJugadorUno}  VS ${nombreJugadorDos}</h2>`
   
   pantallaComienzo.style.display = "none";
   nombres.style.display = "none";
   
      setTimeout(() => {
         pantallaJugadores.style.display ="none";
         inicio.style.display = "block";
         contadorParaInicioJuego(1);
      }, 5000);
  
   
}

//Funcion que suma los puntos y modifica el tablero y comentarios
const sumarPuntos = () => {
   puntos = puntos + 1;
   
      if(jugador===1){
         puntosJugadorUno = puntosJugadorUno + 1;
      }else if(jugador===2){
         puntosJugadorDos = puntosJugadorDos + 1;
      } 
   
   tableroPuntuacion.innerHTML = puntos;
   cuadrado.classList.add('moviendo');
   comentarios.innerHTML = "<h1>A JUGAR!</h1>";
   tableroPuntos.style.display ="block";   
      
   
      if(puntos>2 && puntos<=6){
         comentarios.innerHTML = "<h1>COMENZASTE MUY BIEN!</h1>";
      }else if (puntos>6){
         comentarios.innerHTML = "<h1>SIGUE ASI!</h1>";
      }
     
      
   return puntos;
}

const clearContadorInicio = () =>clearInterval(contadorInicioInterval);
const clearTemporizador = () => clearInterval(timer);

//Inicia el juego y establece el numero de jugador
const iniciar = (numeroJugador) => {
   if(numeroJugador===1){
      cuadrado.style.display = "block";
      jugadorUno.style.display = "none";
      jugadorDos.style.display = "none";
      jugador = 1;
   }else if(numeroJugador===2){
      puntos = 0;
      cuadrado.style.display = "block";
      jugadorUno.style.display = "none";
      jugadorDos.style.display = "none";
      jugador = 2;
   }
   
   timer =  setInterval(()=>{
      tableroTemporizador.innerHTML = `${temporizador}`
      temporizador = temporizador - 1;
         if(temporizador<0){
            clearTemporizador();
            pararBoton();
            temporizador = 10;
            contadorInicio = 3;
            contadorParaInicioJuego(2);
         } 
    }, 1000);
   
    return jugador
}



//Para el juego para dar paso al siguiente jugador y finalizar el juego.
const pararBoton = () =>{
   jugadas = jugadas + 1  
     
   if(jugador===1){
         puntos = 0;
         cuadrado.style.display ="none";
         jugadorDos.style.display = "block";
         comentarios.innerHTML = "<h1>A JUGAR!</h1>";
         tableroPuntuacion.innerHTML =puntos;
      }else if(jugador===2){
         jugadorUno.style.display = "block";
         tableroPuntuacion.style.display ="none";
      }  
   
    if(jugadas>=2){
        cuadrado.style.display ="none";
        jugadorUno.style.display = "none";
        tableroPuntos.style.display = "none";
        comentarios.innerHTML = `<h1>TABLA DE PUNTAJE. JUGADOR 1: ${puntosJugadorUno} JUGADOR 2: ${puntosJugadorDos}</h1>`

        if(puntosJugadorUno>puntosJugadorDos){
            numeroJugador.innerHTML=`<h1>Ganador jugador 1</h1>`
         }else if(puntosJugadorUno===puntosJugadorDos){
            numeroJugador.innerHTML=`<h1>Empate</h1>`
         }else{
            numeroJugador.innerHTML=`<h1>Ganador jugador 2</h1>`
         } 
   }
     
}
