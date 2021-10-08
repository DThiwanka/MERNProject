const express = require('express');
const Customers=require('../models/customers');

const router = express.Router();


//added 
router.post('/customer/add', (req,res) =>{

    let newCustomer = new Customers(req.body);

    newCustomer.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Customer added successfully"
        });
    });
});


//read
router.get('/customers', (req,res) =>{
    Customers.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCustomers:posts
        });
    });
});

//get specific Customer

router.get("/customer/:id",(req,res) =>{
    let customerId = req.params.id;

    Customers.findById(customerId,(err,post)=>{
       if(err){
           return res.status(400).json({success:false,err});
       }

       return res.status(200).json({
           success:true,
           post
       });
    });
  
});
//update
router.put('/customer/update/:id',(req,res)=>{
    Customers.findByIdAndUpdate(
        req.params.id,
        {
             $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Customer updated Succesfully",post
            });
        }
    );
});

//delete customer

router.delete('/customer/delete/:id',(req,res)=>{
    Customers.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            messages:"Delete Unsuccesful" ,err
        });
        return res.json({
            message:"Customer Delete Success" ,deletedPost
        });
    });
});

//login function

router.post('/customer/login', async (req, res) => {
    try {
      const {Email, Password} = req.body
      const cus = await Customers.findByCredentials(Email, Password)
    //   const token = await pos.generateAuthToken()
      res.status(200).send({cus: cus})
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  })




module.exports = router;


