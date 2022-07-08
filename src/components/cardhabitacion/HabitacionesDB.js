let Habitaciones=[
    {
        "id":1,
        "nombre":"Habitación 1A",
        "numero": 1,
        "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "cantidadCamas": 3,
        "precioNoche": 160000,
        "capacidadPersonas": 4,
        "img": "room1",
        "wifi": true,
        "tv": true,
        "nevera": false,
        "cajaFuerte": false,
        "baño":true
    },
    {
        "id":2,
        "nombre":"Habitación 2A",
        "numero": 2,
        "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "cantidadCamas": 4,
        "precioNoche": 180000,
        "capacidadPersonas": 6,
        "img": "room2",
        "wifi": true,
        "tv": true,
        "nevera": false,
        "cajaFuerte": false,
        "baño":true
    },
    {
        "id":3,
        "nombre":"Habitación 3A",
        "numero": 3,
        "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "cantidadCamas": 5,
        "precioNoche": 210000,
        "capacidadPersonas": 10,
        "img": "room3",
        "wifi": true,
        "tv": true,
        "nevera": true,
        "cajaFuerte": false,
        "baño":true
    },
    {
        "id":4,
        "nombre":"Habitación 4A",
        "numero": 4,
        "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "cantidadCamas": 1,
        "precioNoche": 140000,
        "capacidadPersonas": 2,
        "img": "room4",
        "wifi": true,
        "tv": true,
        "nevera": false,
        "cajaFuerte": false,
        "baño":true
    },
    {
        "id":5,
        "nombre":"Habitación 5A",
        "numero": 5,
        "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "cantidadCamas": 3,
        "precioNoche": 210000,
        "capacidadPersonas": 6,
        "img": "room5",
        "wifi": true,
        "tv": true,
        "nevera": true,
        "cajaFuerte": false,
        "baño":true
    }
]

export function getAllHabitaciones(){
    return Habitaciones;
}