import ReactToPrint from 'react-to-print';
import React,{ Component } from 'react';
import axios from 'axios';





export default class Homepage extends Component{
  constructor(props){
     super(props);
    this.state={
      customers:[]
    };
  }
  componentDidMount(){
     this.retrieveCustomers();

  }
  retrieveCustomers(){
    axios.get("/customers").then(res =>{
        if(res.data.success){
          this.setState({
            customers:res.data.existingCustomers
          });
            console.log(this.state.customers);
        }
    });
  }

  // onDelete = (id) =>{
  //   axios.delete(`/customer/delete/${id}`).then((res) =>{
  //       alert("Delete Successfully");
  //       this.retrieveCustomers();
  //   })
  // }


  filterData(customers,searchKey){


    const result = customers.filter((post) =>
    
    post.Role.toLowerCase().includes(searchKey))
    
    this.setState({customers:result});
    }



  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
    axios.get("/customers").then(res =>{

  if(res.data.success){



  this.filterData(res.data.existingCustomers, searchKey);

  }

  });

  }


  render(){
    return(
      <div className ="container">

      
                

                <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                <h1 className = "display-4 text-white"> Admin Panel - Customers </h1>

                </div>
                <div className="col-lg-3 mt-auto p-2 mb-2">
                    <input
                        className="form-control align-self-end"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        //onChange="{this.handleSearchArea}"
                        onChange={this.handleSearchArea}
                        >
                            </input>
                    </div>
                    </div>
        
        
         <table className = "table table-striped table-dark table-responsive table-hover" ref={(el) => (this.componentRef = el)}> 
            <thead>
              
              <tr> 
                <th scope = "col"># </th>
                <th scope = "col"> </th>
                <th scope = "col">FirstName </th>
                <th scope = "col">LastName </th>
                <th scope = "col">Address </th>
                <th scope = "col">Email </th>
                <th scope = "col">Role </th>
                {/* <th scope = "col">Password </th> */}
                <th scope = "col">Action </th>

              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customers,index) =>(
                <tr>
                  <th scope = "row"> {index +1}</th>
                  <td>
                      
                  </td>
                  <td><a href={`/customer/${customers._id}`} className= "text-warning" style={{ textDecoration:'none'}}>
                            {customers.FirstName}
                            </a></td>
                  <td>{customers.LastName}</td>
                  <td>{customers.Address}</td>
                  <td>{customers.Email}</td>
                  <td>{customers.Role}</td>
                  {/* <td>{customers.Password}</td> */}
                  <td>
                    <a className="btn btn-warning" href={`/edit/${customers._id}`}> 
                      <i className ="fas fa-edit"></i> &nbsp;update
                    </a>
                    &nbsp;
                    {/* <a className="btn btn-danger" href="/delete">
                                <i className="fa fa-trash"></i>&nbsp;Delete
                            </a> */}

                    </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className ="btn btn-success"><a href ="/add"style ={{textDecoration:'none',color:'white'}}><i className="fa fa-plus-square" aria-hidden="true"></i> &nbsp; Add New customers</a>
          </button>
          
          &nbsp;&nbsp;&nbsp;

          {/* <button className ="btn btn-warning">  <i className ="fa fa-download" aria-hidden="true"></i> &nbsp;Generate Report
          </button> */}
          <ReactToPrint
                          trigger={() => <button className="generateReport1 btn btn-warning" type="button"><i className="fa fa-download" aria-hidden="true"></i> Generate Report
                          </button>}
                          content={() => this.componentRef}/>

          &nbsp;&nbsp;&nbsp;

          <button className ="btn btn-danger"><a href ="/delete"style ={{textDecoration:'none',color:'white'}}><i className="fa fa-minus-square" aria-hidden="true"></i> &nbsp; Deleted Customers</a>

          </button>

       
      </div>
    )
  }
}

