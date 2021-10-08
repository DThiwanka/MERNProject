
import React,{ Component } from 'react';

// import '../css/login.css'



export default class Navigation extends Component{
  
  render(){
      return(
    <nav style={{backgroundColor: 'transparent',marginTop:'10px'}}>
  <form className="form-inline">

  <a href={`/`}>
  <button type="button" className="btn btn-success">Admin Panel</button></a>&nbsp; &nbsp; &nbsp; &nbsp;

  <a href={`/add`}>
  <button type="button" className="btn btn-success">Registration</button></a>&nbsp; &nbsp; &nbsp; &nbsp;

  <a href={`/login`}>
  <button type="button" className="btn btn-success">Login</button></a>&nbsp; &nbsp; &nbsp; &nbsp;



  



    {/* <button class="btn btn-outline-success" type="button">Add Telephones </button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Edit Telephones Numbers</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button> */}

  </form>
      
</nav>
)
     
  }
}
