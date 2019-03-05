window.cipher = {
  
  encode: (mayusText, offsetFinal) => {
   
    let cipherText;  
    let ascii;
    //let count = " ";
    let concatCipherText = "";
    

    for(let i = 0; i < mayusText.length; i++) {
      ascii = mayusText.charCodeAt(i);
      ///if( 65 <= ascii <= 90){
        cipherText = String.fromCharCode((parseInt(ascii) - 65 + parseInt(offsetFinal)) % 26 + 65);
        
        //concatCipherText = 
        concatCipherText += cipherText;     
      //}
    } 
    return concatCipherText;
  },
  
  decode: (mayusText, offsetFinal) => {
     
    let decipherText;  
    let ascii;
    let concatDecipherText = " ";

    for(let i = 0; i < mayusText.length; i++) {
      ascii = mayusText.charCodeAt(i);

     // if( 65 <= ascii <= 90){
        decipherText = String.fromCharCode((parseInt(ascii) + 65 - parseInt(offsetFinal)) % 26 + 65);     
        //const concatDecipherText = 
        concatDecipherText += decipherText;
      //}
    }
    return concatDecipherText;
  }
};