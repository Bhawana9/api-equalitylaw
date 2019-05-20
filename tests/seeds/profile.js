const {profile} = require('../../models/profile');
const {ObjectID} = require('mongodb');


const profile= [
  {
    _id: new ObjectID(),
    Company: 'First Test Complaint',
    Department: 'HR and Payroll',
    Status:'Developer',
    twitter:'Test@twitter.com',
    facebook:'Manager@facebook.com',
    linkedin:'test@linkedin.com',
    location:'test',
    
   
  },
  {
    id: new ObjectID(),
    Company: 'First Test Complaint',
    Department: 'HR and Payroll',
    Status:'Developer',
    twitter:'Test@twitter.com',
    facebook:'Manager@facebook.com',
    linkedin:'test@linkedin.com',
    location:'test',
  
  
  },
  {
    id: new ObjectID(),
    Company: 'First Test Complaint',
    Department: 'HR and Payroll',
    Status:'Developer',
    twitter:'Test@twitter.com',
    facebook:'Manager@facebook.com',
    linkedin:'test@linkedin.com',
    location:'test',
  
  }
];

const populateProfile = (done) => {
    profile.remove({}).then(() => {
      return profile.insertMany(profiles);
    }).then(() => done());
}

module.exports = {
  profile,
  populateProfile
}