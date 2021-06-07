import cipher from './cipher.js';


document.getElementById("crypt").onclick =

  function encode(e) {
    e.preventDefault();

    const encodeButton = document.getElementById("crypt")

    const offset = (document.getElementById("offset").value)
    let string = document.getElementById("codificar").value

    let encodeCipher = cipher.encode(offset, string)

    document.getElementById("descodificar").value = encodeCipher
    encodeButton.addEventListener("click", encode)
  }

document.getElementById("decrypt").onclick =

  function decode(e) {
    e.preventDefault();
    
    const decodeButton = document.getElementById("decrypt")

    const offset = (document.getElementById("offset").value)
    let string = document.getElementById("descodificar").value

    let decodeCipher = cipher.decode(offset, string)

    document.getElementById("codificar").value = decodeCipher 
    decodeButton.addEventListener("click", decode)  
  }



