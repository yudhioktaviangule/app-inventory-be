import crypto from "crypto";

export default function kriptografi(plaintext){
    let pito = plaintext
    try{

        pito = crypto.createHash('md5')
                   .update(pito)
                   .digest('hex');
    }catch(e){
        console.log("EERR",e);
    }
    return pito
}