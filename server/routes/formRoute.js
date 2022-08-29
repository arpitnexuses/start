const express = require("express");
const router = express.Router();
const Form = require("../models/formModel")

router.route("/").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contact_no = req.body.contact_no;
    const city = req.body.city;
    const state = req.body.state;
    const linkedinUrl = req.body.linkedinUrl;
    const CarrerObjective = req.body.CarrerObjective;
    const skills = req.body.skills;
    const designation = req.body.designation;
    const work_experience = req.body.work_experience;
    const qualification = req.body.qualification;
    const bio = req.body.bio;
    const imageUrl = req.body.imageUrl;
    const newForm = new Form({
        firstName,
        lastName,
        email,
        contact_no,
        city,
        state,
        linkedinUrl,
        CarrerObjective,
        skills,
        designation,
        work_experience,
        qualification,
        bio,
        imageUrl
    });

    newForm.save();

})

module.exports = router; 
