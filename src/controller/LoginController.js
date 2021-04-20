import { loginWithUserPass } from "../lib/auth.js";
import TokenUser from "../lib/GenerateToken.js";
export default class LoginController{
    
    async login(email,password){
        
        this.user = await loginWithUserPass(email,password);
        if(this.user==null) return {
            state:401,
            message:'NOT AUTHENTICATED',
            result:null,
        }
        this.user = await new TokenUser(this.user).generateToken();
        return {
            state:200,
            message:'USER HAS BEEN AUTHENTICATE',
            result:this.user[0],
        }
    }
}