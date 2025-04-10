let activo = true //Ejecuta el primer while, el principal

//Objetos ------------------------------------------------------------------
let jugador = {
    status: {
        vida: 20,
        hambre: 20,
        daño: 2
    },
    inventario: {},
    armadura: {
        casco: "",
        pechera: "",
        pantalon: "",
        botas: ""
    }
}

let mobs = {
    hostiles: {
        araña: {
            daño: 1,
            vida: 3
        },
        esqueleto: {
            daño: 3,
            vida: 5
        },
        zombie: {
            daño: 2,
            vida: 6
        }
    },
    pacifico: {
        oveja: {
            vida: 3,
            comida: 5
        },
        vaca: {
            vida: 4,
            comida: 7
        },
        cerdo: {
            vida: 3,
            comida: 6
        }
    }
}

let materiales = {
    recursos: {
        madera: {
            resistencia: 4
        }
    },
    menas: {
        oro: {
            cantidad : 1
        },
        hierro: {
            cantidad : 1
        },
        diamante: {
            cantidad : 1
        }
    }
}

let estructuras = {
    aldea: {
        perla: 1,
        espada: 5
    },
    mina: {
        ...materiales.menas
    },
    portalEnd: {
        perla: 3
    }
}

//Fin objetos -------------------------------------------------------------------

function random() {
    return Math.floor(Math.random() * 100) + 1
}

function verExistencia(objeto) {
    if(!jugador.inventario[objeto]){
        jugador.inventario[objeto] = 0
    }
    return
}

function contar(objeto1){
    if(Object.keys(objeto1).length === 0){
        alert()
    }else{
        return Object.keys(objeto1).length
    }
}

//Inicio funciones de generación ------------------------------------------------------------------------------

function generarEstructura() {
    let num = random()
    if (num < 5) {
        alert(`Apareció un Portal`)
    }else if(num < 40){
        alert(`Apareció una aldea`)
        let actuar = Number(prompt("Desea saquear 1, ignorar 2"))
        if(actuar == 1){
            let num = random()
            if(num > 70){
                verExistencia()
                jugador.inventario.perla += estructuras.aldea.perla
                alert(`Obtuviste una perla y ahora tienes ${jugador.inventario.perla} perlas`)
            }else if(num > 40){
                verExistencia()
                jugador.inventario.espada = estructuras.aldea.espada
                alert(`Obtuviste una espada y ahora tienes ${jugador.inventario.espada} daño adicional`)
            }else{
                alert("No se encontró nada")
            }
        }
    }else{
        alert(`Apareció una mina`)
        let actuar = Number(prompt("Desea picar 1, ignorar 2"))
        if(actuar === 1){
            let decision = Number(prompt("Desea picar Oro 1, Desea picar Hierro 2, Desea picar Diamante 3"))
            if(decision === 1){
                verExistencia()
                jugador.inventario.oro += materiales.menas.oro.cantidad
                alert("Usted ha obtenido Oro")
            } 
            if(decision === 2){
                verExistencia()
                jugador.inventario.hierro += materiales.menas.hierro.cantidad
                alert("Usted ha obtenido Hierro")
            }
            if(decision === 3){
                verExistencia()
                jugador.inventario.diamante += materiales.menas.diamante.cantidad
                alert("usted ha obtenido Diamante")
            }
        }else if(actuar === 2){
            window.location.href = "index.html"
        }
    }
}

function generarMob() {
    let num = random()
    if (num < 60) {
        let num = random()
        if (num < 40) {
            alert(`Apareció una oveja`)
        } else if (num < 70) {
            alert(`Apareció una vaca`)
        } else {
            alert(`Apareció un cerdo`)
        }
    } else {
        let num = random()
        if (num < 40) {
            alert(`Apareció una araña`)
        } else if (num < 70) {
            alert(`Apareció un esqueleto`)
        } else {
            alert(`Apareció un zombie`)
        }
    }
}
//FIn funciones generar ----------------------------------------------------------------------------------------------------

//Funciones adicionales -----------------------------------------------------------------------------------------------------
/*function picarEstrucutra(direccion) {
    if (direccion.x == 10 && direccion.y == 10) {
        let decision = prompt("Desea picar la madera?")
        if (decision == "si") {
            let inventario = {...estructuras.materiales.madera}
        } else {
            alert("puede seguir avanzando")
        }
    }
}
*/

function moverPersonaje() {
    let numero = random()
    if (numero < 70) {
        generarMob()
    } else {
        generarEstructura()
    }
}

function verInventario (){
    let mensaje = ""
    for(let cosas in jugador.inventario){
        mensaje += `${cosas} : ${jugador.inventario[cosas]}\n`
    }
    alert(mensaje)
}




//While principal --------------------------------------------------------------------------------------------------

while(activo){
    let hacerAlgo = Number(prompt("Moverse 1, Interactuar inventario 2, Picar 3"))
    switch (hacerAlgo) {
        case 1:
            moverPersonaje()
            break
        case 2:
            verInventario()
            break
        case 3:
            window.location.href = "index.html"
            break
    }
} 
