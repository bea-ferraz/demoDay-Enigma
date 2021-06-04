const cipher = { 
    //= string.charCodeAt(i) - 65 + offset % 26 + 65
    //  mensage = String.fromCharCode(crypt = string.charCodeAt(i))

   encode: function encode(offset, string) {
     let mensage = "";

    for (let i = 0; i < string.length; i++) {
        let crypt = string.charCodeAt(i) + offset 
          while (crypt = string.charCodeAt(i) >= 65 && crypt <= 90 ) {
          crypt = string.charCodeAt(i) - 65 + offset % 26  + 65
        } 
        mensage(String.fromCharCode(crypt)) 
     }
     return mensage
 },

    decode : function ( offset, string){ 
        let response = "";  
        // é um [] no let ??
            for (let i = 0; i < string.length; i++) {
            let decode = string.fromCharCode(i) - offset
            while (decode = 90) {
                decode = string.fromCharCode(response)
            }
        }
        return response
    }
    
};
      

  
export default cipher;

