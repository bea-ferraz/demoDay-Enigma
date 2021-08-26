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


let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

const copeButton = document.getElementById("copyButton");
copeButton.onclick = function (e) {
  e.preventDefault();
  document.getElementById("encod").select();
  document.execCommand("copy");
}



