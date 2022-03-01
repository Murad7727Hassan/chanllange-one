 //Module exports 
const crypto = require("crypto");
 // a class to a deal passwod 
class PasswordClint {
    constructor(algorithm, Securitykey, initVector,message,cipher,hex,utf) {
    this.algorithm = "aes-256-cbc";
    this.Securitykey = crypto.randomBytes(32);
    this.initVector = crypto.randomBytes(16);
    this.cipher = crypto.createCipheriv(this.algorithm, this.Securitykey, this.initVector);
    this.hex='hex';
    this.utf ='utf-8';
  }

/*
@message 
*/

  //This function encrypted message
  encryptedMessage(message){
    const cipher = crypto.createCipheriv(this.algorithm, this.Securitykey, this.initVector);
    let encryptedData =this.cipher.update(message, this.utf, this.hex);
    encryptedData += this.cipher.final(this.hex);
    console.log("Encrypted message: " + encryptedData);
   } 

/*
@encrpt_text

*/

//  This function dencrypted message
 dencryptedMessage(encrpt_text){
     console.log(encrpt_text)
     const decipher = crypto.createDecipheriv(this.algorithm, this.Securitykey, this.initVector);
     let decryptedData = decipher.update(encrpt_text, this.hex, this.utf);
     decryptedData +=decipher.final(this.utf);
     console.log("Decrypted message: " + decryptedData);
  }
}
// New object from class PasswordClint
let passwod=new PasswordClint();
module.exports = passwod;
   
 