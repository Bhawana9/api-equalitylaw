const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../app');
const {complaint} = require('../../models/Profile');

const {complaints, populateComplaints} = require('./seeds/complaint');

const {userOneToken, populateUsers} = require('./seeds/user')

beforeEach(populateComplaints);
beforeEach(populateUsers);

//Create complaint
describe("POST /api/profile/complaints", () => {
  it("should create a new complaint", (done) => {
    let description = 'Test complaint';
    let complaint = {
        Description: 'First Test Complaint',
        Department: 'HR and Payroll',
        Status:'Open',
        CommitterName:'Test',
        CommitterPosition:'Manager',
        from:'12-02-2015',
        to:'12-03-2019',
        note:'nothing',
    }

    request(app)
      .post('/api/profile/complaints')
      .set('token', userOneToken)
      .send(complaint)
      .expect(200)
      .expect((res) => {
        expect(res.body.description).toBe(description);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        complaint.find().then((complaints) => {
          expect(complaints.length).toBe(4);
          expect(complaints[3].description).toBe(description);
          done();
        }).catch((e) => done(e));
      });
  });

  it("should not create complaint with invalid body data", (done) => {
    request(app)
    .post('/api/profile/complaints')
    .set('token', userOneToken)
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err)
      }

      complaint.find().then((complaints) => {
        expect(complaints.length).toBe(3);
        done();
      }).catch((e) => done(e));
    })
  });

});

describe("GET /api/profile/complaints", () => {
  it("should return all complaints", (done) => {
    request(app)
      .get("/api/profile/complaints")
      .set('token', userOneToken)
      .expect(200)
      .expect((res) => {
        expect(res.body.complaints.length).toBe(2);
      })
      .end(done)
  });
});



  
