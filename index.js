let activo = true

let jugador = {
    status:{
        vida : 20,
        hambre: 20,
        daño : 2
    },
    inventario : {},
    armadura : {
        casco : "",
        pechera : "",
        pantalon : "",
        botas : ""
    }
}

let mobs = {
    hostiles : {
        araña : {
            daño : 1,
            vida : 3
        },
        esqueleto : {
            daño : 3,
            vida : 5
        },
        zombie : {
            daño : 2,
            vida: 6
        }
    },
    pacifico : {
        oveja : {
            vida : 3,
            comida : 5
        },
        vaca : {
            vida : 4,
            comida : 7
        },
        cerdo : {
            vida : 3,
            comida : 6
        }
    }
}

let materiales = {
    recursos : {
        madera : {
            resistencia : 4
        }
    },
    menas : {
        carbon : {
            resistencia : 8
        },
        hierro : {
            resistencia : 10
        },
        piedra : {
            resistencia : 6
        }
    }
}

let estructuras = {
    aldea:{
        perla : 1,
        espada : 5
    },
    mina : {
        ...materiales.menas
    },
    portalEnd:{
        perla : 3
    }
}

function random(){
    return Math.floor(Math.random() * 100) + 1
}

function generarEstructura(){
    let numero = random()
    if(numero < 60){
        
    }else if(numero < 95){
        
    }else{
        
    }
        
}

function generarMob(){
    let num = random()
    if(num < 60){
        console.log("buenas")
    }
}

function picarEstrucutra (direccion){
    if(direccion.x == 10 && direccion.y == 10){
        let decision = prompt("Desea picar la madera?")
        if(decision == "si"){
            let inventario = Object.assign(...estructuras.materiales.madera)
        }else{
            alert("puede seguir avanzando")
        }
    }
}

function moverPersonaje (){
    let numero = random()
    if(numero < 70){
        generarMob()
    }else{
        generarEstructura()
    }
}






do{
    let hacerAlgo = prompt("Moverse 1, Interactuar inventario 2, Picar 3")
    switch(hacerAlgo){
        case 1 :
            moverPersonaje()
            break
        case 2:
            break
        case 3:
            picarEstrucutra()
            break
    }
    
}while(activo)
