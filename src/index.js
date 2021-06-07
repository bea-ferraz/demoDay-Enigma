import cipher from './cipher.js';

document.getElementById("crypt").onclick = 

function encode() {
   const codButtons = document.getElementById("crypt")

     const offset = (document.getElementById("offset").value)
     let string = (document.getElementById("msg").value)

     let result = cipher.encode(offset, string)

     document.getElementById("code").value = result
   codButtons.addEventListener("click", encode)
  
 } 


document.getElementById("decrypt").onclick = 

function decode() {
  
const decodButtons = document.getElementById("decrypt")

     const offset = (document.getElementById("offset").value)
     let string = (document.getElementById("code").value)

     let resultDec = cipher.encode(offset, string)

     document.getElementById("msg").value = resultDec
   decodButtons.addEventListener("click", decode)
  
 } 



