import {mysqlKu} from "../lib/MYSQL.js";

export default class ProductControllers {
    constructor(){
        this.sqlKU = mysqlKu;
    }
    async index(){
        try{

            let sql = `SELECT * FROM products LIMIT 10`;
            const result = await this.sqlKU.query(sql,[]);
            return result
        }catch(e){
            console.log('ERROR SQL',e)
        }
    }
    
}