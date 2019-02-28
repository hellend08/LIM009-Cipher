
/* Acá va tu código */
let pagOne = document.getElementById("root");
let button1 = document.getElementById("button");
let pagTwo = document.getElementById("pagTwo")
let getBack1 = document.getElementById("getBack")

pagTwo.style.display = "none";

button1.addEventListener("click", function(){
    pagOne.style.display = "none";
    button1.style.display = "block";
    pagTwo.style.display = "block";
})

getBack1.addEventListener("click", function(){
    pagOne.style.display = "block";
    pagTwo.style.display = "none";
    
})
// obteniendo valor del input numero para los espacios:


const texOne1 = document.getElementById("texOne");
const buttonCipher1 = document.getElementById("buttonCipher");
const buttonCipher2 = document.getElementById("buttonDecipher");
const texTwo2 = document.getElementById("texTwo")

const numberOffset = document.getElementById("offset");

console.log(numberOffset.value);


var encode = window.cipher;

buttonCipher1.addEventListener("click", function (){
    
    const readTex = (texOne1.value).toUpperCase();
    const answerTex = texTwo2.value;
     
    /*console.log*/(readTex);
    cipher.encode(numberOffset, readTex, texTwo2)
   

})

buttonCipher2.addEventListener("click", function (){
    
    const readTex = (texOne1.value).toUpperCase();
    const answerTex = texTwo2.value;
     
    console.log(readTex);
    cipher.decode(numberOffset, readTex, texTwo2)
   

})



/*document.getElementById("buttonCipher").addEventListener("click",() =>{
    let textoDescifrado = document.getElementById("texOne").value;
    let desplazamiento = document.getElementById("offset").value;
    newTex=cipher.encode(textoDescifrado, desplazamiento);
    document.getElementById("texTwo").value = newTex;


})*/

/*
let oneTex= "diana";
let offset= 3;
let ascii;
let numberOff;
let texTwo;

for(let i = 0; i < oneTex.length; i++){
    ascii=oneTex[i].charCodeAt();
    numberOff= ascii + offset;
    console.log(texTwo=String.fromCharCode(numberOff));
}
*/
 
/*
const letra = 'B';
const numero = 4;
const assci = letra.charCodeAt();
console.log(assci);
const nuevoNumero =  assci + numero;
console.log(nuevoNumero)

console.log(String.fromCharCode(nuevoNumero));

let palabra="ABC";
let desplazamiento= 3;
let ascii;
let nuevoNumero;
let nuevaPalabra;

for(let i=0; i< palabra.length;i++){
  ascii=palabra[i].charCodeAt();
  nuevoNumero=ascii + desplazamiento;
  console.log(nuevapalabra=String.fromCharCode(nuevoNumero));
  */