//Dado un arreglo de números, calcular la suma de todos los números positivos
// números = [-2,-3,-7, 10, 5, -8, 0, 10, -10, 20, 30, -40, 50]

let numero = [-2,-3,-7, 10, 5, -8, 0, 10, -10, 20, 30, -40, 50]
let suma = 0

for(i=0;i<numero.length;i++){

   
    if(numero[i]>0)
    suma = suma + numero[i]
}

console.log("la suma total de numeros positivos es: "+ suma);

console.log("🎭🔥🎨❓")
