import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail.js';
import FormPersDetails from './FormPersDetails.js';
import Confirm from './Confirm.js';
import Success from './Success.jsx';

export class Userform extends Component {
  state = {
        step: 1, 
        firstName: '',
        lastName: '',
        email:'', 
        contact_no:'',
        city:'',
        state: '', 
        linkedinUrl: '', 
        CarrerObjective: '',
        skills:'',
        designation: '',
        work_experience:'',
        qualification:'',
        bio: '',
        imageUrl:''
  };

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, contact_no, city, state, linkedinUrl, CarrerObjective, skills, designation, work_experience, qualification, bio, imageUrl  } = this.state;
    const values = { firstName, lastName, email, contact_no, city, state, linkedinUrl, CarrerObjective, skills, designation, work_experience, qualification, bio, imageUrl  };
    
    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            
          />
          
        );
      case 2:
        return (
            <>
          <FormPersDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </>
        
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
     
        );
      case 4:
        return <Success/>

    }
  }
}

export default Userform;