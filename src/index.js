import cipher from './cipher.js';


document.getElementById("crypt").onclick =

  function encode(e) {
    e.preventDefault();

    const offset = (document.getElementById("offset").value)
    let string = document.getElementById("cod").value

    let encodeCipher = cipher.encode(offset, string)

    document.getElementById("encod").value = encodeCipher
   
    const encodeButton = document.getElementById("crypt")
    encodeButton.addEventListener("click", encode)
  }

document.getElementById("decrypt").onclick =

  function decode(e) {
    e.preventDefault();
    
    const offset = (document.getElementById("offset").value)
    let string = document.getElementById("encod").value

    let decodeCipher = cipher.decode(offset, string)

    document.getElementById("encod").value = decodeCipher 

    const decodeButton = document.getElementById("decrypt")
    decodeButton.addEventListener("click", decode)  
  }



