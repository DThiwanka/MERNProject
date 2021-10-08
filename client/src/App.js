
import React,{ Component } from 'react';
//import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import AddCustomer from './components/AddCustomer';
import deleteCustomer from './components/deleteCustomer';
import editCustomer from './components/editCustomer';
import CustomerDetails from './components/CustomerDetails';
import Navigation from './components/Navigation';
import login from './components/login';


export default class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
      
      <div className ="container">
         <Navigation exact/>
          
         {/* <Route path ="/" exact component={search}></Route> */}
         <Route path ="/" exact component={Homepage}></Route>
         <Route path="/add" component ={AddCustomer}></Route>
         <Route path ="/delete" component={deleteCustomer}></Route>
         <Route path = "/edit/:id" component={editCustomer}></Route>
         <Route path = "/customer/:id" component={CustomerDetails}></Route>
         <Route path = "/login"  exact component={login}></Route>
         
        
       
      </div>
      </BrowserRouter>
    )
  }
}

