
// ==========================================
// EJERCICIOS DE JAVASCRIPT - KAIJU NO. 8
// ==========================================


// ==========================================
// EJERCICIO 1: AUTOCURACION CON POCIONES
// ==========================================

// Variables del jugador
let vida = 100;
let vidaMaxima = 100;
let limiteCuracion = 50;
let pociones = 3;
let curacion = 30;

console.log("=== AUTOCURACION ===");
console.log("Vida inicial:", vida);
console.log("Pociones disponibles:", pociones);

// La vida disminuye cada 2 segundos
let intervalo = setInterval(function () {

    vida -= 5;

    if (vida < 0) {
        vida = 0;
    }

    console.log("Vida actual:", vida);

    // Usar una pocion si la vida es menor a 50
    if (vida > 0 && vida < limiteCuracion && pociones > 0) {

        vida += curacion;

        // Evitar superar la vida maxima
        if (vida > vidaMaxima) {
            vida = vidaMaxima;
        }

        pociones--;

        console.log("¡Pocion utilizada!");
        console.log("Vida recuperada:", vida);
        console.log("Pociones restantes:", pociones);
    }

    // Detener el programa cuando la vida llegue a 0
    if (vida === 0) {
        console.log("El jugador ha muerto.");
        clearInterval(intervalo);
    }

}, 2000);


// ==========================================
// EJERCICIO 2: ORDENAMIENTO DE BOLSA
// ==========================================

// Arreglo de objetos con elementos de Kaiju No. 8

const bolsa = [
    {
        nombre: "Pistola",
        cantidad: 5,
        tipo: "Arma"
    },
    {
        nombre: "Espada",
        cantidad: 2,
        tipo: "Arma"
    },
    {
        nombre: "Guanteletes",
        cantidad: 3,
        tipo: "Arma"
    },
    {
        nombre: "Botiquin",
        cantidad: 10,
        tipo: "Consumible"
    },
    {
        nombre: "Pocion de vida",
        cantidad: 6,
        tipo: "Consumible"
    },
    {
        nombre: "Bebida energetica",
        cantidad: 4,
        tipo: "Consumible"
    },
    {
        nombre: "Traje de combate",
        cantidad: 2,
        tipo: "Equipo"
    },
    {
        nombre: "Escudo",
        cantidad: 5,
        tipo: "Equipo"
    },
    {
        nombre: "Casco",
        cantidad: 3,
        tipo: "Equipo"
    }
];

// Funcion para organizar la bolsa
function organizarBolsa(elementos) {

    let armas = [];
    let consumibles = [];
    let equipo = [];

    // Separar los elementos por tipo
    for (let i = 0; i < elementos.length; i++) {

        if (elementos[i].tipo === "Arma") {
            armas.push(elementos[i]);

        } else if (elementos[i].tipo === "Consumible") {
            consumibles.push(elementos[i]);

        } else if (elementos[i].tipo === "Equipo") {
            equipo.push(elementos[i]);
        }
    }

    // Ordenar de mayor a menor cantidad
    armas.sort((a, b) => b.cantidad - a.cantidad);
    consumibles.sort((a, b) => b.cantidad - a.cantidad);
    equipo.sort((a, b) => b.cantidad - a.cantidad);

    // Mostrar resultados
    console.log("=== BOLSA ORGANIZADA ===");

    console.log("ARMAS:");
    console.table(armas);

    console.log("CONSUMIBLES:");
    console.table(consumibles);

    console.log("EQUIPO:");
    console.table(equipo);
}

organizarBolsa(bolsa);


// ==========================================
// EJERCICIO 3: BATALLA KAIJU
// ==========================================

// Caracteristicas de los Kaijus

const kaiju8 = {
    nombre: "Kaiju No. 8",
    tipo: "Transformacion",
    ataque: "Golpe devastador",
    daño: 30,
    vida: 100,
    defensa: 10
};

const kaiju9 = {
    nombre: "Kaiju No. 9",
    tipo: "Regeneracion",
    ataque: "Proyectil organico",
    daño: 25,
    vida: 100,
    defensa: 8
};

// Funcion para calcular el daño
function calcularDaño(atacante, defensor) {

    let dañoFinal = atacante.daño - defensor.defensa;

    // Evitar daño negativo
    if (dañoFinal < 0) {
        dañoFinal = 0;
    }

    return dañoFinal;
}

// Funcion para atacar
function atacar(atacante, defensor) {

    let dañoRecibido = calcularDaño(atacante, defensor);

    defensor.vida -= dañoRecibido;

    // Evitar vida negativa
    if (defensor.vida < 0) {
        defensor.vida = 0;
    }

    console.log(
        atacante.nombre + " utiliza " + atacante.ataque
    );

    console.log(
        defensor.nombre + " recibe " + dañoRecibido + " de daño."
    );

    console.log(
        "Vida restante de " + defensor.nombre + ": " + defensor.vida
    );
}

// Funcion para iniciar la batalla
function iniciarBatalla(kaiju1, kaiju2) {

    console.log("=== BATALLA KAIJU ===");

    console.log(kaiju1.nombre + " VS " + kaiju2.nombre);

    let turno = 1;

    // La batalla continua mientras ambos tengan vida
    while (kaiju1.vida > 0 && kaiju2.vida > 0) {

        console.log("=== TURNO " + turno + " ===");

        atacar(kaiju1, kaiju2);

        // El segundo Kaiju solo ataca si sigue vivo
        if (kaiju2.vida > 0) {
            atacar(kaiju2, kaiju1);
        }

        turno++;
    }

    // Determinar ganador
    if (kaiju1.vida > 0) {
        console.log("¡GANADOR: " + kaiju1.nombre + "!");

    } else {
        console.log("¡GANADOR: " + kaiju2.nombre + "!");
    }
}

// Ejecutar batalla
iniciarBatalla(kaiju8, kaiju9);
