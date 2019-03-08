const pagOne = document.getElementById("presentation");
const buttonLink = document.getElementById("button-link");
const pagTwo = document.getElementById("encode-decode");
const buttonGetBack = document.getElementById("button-get-back");
const numberOffset = document.getElementById("number-offset");
const inputText = document.getElementById("input-text");
const buttonCipher = document.getElementById("button-cipher");
const buttonDecipher = document.getElementById("button-decipher");
const boxAnswerText = document.getElementById("box-answer-text");

pagTwo.style.display = "none";

buttonLink.addEventListener("click", function(){
    pagOne.style.display = "none";
    pagTwo.style.display = "block";
});

buttonGetBack.addEventListener("click", function(){
    pagOne.style.display = "block";
    pagTwo.style.display = "none";   
});

buttonCipher.addEventListener("click", function(){
    const mayusText = (inputText.value).toUpperCase(); 
    const offsetFinal = numberOffset.value;
    boxAnswerText.innerHTML = cipher.encode(mayusText, offsetFinal);
});

buttonDecipher.addEventListener("click", function(){
    const mayusText = (inputText.value).toUpperCase(); 
    const offsetFinal = numberOffset.value;
    boxAnswerText.innerHTML = cipher.decode(mayusText, offsetFinal);
});

