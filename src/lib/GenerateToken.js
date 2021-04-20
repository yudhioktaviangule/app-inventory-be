import { mysqlKu } from "./MYSQL.js";
import crypto from 'crypto';
import kriptografi from "./crips.js";

export default class TokenUser{
    users = {id:0};
    constructor(user){
        this.users = user;
    }
 
   async generateToken(){
        let token = '';
        const {id:ID,auth_token:TOKEN} = this.users;
        if(TOKEN=='NO_TOKEN'){
            for(let i=0;i<3;i++){
                token+=''+kriptografi(ID+''+parseInt(Math.random()*(127+1)));
            }
            let sql = `UPDATE users SET auth_token=? WHERE id=?`;
            const sqlku = await mysqlKu.query(sql,[token,ID]);
            let field=[];
            for(let i in this.users){
                field.push(i);
            }
            sql = `SELECT ${field.join(',')} FROM users WHERE id=?`;
            const user = await mysqlKu.query(sql,[ID]);
            this.users = user  
        }

        return this.users
    }
    
}