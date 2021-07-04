function genratePIN(number) {
     return ("000000" + Math.floor(Math.random() * 1000000 + 1)).slice(-number);
  }
  
 module.exports =  genratePIN;
  