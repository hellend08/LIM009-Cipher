window.cipher = {
  encode: (mayusText, offsetFinal) => {
    let cipherText;  
    let ascii;
    let concatCipherText = "";
    for ( let i = 0; i < mayusText.length; i++) {
      ascii = mayusText.charCodeAt(i);
      cipherText = String.fromCharCode((parseInt(ascii) - 65 + parseInt(offsetFinal)) % 26 + 65);
      concatCipherText += cipherText;  
    } 
    return concatCipherText;
  },
  decode: (mayusText, offsetFinal) => {
    let decipherText;  
    let ascii;
    let concatDecipherText = "";
    for(let i = 0; i < mayusText.length; i++) {
      ascii = mayusText.charCodeAt(i);
      decipherText = String.fromCharCode((parseInt(ascii) + 65 - parseInt(offsetFinal)) % 26 + 65);     
      concatDecipherText += decipherText;
    }
    return concatDecipherText;
  }
};