import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Userroute from './routes/Userroute.js'

const app = express();

mongoose.connect('mongodb+srv://aji:slalim@cluster0.qe1mw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("databse connect"));

app.use(cors());
app.use(express.json());
app.use(Userroute)




app.listen(5000, ()=> console.log('app jalan..'))