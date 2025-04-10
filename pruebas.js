let jugador = {
    status: {
        vida: 20,
        hambre: 20,
        daño: 2
    },
    inventario: {
    },
    armadura: {
        casco: "",
        pechera: "",
        pantalon: "",
        botas: ""
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


let value = "oro"

jugador.inventario[value] += materiales.menas.oro.cantidad

console.log(jugador.inventario)


/*function contar(objeto1){
    if(jugador.inventario[objeto1]){
        return jugador.inventario[objeto1]
    }else{
        return (`No existe`)
    }
}

console.log(contar(`perlas`))
*/
