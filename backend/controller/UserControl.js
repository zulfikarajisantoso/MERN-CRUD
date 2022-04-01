import User from '../models/usermodel.js';

export const getuser = async (req, res) => {

    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}   


export const getId = async (req, res) => {

    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }

}   


export const adduser = async (req, res) => {

    const user  = new User(req.body)

    try{
        const tambah = await user.save();
        res.status(200).json(tambah)
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

}   



export const updateuser = async (req, res) => {

    try{
        const updateuser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateuser)
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

}   

export const deleteuser = async (req, res) => {

    try{
        const deleteuser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteuser)
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

}   