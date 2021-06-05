const cipher = {
 
  encode: function encode(offset, string) {
    let mensage = ""

    for (let i = 0; i < string.length; i++) {
      let crypt = string.charCodeAt(i) 
      if (crypt >= 65 && crypt <= 90) {
        crypt = ((crypt - 65 + offset) % 26) + 65
      }
      else if(crypt >= 97 && crypt <= 122) {
        crypt = ((crypt - 97 + offset) % 26) + 97
      }
      mensage += String.fromCharCode(crypt)
    }
    return mensage
  },

  decode: function (offset, string) {
    let response = ""

    for (let i = 0; i < string.length; i++) {
      let decode = string.charCodeAt(i) 
      if (decode >= 65 && decode <= 90) {
        decode = 90-((90 - decode + offset) % 26);
      }
      else if(decode >= 97 && decode <= 122) {
        decode = 122-((122 - decode + offset) % 26);
      }
      response += String.fromCharCode(decode)
    }
    return response
  }

};

export default cipher;

// formula do video ((codLetraASC - cod1letra + offset) % tamanho do alfabeto=== 26) + cod1letra
// posso deixar a condição for vazia? 
// decode: dá pra usar o toLowerCase() ?  