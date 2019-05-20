const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../app');
const {experience} = require('../../models/profile');

const {experiences, populateExperience} = require('./seeds/experience');

const {userOneToken, populateUsers} = require('./seeds/user')

beforeEach(populateExperience);
beforeEach(populateUsers);

//Create experience
describe("POST /api/profile/experience", () => {
  it("should create a new experience", (done) => {
    let description = 'Test experience';
    let experience = {
        Title: 'First Second Experience',
    Company: 'HR and Payroll',
    Location:'USA',
    from:'12-02-2015',
    to:'12-03-2019',
    }

    request(app)
      .post('/api/profile/experience')
      .set('token', userOneToken)
      .send(experience)
      .expect(200)
      .expect((res) => {
        expect(res.body.description).toBe(description);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        experience.find().then((experience) => {
          expect(experiences.length).toBe(4);
          expect(experiences[3].description).toBe(description);
          done();
        }).catch((e) => done(e));
      });
  });

  it("should not create experience with invalid body data", (done) => {
    request(app)
    .post('/api/profile/experience')
    .set('token', userOneToken)
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err)
      }

      experience.find().then((experience) => {
        expect(experience.length).toBe(3);
        done();
      }).catch((e) => done(e));
    })
  });

});

describe('DELETE /api/profile/experiences/:id', () => {
    it('should remove a experience', (done) => {
      var hexId = experiences[0]._id.toHexString();
  
      request(app)
        .delete(`/api/profile/experiences/${hexId}`)
        .set('token', userOneToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.experience._id).toBe(hexId);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          experience.findById(hexId).then((experience) => {
            expect(experience).toNotExist();
            done();
          }).catch((e) => done(e));
        });
    });
  
    it('should return 404 if experience not found', (done) => {
      var hexId = new ObjectID().toHexString();
  
      request(app)
        .delete(`/api/profile/experiences/${hexId}`)
        .set('token', userOneToken)
        .expect(404)
        .end(done);
    });
  
    it('should return 404 if object id is invalid', (done) => {
      request(app)
        .delete('/api/expenses/123abc')
        .set('token', userOneToken)
        .expect(404)
        .end(done);
    });
  });



  
