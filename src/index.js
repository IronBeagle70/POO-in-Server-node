//"type":"module" in package.json to use import
import express from "express";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";
import morgan from "morgan";

import indexRoutes from './routes/index.js';

//starting express
const app=express();

//saving and defining the path
const __dirname=dirname(fileURLToPath(import.meta.url));

//config
app.set('port', process.env.PORT || 3000);
app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');

app.use(indexRoutes);
app.use(morgan('dev')); //using morgan
app.use(express.static(join(__dirname,'public'))); //using public files


//server on
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});