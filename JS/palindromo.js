'use strict';
/*Dada una cadena de texto, comprobar si es o no un palindromo.
Los palindromos son palabras que se leen igual aun estando invertidas, ejeplo de ello son:
ana, bob, otto, somos. etc.
-No tener en cuenta espacios ni simbolos.*/
//Solución
//Creación de la función
function palindromo(texto){
    //Separamos el string que nos llega en un array de letras mediante la creación de una variable con la función split.
    let escritura_Invertida = texto
                                .split('') //separa un texto por el separador que definamos en un array
                                .reverse() //Le da la vuelta invierte el orden de los elementos del array
                                .join(''); //une los elementos del array en un solo texto.
        /*Con if puedo realizar la comprobación asi:
        if(escritura_Invertida === texto){
            return true;
        }else{
            return false;
        }
        */
       //Puede optimizarse el codigo haciendo unicamente uso de la condición de comparación, asi:
    return(escritura_Invertida === texto);   
}
console.log("¿Es un palindromo? "+palindromo('somosonosomos'));
