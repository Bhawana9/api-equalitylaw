const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
  },
   company: {
    type: String
  },
  department: {
    type: String
  },
  social: {
    
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  
   experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        require:true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
         
    }
  ],
complaint:[
  {
  description:{
    type:String,
    required:true,
    trim:true
},
department:{
    type:String
},
Commitername:{
    type:String,
    trim:true
},
CommiterPosition:{
    type:String,
    trim:true
},
note:{},
Status:{
    type:String,
    required:true,
    
},
from: {
  type: Date,
  required: true
},
to: {
  type: Date
}
}
],
  
  date: {
    type: Date,
    default: Date.now
  }
});

const Profile=mongoose.model("profile", ProfileSchema);
module.exports = Profile
