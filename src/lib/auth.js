import kriptografi from "./crips.js";
import { mysqlKu } from "./MYSQL.js";



export async function loginWithToken(_token){
    const result = await mysqlKu.query("SELECT id,email,name,level,auth_token FROM users WHERE auth_token=?",[_token]);
    return result.length==0?null:result[0];
}
export async function loginWithUserPass(email,password){
    let pwd = kriptografi(password);
    console.log("pass",pwd);
    const result = await mysqlKu.query("SELECT id,email,name,level,auth_token FROM users WHERE email = ? AND password = ?",[email,pwd]);
    return result.length==0?null:result[0];
}