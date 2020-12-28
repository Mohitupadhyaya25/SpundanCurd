const mongoose = require('mongoose');
var EmpSchema = new mongoose.Schema({ 

    fullName :{
        type : String, 
        required : 'This Field is required.'
    }, 
    salary : {
        type : String,
        required : true
    },
    age : {
     
     type : Date,
     required : true
    }

});

mongoose.model('Employee', EmpSchema);