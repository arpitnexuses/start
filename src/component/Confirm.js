import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import "../../src/App.css"
import axios from "axios"
import Logout from "../Auth0/Logout"


export class Confirm extends Component {



    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        this.props.nextStep();
        console.log(values);
        const newForm = {
            firstName: values.firstName, 
            lastName: values.lastName, 
            email: values.email, 
            contact_no: values.contact_no, 
            city: values.city, 
            state: values.state, 
            linkedinUrl: values.linkedinUrl, 
            CarrerObjective: values.CarrerObjective, 
            skills: values.skills, 
            designation: values.designation, 
            work_experience: values.work_experience, 
            qualification: values.qualification, 
            bio: values.bio, 
            imageUrl: values.imageUrl}
        
        axios.post('http://localhost:3013', newForm)
    }
    

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const {
            values:  { firstName, lastName, email, contact_no, city, state, linkedinUrl, CarrerObjective, skills, designation, work_experience, qualification, bio, imageUrl }
         }= this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" >
                        <Logout id="button"/>
                    </AppBar>
                    <List>
                        <ListItem
                             primaryText="First Name" secondaryText={firstName} />
                        <ListItem
                             primaryText="Last Name" secondaryText={lastName} />
                        
                        <ListItem
                            primaryText="Email" secondaryText={email} />
                        
                        <ListItem
                          primaryText="Contact Number" secondaryText={contact_no} />
                        
                        <ListItem
                            primaryText="City" secondaryText={city} />
                        
                        <ListItem
                            primaryText="state" secondaryText={state} />
                        
                        <ListItem
                            primaryText="imageUrl" secondaryText={imageUrl} />
                    
                        <ListItem
                            primaryText="Linkedin Url" secondaryText={linkedinUrl} />
                    
                        <ListItem
                            primaryText="Carrer Objective" secondaryText={CarrerObjective} />
                        <ListItem
                            primaryText="skills" secondaryText={skills} />
                        
                        <ListItem
                            primaryText="Designation" secondaryText={designation} />
                        
                        <ListItem
                            primaryText="Work Experience" secondaryText={work_experience} />
                        
                        <ListItem
                            primaryText="Qualification" secondaryText={qualification} />
                        
                        <ListItem
                            primaryText="Bio" secondaryText={bio} />
                    </List>
                    <br />

                    <RaisedButton
                        primary={true}
                        variant="contained"
                        onClick={this.back}
                    >Back</RaisedButton>

                    <RaisedButton
                        className='buttoncontinue'
                        primary={true}
                        variant="contained"
                        onClick={this.continue}
                        
                    >Confirm & Continue</RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Confirm;