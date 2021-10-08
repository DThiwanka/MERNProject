import React,{ useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './profile.css'
//const validator = require("validator");
// import validate from './validateInfo';
// import useForm from './useForm';
// import ScriptTag from 'react-script-tag';

toast.configure()


export default function AddCustomer(){

  const [FirstName,setfname] = useState("");
  const [LastName,setlname] = useState("");
  const [Address,setaddress] = useState("");
  const [Email,setemail] = useState("");
  const [Password2,setpassword2] = useState("");
  const [Password,setpassword] = useState("");
  const [Role,setrole] = useState("");

  const sendData = async (e)=>{
    e.preventDefault();

    let data={
      FirstName:FirstName,
      LastName:LastName,
      Address:Address,
      Email:Email,
      Password2:Password2,
      Password:Password,
      Role:Role,
    }

    if (Password === Password2){
      axios.post("/customer/add",data)
      .then(()=>{
        toast.success('Registration is Success',{position:toast.POSITION.TOP_LEFT})
      }).catch((err)=>{
        toast.warning('Registration Error Recheck All Data',{position:toast.POSITION.TOP_LEFT});
      })
    }else{
      toast.warning('Password is Invalid',{position:toast.POSITION.TOP_LEFT})
    }

    setfname("");
    setlname("");
    setaddress("");
    setemail("");
    setpassword("");
    setpassword2("");
    setrole("");

  }
  
  

  return(

    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="display-4 text-white text-center">Registration Area</h1>
        <form className="needs-validation" onSubmit={sendData}>
           <div className="form-group"  style={{marginBottom:'5px'}}>
             <h5>         
             <label style={{marginBottom:'5px'}} className="text-white"> First Name </label>
             </h5>
             <input type="text" 
             id="Fname"
             placeholder="Please Enter First Name"
             name="FirstName"
             pattern="[a-z,A-Z]{4,20}"
             title="Please Enter First Name without numbers"
             className="form-control"
             onChange={(e) => {
               setfname(e.target.value)}}
               required/>
             </div>

            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Last Name</label>
                </h5>
                <input type ="text"
                placeholder="Please Enter Last Name"
                id="LastName"
                name="LastName"
                pattern="[a-z]{4,20}"
                title="Please Enter Last Name without numbers"
                className="form-control"
                onChange={(e)=>{
                  setlname(e.target.value)}}
                  required/>
            </div>
            
            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Address</label>
                </h5>
                <input type="text"
                className="form-control"
                placeholder="Please Enter Your Address"
                name="Address"
                id="Address"
                onChange={(e)=>{
                  setaddress(e.target.value)}}
                required/>
            </div>

            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Email</label>
                </h5>
                <input type="email"
                id="Email"
                name="Email"
                placeholder="Please Enter Valid Email Address"
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={(e)=>{
                  setemail(e.target.value)}}
                  required/>
            </div>

            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Password</label>
                </h5>
                <input type="text" 
                id="Password"
                className="form-control"
                autoComplete="off"
                placeholder="Please Enter Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                name="Password"
                onChange={(e)=>{
                  setpassword(e.target.value)}}
                  required/>
            </div>
            {/* //Password2 Newly Added */}
            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Retype Password</label>
                </h5>
                <input type="text"
                id="Password2" 
                placeholder="Retype Password"
                className="form-control"
                name="Password2"
                autoComplete="off"
                onChange={(e)=>{
                  setpassword2(e.target.value)}}
                required/>
            </div>
            {/* /////////////////// */}

            <div className="form-group" style={{marginBottom:'5px'}}>
                <h5>
                <label style={{marginBottom:'5px'}}className="text-white">Role</label>
                </h5>
                <input type ="text"
                className="form-control form-control-lg"
                placeholder="What Is Your Role? (Admin, Employee, Customer)"
                name="Role"

                id="Role"
                // placeholder="Enter Role (Admin, Employee, Customer)"
                onChange={(e)=>{
                  setrole(e.target.value)}}
                required/>
            </div>
            <br/>
            <button className="btn btn-success" type="submit" style={{marginTop:'5px'}}>
            <i className="far fa-check-square"></i>
             &nbsp; REGISTER
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger" type="Reset" style={{marginTop:'5px'}}>
            <i className="far fa fa-ban"></i>
             &nbsp; RESET
            </button>
             
         </form>
         <br/> <br/> <br/>
         <footer className="bg-dark text-center text-lg-end text-white">
  
        <div className="text-center p-8" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-light" href="/add">Registration Area</a>
        </div>

        </footer>
         </div>
         
        
    )
  
}

