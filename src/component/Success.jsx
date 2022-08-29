import React, { useEffect, useState } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DataTable from "react-data-table-component"
import axios from './axios';
import "../App.css"
import {Modal, Button} from "react-bootstrap"
import BootStrapTable from "react-bootstrap-table-next"
import Logout from "../Auth0/Logout.js"



function Success(){
    const [form, setForm] = useState([]);
    const [modelInfo, setModelInfo] = useState([]);
    const [showModel, setShowModel] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    // ([{
    //     firstName: '',
    //     lastName: '',
    //     email:'', 
    //     contact_no:'',
    //     city:'',
    //     state: '', 
    //     linkedinUrl: '', 
    //     CarrerObjective: '',
    //     skills:'',
    //     designation: '',
    //     work_experience:'',
    //     qualification:'',
    //     bio: '',
    //     imageUrl:''
    // }])

    // useEffect(() => {
    //     fetch("/")
    //     .then(res => {
    //         if(res.ok){
    //             return res.json();
    //                      }
    //         })
    //     .then(jsonRes => setForm(jsonRes));
    //     console.log(form);
    //   },[]);

    useEffect(()=>{
        setTimeout(() => {
        axios.get('/')
        .then(response => {
          setForm(response.data)
          console.log(form)
        })
    }, 3000);
      },[]);
      console.log(form)


    // const columns = [
    //     {name: "First Name", selector:(forms)=>forms.firstName, dataTag:"allowRowEvents" },
    //     {name: "Last Name", selector:(form)=>form.lastName },
    //     {name: "Email", selector:(form)=>form.email },
    //     {name: "Contact Number", selector:(form)=>form.contact_no},
    //     {name: "City", selector:(forms)=>forms.city },
    //     {name: "State", selector:(form)=>form.state },
    //     {name: "LinkedinUrl", selector:(form)=>form.linkedinUrl},
    //     {name: "CarrerObjective", selector:(form)=>form.CarrerObjective},
    //     {name: "Skills", selector:(form)=>form.skills},
    //     {name: "Designation", selector:(form)=>form.designation},
    //     {name: "Work Experience", selector:(form)=>form.work_experience},
    //     {name: "Qualification", selector:(form)=>form.qualification},
    //     {name: "bio", selector:(form)=>form.bio},
    //     {name: "imageUrl", selector:(form)=>form.imageUrl}
    // ]

    const columns = [
        {dataField: "firstName", text: "First Name"  },
        {dataField: "lastName", text: "Last Name"   },
        {dataField: "email", text: "Email" },
        {dataField: "contact_no", text: "Contact Number"},
        {dataField: "city", text: "City" },
        
        {dataField: "work_experience", text: "Work Experience"},

    ]
    const customStyles = {
        headCells: {
          style: {
            fontWeight: "bold",
            fontSize:"12px",
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap"
          },
        }
      }

    const rowEvents = {
        onClick: (e,row) => {
            console.log(row)
            setModelInfo(row)
            toggleTrueFalse()
        }
    }

    const toggleTrueFalse = ()=> {
        setShowModel(handleShow)
    }

    const ModelContent = () => {
        return (
            <div className="Model">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>
                        {modelInfo.firstName} {modelInfo.lastName}
                        </div>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                        <li>Email: {modelInfo.email}</li>
                        <li>Contact No: {modelInfo.contact_no}</li>
                        <li>Location: {modelInfo.city},{modelInfo.state}</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Body>
                        <lebel>More Details: </lebel>
                        <ul>
                            <li>
                                Carrer Objective: {modelInfo.CarrerObjective}
                            </li>
                            <li>
                                Skills: {modelInfo.skills}
                            </li>
                            <li>
                                Designation: {
                                    modelInfo.designation
                                }
                            </li>
                            <li>
                                Work Experience: {modelInfo.work_experience}
                            </li>
                            <li>
                                Qualification: {modelInfo.qualification}
                            </li>
                            <li>
                                Bio: {modelInfo.bio}
                            </li>
                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button varient="secondary" onClick={handleClose}>
                            Close
                            </Button>
                    </Modal.Footer>
               

            </Modal>
            </div>
        )
    }
    return (
      
      <MuiThemeProvider>
        <>
            <AppBar title="User Profile" >
            <Logout id="button"/>
                </AppBar>
            {/* {form.map((forms)=>
                <div>
                <h1>{forms.firstName}</h1>
                </div>
                )} */}
            <div className="Data">
            <BootStrapTable
                keyField="firstName"
                data={form}
                columns={columns}
                
            //     pagination
                customStyles={customStyles}
                rowEvents={rowEvents}
             />
             {show? <ModelContent/> :null}
            </div>
        </>
      
      </MuiThemeProvider>
    )
}
export default Success;
