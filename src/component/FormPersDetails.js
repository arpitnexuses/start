import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Logout from "../Auth0/Logout.js"
import "../App.css"
export class FormPersDetails extends Component {

    

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };


  render() {
    const { values, handleChange } = this.props; 
    
    return ( 
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Details">
           
            <Logout id="button"/>
     
        </AppBar>
        <TextField
            hintText="Carrer Objective"
            floatingLabelText="Carrer Objective"
            onChange={handleChange('CarrerObjective')}
            defaultValue={values.CarrerObjective}
            style = {{width: 400}}
            
            />
            <br/>
         <TextField
         
            hintText="Skills"
            floatingLabelText="Skills"
            onChange={handleChange('skills')}
            defaultValue={values.skills}
            style = {{width: 400}}
            />
            
            <br/>
           <TextField
            hintText="Designation"
            floatingLabelText="Designation"
            onChange={handleChange('designation')}
            defaultValue={values.designation}
            style = {{width: 400}}
            />
            <br/>
            <TextField
            hintText="Work Experience"
            floatingLabelText="Work Experience"
            onChange={handleChange('work_experience')}
            defaultValue={values.work_experience}
            style = {{width: 400}}
            />
            <br/>
            <TextField
            hintText="Qualification"
            floatingLabelText="Qualification"
            onChange={handleChange('qualification')}
            defaultValue={values.qualification}
            style = {{width: 400}}
            />
            <br/>                                                 
            <TextField
            hintText="Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            style = {{width: 400}}
            />
            <br/>
            <RaisedButton
                label="back"
                primary={true}
                style = {styles.button}
                onClick={this.back}
                />
            <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
      </React.Fragment>
    </MuiThemeProvider>
    )
  }
}
  const styles = {
    button: {
        margin: 15
    }
  }


export default FormPersDetails;