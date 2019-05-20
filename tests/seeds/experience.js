const {experience} = require('../../models/profile');
const {ObjectID} = require('mongodb');


const experience= [
  {
    _id: new ObjectID(),
    Title: 'First Test Experience',
    Company: 'HR and Payroll',
    Locatio:'Open',
    from:'12-02-2015',
    to:'12-03-2019',
    
   
  },
  {
    _id: new ObjectID(),
    Title: 'First Second Experience',
    Company: 'HR and Payroll',
    Location:'USA',
    from:'12-02-2015',
    to:'12-03-2019',
  
  
  },
  {_id: new ObjectID(),
    Title: 'First Third Experience',
    Company: 'HR and Payroll',
    Location:'Test',
    from:'12-02-2015',
    to:'12-03-2019',
  
  }
];

const populateExperience = (done) => {
    experience.remove({}).then(() => {
      return experience.insertMany(experience);
    }).then(() => done());
}

module.exports = {
  experience,
  populateExperience
}