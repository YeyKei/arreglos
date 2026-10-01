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
        type: "treje",
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
        type: "trsformacion",
        number: 5,
        description: "pose la adaptacion del sujeto, con una fornitud de 9.8",
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

kaiju.forEach(
    (kaiju) => {
        console.log(kaiju.name);
    }
);

if (kaiju.some(kaiju => kaiju.nombre === kaiju.nombre)) {
    console.log("Ya existe");
} else {
    kaiju.push(kaiju);
    console.log("Se agregó");
}