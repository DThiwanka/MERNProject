const { truncate } = require('fs');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const customer = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },

    Role:{
        type:String,
        required:true
    }

    
});

customer.statics.findByCredentials = async function (Email,Password){
    const cus = await customers.findOne({ Email });
    if(!cus){
        throw new Error('Please Enter Authorized Email')
    }

    if(Password !== cus.Password){
    // const pos = await customers.findOne({ Password });
    // if (!pos) {
      throw new Error("Password is not matched");
    }else{
    return cus;
    }
  };



const customers =  mongoose.model("customers",customer)
module.exports = customers;



