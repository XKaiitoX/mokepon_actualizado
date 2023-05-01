let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3


function iniciarjuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador )

    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'none'

    let sectionataques = document.getElementById('sa')
    sectionataques.style.display = 'none'

    let sectionInicio = document.getElementById('sm')
    sectionInicio.style.display = 'block'

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonHielo = document.getElementById('boton-hielo')
    botonHielo.addEventListener('click', ataqueHielo)
    let botonViento = document.getElementById('boton-viento')
    botonViento.addEventListener('click', ataqueViento)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', ReinciarJuego)
}


function seleccionMascotaJugador(){

    let sectionInicio = document.getElementById('sm')
    sectionInicio.style.display = 'none'

    let sectionseleccionMascotaJugador = document.getElementById('boton-mascota')
    sectionseleccionMascotaJugador.style.display = 'block'

    let sectionataques = document.getElementById('sa')
    sectionataques.style.display = 'block'
    
    let inputLanpier = document.getElementById('Lanpier')
    let inputJack = document.getElementById('Jack')
    let inputJuri = document.getElementById('Juri')
    let inputSaira = document.getElementById('Saira')
    let inputLirio = document.getElementById('Lirio')
    let inputKaito = document.getElementById('Kaito')
    let spanMascota = document.getElementById('mascota')
    
    if (inputLanpier.checked) {
        spanMascota.innerHTML = 'Lanpier'
    }else if (inputJack.checked){
        spanMascota.innerHTML = 'Jack'
    }
    else if (inputJuri.checked){
        spanMascota.innerHTML = 'Juri'
    }
    else if (inputSaira.checked){
        spanMascota.innerHTML = 'Saira'
    }
    else if (inputLirio.checked){
        spanMascota.innerHTML = 'Lirio'
    }
    else if (inputKaito.checked){
        spanMascota.innerHTML = 'Kaito'
    } 
    else{
        alert('Selecciona Mascota')
    }
    
    seleccionMascotaEnemigo()

}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascotae')

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Lanpier'
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Jack'
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Juri'
    }else if ( mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Saira'
    }else if ( mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Lirio'
    }else{
        spanMascotaEnemigo.innerHTML = 'Kaito'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo() 
}
function ataqueHielo(){
    ataqueJugador = 'Hielo'
    ataqueAleatorioEnemigo() 
}
function ataqueViento(){
    ataqueJugador = 'Viento'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'Fuego'
        }else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'Hielo'
        }else{
            ataqueEnemigo = 'Viento'
        }
    combate()
}

function combate(){
    let spanvida = document.getElementById("vida")
    let spanvidae = document.getElementById("vidae")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Hielo'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Hielo' && ataqueEnemigo == 'Viento'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Viento' && ataqueEnemigo == 'Fuego'){
        crearMensaje("Ganastes")
        vidaEnemigo--
        spanvidae.innerHTML = vidaEnemigo
    }else{
        crearMensaje("Perdistes")
        vidaJugador--
        spanvida.innerHTML = vidaJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidaEnemigo == 0){
        crearMensajeFinal("GANASTES")
    }else if (vidaJugador == 0)[
        crearMensajeFinal("PERDISTES")
    ]
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', La Mascota del enemigo ataco con ' + ataqueEnemigo + ', ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonHielo = document.getElementById('boton-hielo')
    botonHielo.disabled = true
    let botonViento = document.getElementById('boton-viento')
    botonViento.disabled = true

    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'block'
}


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ReinciarJuego(){
    location.reload()
}


window.addEventListener('load', iniciarjuego)