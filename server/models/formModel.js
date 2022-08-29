const mongoose = require('mongoose');

const formSchema = {
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
    imageUrl: String
}

const Form = mongoose.model("Form", formSchema);
module.exports = Form;  