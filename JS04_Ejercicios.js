/**
 * Suma de resistencias en serie
 * Calcule la suma de todas las resistencias conectadas en serie.
 * Ejemplos:
 * - `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
 * - `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
 * - `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)
 */
let res1=[-1,5,6,3];
let res2=[14,3.5,6];
let res3=[8,15,100];
let totalsuma=0;
function sumResistenace(resistencias){
for (let i=0; i< resistencias.length ; i++){
    let resistencia=Math.abs(resistencias[i]);
    totalsuma+=resistencia;
}
return totalsuma;
}
console.log(sumResistenace(res1)+" ohms");

// ZAB METHOD 
/**
 * function sumResistance(arr){
 * const arr2 =[];
 * arr.forEach ((e)=> arr2.push(Math.ans(e)));
 * let res = 0;
 * arr2.forEach((e)=>(res=res+e));
 * console.log(`${res} ohms`);
 * }
 */
//------------------------------------------------
/**
 * Número dividido en mitades
 * Dado un número, devuelve el número dividido en sus mitades en una matriz.
 * Ejemplos:
 * - `numDiv(4)` debería devolver `[2, 2]` .
 * - `numDiv(10)` debería devolver `[5, 5]` .
 */
let num1=4;
let num2=10;
function numDiv(number){
    const number2=[];
    mitad=number/2;
    number2.push(mitad,mitad); // en lugar de hacerlo con push podemos hacerlo de la siguiente manera mitad =[number/2,number/2];
    return number2;
}
console.log(numDiv(num1));

//------------------------------------------------
/**
 * Sociedad secreta
 * Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 * Ejemplos:
 * - `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
 * - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
 * - `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
 */
let n1=["Esperanza", "Franco", "Nia"];
let n2=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
let n3=['Harry', 'Ron', 'Hermione'];

function secretName(nombres){
nombres.sort(); //ordenamos los nombres en orden alfabetico
let arr=''; // ponemos una cadena vacía donde vamos almacenar las iniciales
for (i=0;i<nombres.length;i++){
    arr +=nombres[i][0];//accedemos a la posición [i] del array y luego accedemos al primer caracter del string [0], esto tambien se puede hacer colocando .charAt(0), por ultimo lo agregamos a la cadena vacia que ya teniamos anteriormente
}
return arr;
}
console.log(secretName(n2));
//------------------------------------------------
/**
 * Muestra el estado en línea de una lista de usuarios
 * Ejemplo:
 * - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` 
 */
let usuarios=['mockIng99', 'J0eyPunch', 'glassedFer','AndreaRamirez17','bbbb67'];

function onlineStatus(users){
    const count=usuarios.length;
    let res;
    if (count === 1){
        res=`${users[0]} is online`;
    }else if (count===2){
        res=`${users[0]}, ${users[1]} is online`;
    }else{
        res=`${users[0]}, ${users[1]} and ${count -2} more are online`;
    }
    return res;
}
console.log(onlineStatus(usuarios));
//------------------------------------------------
/**
 * Matriz de múltiplos
 * Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 * Ejemplos:
 * - `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
 * - `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .
 */
//------------------------------------------------
/**
 * Dominio positivo en Array
 * Escribe una función para determinar si una matriz es positivamente dominante.
 * Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 * Ejemplo:
 * - `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso` 
 */
//------------------------------------------------
/**
 * Promedio antípoda
 * Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
 * - Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
 * - Sumar cada número de la primera parte con los números inversos de la segunda parte.
 * - Divide cada número de la matriz resultante entre 2
 * Ejemplo:
 * - Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .
 */