import express  from "express";
import { getuser, getId, adduser, updateuser, deleteuser } from "../controller/UserControl.js";


const router = express.Router();

router.get('/users', getuser );
router.get('/users/:id', getId );
router.post('/users', adduser );
router.patch('/users/:id', updateuser );
router.delete('/users/:id', deleteuser );


export default router;

