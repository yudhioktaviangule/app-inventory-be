import mysql from "mysql";
import util from 'util';
import {myenv} from "./env.js";
class Mys{
    constructor(){
        this.mysqli = mysql.createConnection(myenv);
        this.queryx = util.promisify(this.mysqli.query).bind(this.mysqli)
    }
    async query(sql,param){
        return await this.queryx(sql,param);
    }

}
var mysqlKu = new Mys();

export {mysqlKu};