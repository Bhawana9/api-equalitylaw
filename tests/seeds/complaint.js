const {complaint} = require('../../models/profile');
const {ObjectID} = require('mongodb');


const complaints= [
  {
    _id: new ObjectID(),
    Description: 'First Test Complaint',
    Department: 'HR and Payroll',
    Status:'Open',
    CommitterName:'Test',
    CommitterPosition:'Manager',
    from:'12-02-2015',
    to:'12-03-2019',
    note:'nothing',
   
  },
  {
    id: new ObjectID(),
    Description: 'Second Complaint',
    Department: 'HR and Payroll',
    Status:'Open',
    CommitterName:'Test',
    CommitterPosition:'Manager',
    from:'12-02-2015',
    to:'12-03-2015',
    note:'nothing',
  
  
  },
  {
    id: new ObjectID(),
    Description: 'Third Complaint',
    Department: 'HR and Payroll',
    Status:'Open',
    CommitterName:'Test',
    CommitterPosition:'Manager',
    from:'12-02-2015',
    to:'12-03-2017',
    note:'nothing'
  
  }
];

const populateComplaints = (done) => {
    complaint.remove({}).then(() => {
      return complaint.insertMany(complaints);
    }).then(() => done());
}

module.exports = {
  complaints,
  populateComplaints
}