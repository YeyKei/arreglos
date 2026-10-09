
let kaiju = [
    {
        name: "No.1",
        type: "arma",
        number: 1,
        description: "pose habilidad para prever movimientos del oponente",
    },
    {
        name: "No.2",
        type: "guanteletes",
        number: 2,
        description: "pose ataques sonicos y energia electrica",
    },
    {
        name: "No.4",
        type: "traje",
        number: 3,
        description: "pose velocidad y agilidad extrema",
    },
    {
        name: "No.6",
        type: "rey",
        number: 4,
        description: "pose el poder de criokinesis a escala masiva",
    },
    {
        name: "No.8",
        type: "transformacion",
        number: 5,
        description: "pose la adaptacion del sujeto, con una fortitud de 9.8",
    },
    {
        name: "No.9",
        type: "misterioso",
        number: 6,
        description: "pose alta inteligencia, capacidad de camuflaje humano y gran adaptacion",
    },
    {
        name: "No.10",
        type: "adaptativo",
        number: 7,
        description: "pose fuerza fisica descomunal y regeneracion avanzada",
    },
];

// Mostrar los nombres con forEach
console.log("Lista de Kaijus");

kaiju.forEach(
    (kaiju) => {
        console.log(kaiju.name);
    }
);

// Agregar un nuevo Kaiju
let nuevoKaiju = {
    name: "No.11",
    type: "desconocido",
    number: 8,
    description: "pose habilidades desconocidas",
};

// Verificar que no exista
if (kaiju.some(kaiju => kaiju.name === nuevoKaiju.name)) {
    console.log("Ya existe");
} else {
    kaiju.push(nuevoKaiju);
    console.log("Se agregó");
}

console.log(kaiju);

// Filtrar Kaijus
console.log("Kaijus con numero mayor a 4");

let filtrados = kaiju.filter(kaiju => kaiju.number > 4);

console.log(filtrados);

// Obtener solo los nombres
console.log("Nombres de los Kaijus");

let nombres = kaiju.map(kaiju => kaiju.name);

console.log(nombres);

// Buscar un Kaiju
console.log("Buscar Kaiju No.8");

let buscar = kaiju.find(kaiju => kaiju.name === "No.8");

console.log(buscar);


// OPERACIONES CRUD

// CREATE - Agregar
let agregarKaiju = {
    name: "No.12",
    type: "fuerza",
    number: 9,
    description: "pose gran resistencia y fuerza",
};

if (kaiju.some(kaiju => kaiju.name === agregarKaiju.name)) {
    console.log("El Kaiju ya existe");
} else {
    kaiju.push(agregarKaiju);
    console.log("Kaiju agregado");
}

// READ - Mostrar
console.log("Lista actualizada");

kaiju.forEach(
    (kaiju) => {
        console.log(kaiju.name, kaiju.type, kaiju.description);
    }
);

// UPDATE - Modificar
let modificar = kaiju.find(kaiju => kaiju.name === "No.12");

if (modificar) {
    modificar.type = "resistencia";
    modificar.description = "pose fuerza y resistencia extrema";
    console.log("Kaiju modificado");
} else {
    console.log("No se encontró el Kaiju");
}

// DELETE - Eliminar
let eliminar = kaiju.findIndex(kaiju => kaiju.name === "No.11");

if (eliminar !== -1) {
    kaiju.splice(eliminar, 1);
    console.log("Kaiju eliminado");
} else {
    console.log("No se encontró el Kaiju");
}

// Mostrar arreglo final
console.log("Arreglo final de Kaijus");
console.log(kaiju);
