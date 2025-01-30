const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
]

console.log("🎭🔥🎨❓")


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