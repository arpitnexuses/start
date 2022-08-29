import PostMessage from "../models/PostMessage.js"
// import mongoose from 'mongoose';

export const getForm = async (req, res) => {
    try {
        const Form = await PostMessage.find().sort({_id: -1});
        res.status(200).json(Form);
        }
    
    catch (error) {
        res.status(404).json({message: error.message})
    }
} 