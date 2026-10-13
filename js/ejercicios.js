
// EJERCICIO 1
// Autocuracion con pociones

let vida = 100;
let vidaMaxima = 100;
let limitePocion = 50;
let pociones = 3;

console.log("AUTOCURACION KAIJU");
console.log("Vida inicial:", vida);
console.log("Pociones:", pociones);

let intervalo = setInterval(function () {

    vida = vida - 5;

    console.log("Vida actual:", vida);

    if (vida < limitePocion && vida > 0 && pociones > 0) {

        vida = vida + 30;
        pociones--;

        if (vida > vidaMaxima) {
            vida = vidaMaxima;
        }

        console.log("Se utilizo una pocion");
        console.log("Vida recuperada:", vida);
        console.log("Pociones restantes:", pociones);
    }

    if (vida <= 0) {
        vida = 0;
        console.log("El Kaiju se quedo sin vida");
        clearInterval(intervalo);
    }

}, 2000);

// EJERCICIO 2
// Organizar elementos de la bolsa

let bolsa = [
    {
        nombre: "Pistola",
        cantidad: 5,
        tipo: "Arma"
    },
    {
        nombre: "Guanteletes",
        cantidad: 2,
        tipo: "Arma"
    },
    {
        nombre: "Espada",
        cantidad: 3,
        tipo: "Arma"
    },
    {
        nombre: "Pocion",
        cantidad: 8,
        tipo: "Consumible"
    },
    {
        nombre: "Botiquin",
        cantidad: 4,
        tipo: "Consumible"
    },
    {
        nombre: "Energia",
        cantidad: 6,
        tipo: "Consumible"
    },
    {
        nombre: "Traje",
        cantidad: 2,
        tipo: "Equipo"
    },
    {
        nombre: "Casco",
        cantidad: 5,
        tipo: "Equipo"
    },
    {
        nombre: "Escudo",
        cantidad: 3,
        tipo: "Equipo"
    }
];

// Funcion para organizar la bolsa

function organizarBolsa() {

    let armas = bolsa.filter(objeto => objeto.tipo === "Arma");

    let consumibles = bolsa.filter(objeto => objeto.tipo === "Consumible");

    let equipo = bolsa.filter(objeto => objeto.tipo === "Equipo");

    // Ordenar por cantidad de mayor a menor

    armas.sort((a, b) => b.cantidad - a.cantidad);

    consumibles.sort((a, b) => b.cantidad - a.cantidad);

    equipo.sort((a, b) => b.cantidad - a.cantidad);

    console.log("BOLSA DE KAIJUS");

    console.log("Armas:");
    console.table(armas);

    console.log("Consumibles:");
    console.table(consumibles);

    console.log("Equipo:");
    console.table(equipo);
}

organizarBolsa();

// EJERCICIO 3
// Batalla de Kaijus

let kaiju8 = {
    nombre: "Kaiju No.8",
    tipo: "Transformacion",
    ataque: "Golpe",
    daño: 30,
    vida: 100,
    defensa: 10
};

let kaiju9 = {
    nombre: "Kaiju No.9",
    tipo: "Misterioso",
    ataque: "Proyectil",
    daño: 25,
    vida: 100,
    defensa: 8
};

// Funcion para calcular el daño

function calcularDaño(atacante, defensor) {

    let dañoFinal = atacante.daño - defensor.defensa;

    if (dañoFinal < 0) {
        dañoFinal = 0;
    }

    return dañoFinal;
}

// Funcion para atacar

function atacar(atacante, defensor) {

    let daño = calcularDaño(atacante, defensor);

    defensor.vida = defensor.vida - daño;

    if (defensor.vida < 0) {
        defensor.vida = 0;
    }

    console.log(atacante.nombre + " utilizo " + atacante.ataque);
    console.log("Daño realizado:", daño);
    console.log("Vida de " + defensor.nombre + ":", defensor.vida);
}

// Iniciar batalla

console.log("BATALLA DE KAIJUS");
console.log(kaiju8.nombre + " VS " + kaiju9.nombre);

let turno = 1;

while (kaiju8.vida > 0 && kaiju9.vida > 0) {

    console.log("Turno:", turno);

    atacar(kaiju8, kaiju9);

    if (kaiju9.vida > 0) {
        atacar(kaiju9, kaiju8);
    }

    turno++;
}

// Mostrar ganador

if (kaiju8.vida > 0) {
    console.log("Ganador:", kaiju8.nombre);
} else {
    console.log("Ganador:", kaiju9.nombre);
}
