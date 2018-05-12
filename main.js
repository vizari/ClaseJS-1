/* comentario largo*/
/*
//numerica
var uno= 1
var dos= 2
console.log(uno + dos);

//string
var pregunta= "¿Hola cómo estas?"
var respuesta= " Bien y tú?"

console.log(pregunta  + respuesta);

//boolean
var si= true
var no= false

console.log(typeof si);
//typeof para saber que tipo de variable es

//var undef
var unde=

console.log("var undefined", unde);

var suma1= 12;
var suma2= 4;

console.log(suma1 + suma2);

var resta1= 22;
var resta2= 2;

console.log(resta1 - resta2);

var valorx1= 6;
var valorx2= 6;

console.log(valorx1 * valorx2);

var div1= 10;
var div2= 5;

console.log(div1 / div2);

//var incremento
var numeroUno= 2;
console.log(numeroUno)
var num2= ++numeroUno;
console.log(num2)



var bol1= true;
var bol2= false;

console.log(bol1 === bol2) //verdadero es iguakl a falso? falso
console.log(bol1 !== bol2) //verdadero no e sigual a falso? verdadero
console.log(bol1 !== bol1) //verdadero no es iguakl a verdadero ?falso
console.log(bol2 === bol2)//falso es igual a falso ? verdadero

//>= mayor o igual a
//<= menor o igual a 

var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2); 
console.log(num1 <= num1);


//operador logico AND

var nume1 = 10;
var nume2 = 20;

console.log(nume1 < nume2 && nume2 >nume1)

//operador logico OR (basta con que una condicion se cumpla para que sea true)

var nume1or = 10;
var nume2or = 20;

console.log(nume1or < nume2or || nume2or >nume1or);


//operacion condicionales o ternam if simplificado

var numero1 = 10;
var numero2 = 20;

console.log(numero1 < numero2 ? "si, es verdadero" :"no, es falso");

//sentencia if (solo se ejecuta si hay un valor verdadero)

if(numero1 < numero2){
    console.log("se ejecuta")
}

//if else example / if else if else

if(numero1 < numero2 && numero1 > numero2){
    console.log("se ejecuta")
}else if(numero1 < numero2 || numero1 > numero2){
    console.log("se ejecuta el else if")
}else{
    console.log("no se ejecuta")
}

//sentencia switch

var numS1= 10;
var numS2= 20;

switch (numS1 + numS2){
    case 10:
    console.log("es igual a 10");
    break;
    case 20:
    console.log("es igual a 20");
    break;
    case 30:
    console.log("es igual a 30");
    break;
    default:
    console.log("es otro valor")
}


function rango (num) {
    if (num <= 5){
        return 0;

    }else if (num >= 6 && num <= 10){
        return 1
    }
}
switch (rango (7)){
    case 0:
    console.log("corresponde a 0");
    break;
    case 1:
    console.log("corresponde a 1");
    break;
    default:
    console.log("es otro valor")
}

//formas de hacer una function

function nomnbre (params){
    //bloque de texto
}
*/

/*no todos soportan esta forma : var nombre = (params) =>(funcion){
*/
/*
function nomnbreCompleto (nombre,apellido){
   console.log(nombre + " " + apellido)
}

nomnbreCompleto("Viviana", "Zapata");

*/
var Medad=18;

function edad (Medad){ 
    if (Medad >= 18){
        return 0;
    }else if (Medad <= 17){
        return 1;
    }
 }

 switch (edad(18)){
    case 0:
    console.log("Es mayor de edad");
    break;
    case 1:
    console.log("es menor de edad");
    break;
    default:
    console.log("es otro valor")
 }

 console.log(Medad); 


 function edad (anioNac){
    return 2018 - anioNac;
}

if(edad(1988) >= 18){
    console.log("eres mayor")
}else{
    console.log("eres menor")
}