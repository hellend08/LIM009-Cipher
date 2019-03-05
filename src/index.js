let pagOne = document.getElementById("pagOne");
let buttonLink = document.getElementById("buttonLink");
let pagTwo = document.getElementById("pagTwo");
let buttonGetBack = document.getElementById("buttonGetBack");

pagTwo.style.display = "none";

buttonLink.addEventListener("click", function(){

    pagOne.style.display = "none";
    pagTwo.style.display = "block";
});

buttonGetBack.addEventListener("click", function(){
    pagOne.style.display = "block";
    pagTwo.style.display = "none";
    
})
// obteniendo valor del input numero para los espacios:
const numberOffset = document.getElementById("numberOffset");
const inputText = document.getElementById("inputText");
const buttonCipher = document.getElementById("buttonCipher");
const buttonDecipher = document.getElementById("buttonDecipher");
const boxAnswerText = document.getElementById("boxAnswerText");

buttonCipher.addEventListener("click", function (){
    let mayusText = (inputText.value).toUpperCase(); 
    let offsetFinal = numberOffset.value;

    let answerCipher = cipher.encode(mayusText, offsetFinal);


    boxAnswerText.innerHTML = answerCipher;

});

buttonDecipher.addEventListener("click", function (){
    let mayusText = (inputText.value).toUpperCase(); 
    let offsetFinal = numberOffset.value;

   
    let answerDecipher = cipher.decode(mayusText, offsetFinal);
    boxAnswerText.innerHTML = answerDecipher;

})

