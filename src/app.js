import express from "express";
import bodyParser from 'body-parser';
import LoginController from "./controller/LoginController.js";
import ProductControllers from './controller/ProductControllers.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = 8080;

app.get('/products', async(req,resp)=>{
    const pc = new ProductControllers();
    const result = await pc.index();
    resp.json(result);
});
app.post('/login',async (request,response)=>{
    console.log(request.params);
    const login = new LoginController();
    const result = await login.login(request.body.email,request.body.password)
    response.json(result);
});

app.listen(port,()=>{
    console.log("SERVER RUNNING");
})
