import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import "../../src/App.css"
import Logout from "../Auth0/Logout.js"
import "../App.css"

export class FormUserDetail extends Component {
 
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }


  render() {
    const { values, handleChange } = this.props; 

    return ( 
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details">
        
            <Logout id="button"/>
         
        </AppBar>

    
        <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            style = {{width: 400}}
            
            />
            <br/>
         <TextField
         className="TextField"
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            style = {{width: 400}}
            />
            <br/>
           <TextField
            hintText="Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            style = {{width: 400}}
            />
            <br/>
            <TextField
            hintText="Contact Number"
            floatingLabelText="Enter your contact number"
           
            onChange={handleChange('contact_no')}
            defaultValue={values.contact_no}
            style = {{width: 400}}
            />
            <br/>
            <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            style = {{width: 400}}
            />
            <br/>                                                 
            <TextField
            hintText="Enter Your State"
            floatingLabelText="State"
            onChange={handleChange('state')}
            defaultValue={values.state}
            style = {{width: 400}}
            />
            <br/>
            <TextField
            hintText="Enter Your Linkedin Url"
            floatingLabelText="Linkdin Url"
            onChange={handleChange('linkedinUrl')}
            defaultValue={values.linkedinUrl}
            style = {{width: 400}}
            />
            <br/>
            <input
            accept="image/*" 
            id="raised-button-file"
            multiple
            type="file"
            label='Profile picture'
            style = {{width: 400}}
          
            defaultValue={values.imageUrl}
            />
<br/>
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


export default FormUserDetail;