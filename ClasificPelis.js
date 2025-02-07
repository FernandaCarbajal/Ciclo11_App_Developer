const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
]

console.log("🎭🔥🎨❓")


//Ejercicio 1
for (let i=0;i<peliculas.length;i++){
switch(peliculas[i].genero){

case "Drama":
    console.log("🎭 La pelicula "+ peliculas[i].titulo +" es de Drama")
    break;

case "Acción":
    console.log("🔥 La pelicula "+ peliculas[i].titulo +" es de Acción")
    break;

case "Animación":
    console.log("🎨 La pelicula "+ peliculas[i].titulo +" es de Animación")
    break;

default:
    console.log("No se detectó pelicula")
}

}

//Ejercicio 2- Ejercicio 2: Filtrar la pelicula por busqueda

let busqueda = "Avengers: Endgame"

for (let i=0;i<peliculas.length;i++){

    if(peliculas[i].titulo==busqueda){
        
        console.log("Pelicula Encontrada "+ busqueda)
    }

}

// Ejercicio 3: Cuantas peliculas hay por genero.
let drama=0,ac=0,anim=0;

for (let i=0;i<peliculas.length;i++){

switch(peliculas[i].genero){

    case "Drama": 
        drama++;
    break;

    case "Acción":
        ac++;
    break;

    case "Animación":
        anim++;
        break;

    default:
        console.log("No se encontro género");
}


}

console.log(drama+" peliculas de Drama")
console.log(ac+" peliculas de Acción")
console.log(anim+" peliculas de animación")