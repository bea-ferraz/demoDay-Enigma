const cipher = {

  encode: function encode(offset, string) {

    let mensage = ""
    let offsetNumber = parseInt(offset)

    if (typeof offsetNumber === "number" && typeof string === "string") {

      for (let i = 0; i < string.length; i++) {
        let crypt = string.charCodeAt(i)
        if (crypt >= 65 && crypt <= 90) {
          crypt = ((crypt - 65 + offsetNumber) % 26) + 65
        }
        else if (crypt >= 97 && crypt <= 122) {
          crypt = ((crypt - 97 + offsetNumber) % 26) + 97
        }
        mensage += String.fromCharCode(crypt)
      }
      return mensage

    } else {
      throw new TypeError("Deu erro")
    }
  },

  decode: function decode(offset, string) {
    let response = ""
    let offsetNumber = parseInt(offset)

    if (typeof offsetNumber === "number" && typeof string === "string") {
      
      for (let i = 0; i < string.length; i++) {
        let decode = string.charCodeAt(i)
        if (decode >= 65 && decode <= 90) {
          decode = 90 - ((90 - decode + offsetNumber) % 26);
        }
        else if (decode >= 97 && decode <= 122) {
          decode = 122 - ((122 - decode + offsetNumber) % 26);
        }
        response += String.fromCharCode(decode)
      }
      return response

    } else {
      throw new TypeError("Deu erro")
    }
  }

};

export default cipher;
