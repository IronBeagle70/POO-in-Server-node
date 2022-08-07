import { Router } from 'express';
const router=Router();

//GET
router.get('/',(req,res)=>res.render('index.ejs',{title:'POO on server'}));

export default router;