import mongoose from "mongoose";

const formSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    contact_no: Number,
    city: String,
    state: String,
    linkedinUrl: String,
    CarrerObjective: String,
    skills: String,
    designation: String,
    work_experience: String,
    qualification: String,
    bio: String,
    imageUrl: String,
})
const Form = mongoose.model('Form',formSchema); 
export default Form;