import React,{ Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';
import "./profile.css";



export default class CustomerDetails extends Component{
    constructor(props){
        super(props);

        this.state={
           customers:{}
        }
    }
    
  componentDidMount(){
     const id = this.props.match.params.id;

    axios.get(`/customer/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              customers:res.data.post
           });
            console.log(this.state.customers);
        }
     });
    } 
  render() {
      const{FirstName, LastName, Address, Email, Role} = this.state.customers;
    return(


      <div className="page-content page-container" id="page-content">
          
    <div className="padding">
        <div className="row container d-flex justify-content-center"  ref={(el) => (this.componentRef = el)}>
            <div className="col-xxl-10 col-md-20">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="NoImage"/> </div>
                                <h6 className="f-w-800">User Details</h6>
                                <p>{FirstName} {LastName}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h3 className="m-b-20 p-b-5 b-b-default f-w-1200">Information :</h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Full Name</p>
                                        <h5 className="text-muted f-w-400">{FirstName} {LastName}</h5>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Address</p>
                                        <h5 className="text-muted f-w-400">{Address}</h5>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Role</p>
                                        <h5 className="text-muted f-w-400">{Role}</h5>
                                    </div>
                                </div>
                                <h3 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Details :</h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Full Name</p>
                                        <h5 className="text-muted f-w-400">{FirstName} {LastName}</h5>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h5 className="text-muted f-w-400">{Email}</h5>
                                    </div>
                                </div>
                                
                                <br/>
                                
                                <ReactToPrint
                          trigger={() => <button className="generateReport1 btn btn-warning" type="button"><i className="fa fa-download" aria-hidden="true"></i> Generate Report
                          </button>}
                          content={() => this.componentRef}/>

                          &nbsp;&nbsp;&nbsp;
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    {/* <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                         

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    )
    }
  }
