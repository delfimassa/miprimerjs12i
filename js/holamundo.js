// variables numericas
let edad1 = parseInt(prompt("Cuantos anios tenes?"));
console.log(edad1);
let edad2 = parseInt(prompt("Cuantos anios tiene tu hno/a?"));
console.log(edad1);
// estructura condicional
if (edad1>edad2)
{
    let diferencia = edad1 - edad2;
    document.write("Tu hno y tu se llevan "+diferencia+" anios. Tu eres el mayor.");
}
else if(edad1<edad2)
{
    let diferencia = edad2 - edad1;
    document.write("Tu hno y tu se llevan "+diferencia+" anios. Tu eres el menor.");
}
else 
{
    let diferencia = edad2 - edad1;
    document.write("Tu hno y tu se llevan "+diferencia+" anios. Son mellizos?.");
}



