window.cipher = {
  
  encode: (numberOffset, readTex,texTwo2) => {
    /* Acá va tu código */
    console.log(numberOffset.value);
      let newNumber;  
      let ascii;
      let newTex = " ";
      let textoDescifrado = readTex;

    for(let i=0; i<textoDescifrado.length; i++) {
       ascii=textoDescifrado.charCodeAt(i);
       if( 65 <= ascii <= 90){
       newNumber=String.fromCharCode((ascii - 65 + numberOffset.value) % 26 + 65);
       console.log(newNumber);
       var sum = newTex += newNumber;/*String.fromCharCode*/ 
       console.log(sum);
       texTwo2.innerHTML = sum ;
      }
    }

  },


  /* Acá va tu código */
  decode: (numberOffset, readTex,texTwo2) => {
    let newNumber;  
      let ascii;
      let newTex = " ";
      let textoDescifrado = readTex;

    for(let i=0; i<textoDescifrado.length; i++) {
       ascii=textoDescifrado.charCodeAt(i);
       if( 65 <= ascii <= 90){
       newNumber=String.fromCharCode(( parseInt(ascii) - 65 - parseInt(numberOffset.value)) % 26 + 65 +  parseInt(numberOffset.value));
       console.log(newNumber);
       var sum = newTex += newNumber;/*String.fromCharCode*/ 
       console.log(sum);
       texTwo2.innerHTML = sum ;
      }
    }

   
  }
};
