//.lastIndexOf(): Esta función es utilizada para retornar el index (posición) de el valor que se indique.
let aString = "Good morning! It's a great morning to learn programming.";
let index = aString.lastIndexOf("morning");

console.log(index); // 27

//Si el valor que se indica, no está en el string, entonces la función devolverá un -1
let nameUser = "Nathan Sebhastian";
let indexString = nameUser.lastIndexOf("morning");

console.log(index); // -1

//.match(): Este método es utilizado para encontrar matches basados en una expresión regular.
var totn_string = 'TechOnTheNet';

console.log(totn_string.match(/[A-Z]/));

//.subString(): Este método devuelve un subconjunto de un objeto String.
var cualquierCadena = "Daniela";

// Muestra "Dan"
print(cualquierCadena.substring(0,3));

//.replaceAll(): Este método devuelve un string con el valor solicitado remplazado.
let string = "Geeks or Geeks";
newString = string.replaceAll("or", "for");
console.log(newString); //Geeks for Geeks


