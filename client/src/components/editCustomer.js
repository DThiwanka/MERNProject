
import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default class editCustomer extends Component {
 

    constructor(props) {
        super(props);
        this.state={
            FirstName:"",
            LastName:"",
            Address:"",
            Email:"",
            Password:"",
            Role:"",
   
        }
    }



    handleInputChange = (e) => {
        const {name,value} = e.target;
 

        this.setState({
            ...this.state,
            [name]: value
 

        })
    }
 

    onSubmit = (e) => {
 

        e.preventDefault();
        const id = this.props.match.params.id;
 

        const{FirstName, LastName, Address, Email, Password, Role} = this.state
        const data ={
            FirstName:FirstName,
            LastName:LastName,
            Address:Address,
            Email:Email,
            Password:Password,
            Role:Role,
            
        }
        console.log(data)
 

    axios.put(`/customer/update/${id}`,data).then((res) => {
        if(res.data.success){
          //  alert("Customer Updated Sucessfully.....!")
          toast.info('Customer Updated Successfuly',{position:toast.POSITION.TOP_CENTER})
            this.setState(
                {
                  FirstName:"",
                  LastName:"",
                  Address:"",
                  Email:"",
                  Password:"",
                  Role:"",
                }
            )
        }
    })
 

    }
 

    componentDidMount() {
 

        const id = this.props.match.params.id;
 

        axios.get(`/customer/${id}`).then((res) => {
 

            if(res.data.success){
                this.setState({ 
               
                  FirstName:res.data.post.FirstName,
                  LastName:res.data.post.LastName,
                  Address:res.data.post.Address,
                  Email:res.data.post.Email,
                  Password:res.data.post.Password,
                  Role:res.data.post.Role
                });
 

                console.log(res.data.post);
 

            }
        });
 

    }



    render() {
        return (
          <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal"> EDIT CUSTOMERS</h1>
            <form className="needs-validation" noValidate>
               <div className="form-group"  style={{marginBottom:'15px'}}>
                 <label className="text-white" style={{marginBottom:'5px'}}> First Name </label>
                 <input type="text"
                 className="form-control"
                 name="FirstName"
                 placeholder="Enter FirstName"
                 value={this.state.FirstName}
                 onChange={this.handleInputChange}/>
                 </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label className="text-white" style={{marginBotton:'5px'}}>Last Name</label>
                    <input type ="text"
                    className="form-control"
                    name="LastName"
                    placeholder="Enter LastName"
                    value={this.state.LastName}
                    onChange={this.handleInputChange}/>
                </div>
                
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label className="text-white" style={{marginBotton:'5px'}}>Address</label>
                    <input type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Enter Address"
                    value={this.state.Address}
                    onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label className="text-white" style={{marginBotton:'5px'}}>Email</label>
                    <input type="email"
                    className="form-control"
                    name="Email"
                    placeholder="Enter Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    value={this.state.Email}
                    onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label className="text-white" style={{marginBotton:'5px'}}>Password</label>
                    <input type="text"
                    className="form-control"
                    name="Password"
                    placeholder="Enter Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label className="text-white" style={{marginBotton:'5px'}}>Role</label>
                    <input type="text"
                    className="form-control"
                    name="Role"
                    placeholder="Enter Role (Admin, Customer, Employee)"
                    value={this.state.Role}
                    onChange={this.handleInputChange}/>
                </div>
                   
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                 &nbsp; Update
                </button>&nbsp;&nbsp;

                
                  
             </form>

             <a href={`/home`}>
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                <i className="fa fa-home"></i>
                 &nbsp; Home
                </button></a>
             </div>
            );
          }
        }      