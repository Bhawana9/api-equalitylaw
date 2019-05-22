const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../models');
const {profile} = require('../models/Profile');
// const {User} = require('./../../backend/db/models/user');
const {profile, populateProfile} = require('./seeds/profile');

const {userOneToken, populateUsers} = require('./seeds/user')

beforeEach(populateProfile);
beforeEach(populateUsers);

describe("POST /api/profile", () => {
  it("should create a new profile", (done) => {
    let description = 'Test profile';
    let profile = {
        Company: 'First Test Complaint',
        Department: 'HR and Payroll',
        Status:'Developer',
        twitter:'Test@twitter.com',
        facebook:'Manager@facebook.com',
        linkedin:'test@linkedin.com',
        location:'test',
    }

    request(app)
      .post('/api/profiles')
      .set('token', userOneToken)
      .send(profile)
      .expect(200)
      .expect((res) => {
        expect(res.body.company).toBe(company);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        profile.find().then((profiles) => {
          expect(profiles.length).toBe(4);
          expect(profiles[3].description).toBe(description);
          done();
        }).catch((e) => done(e));
      });
  });

  it("should not create profile with invalid body data", (done) => {
    request(app)
    .post('/api/profiles')
    .set('token', userOneToken)
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err)
      }

      profile.find().then((profiles) => {
        expect(profiles.length).toBe(3);
        done();
      }).catch((e) => done(e));
    })
  });

});

describe("GET /api/profile/me", () => {
  it("should return current user profile", (done) => {
    request(app)
      .get("/api/profiles")
      .set('token', userOneToken)
      .expect(200)
      .expect((res) => {
        expect(res.body.profiles.length).toBe(2);
      })
      .end(done)
  });
});

describe("GET /api/profile/user/:id", () => {
  it("should return a specific profile", (done) => {
    request(app)
    .get(`/api/profiles/user/${profiles[0]._id.toHexString()}`)
    .set('token', userOneToken)
    .expect(200)
    .expect((res) => {
      expect(res.body.description).toBe(profiles[0].description)
    })
    .end(done)
  });
  it("should return 404 if profile is not found", (done) => {
    let id = new ObjectID()
    request(app)
    .get(`/api/profiles/${id.toHexString()}`)
    .set('token', userOneToken)
    .expect(404)
    .end(done)
  });
  it("should return 404 from non-object ids", (done) => {
    let id = new ObjectID()
    request(app)
    .get('/api/profiles/123')
    .set('token', userOneToken)
    .expect(404)
    .end(done)
  });


});

describe('DELETE /api/profile', () => {
  it('should remove a profile', (done) => {
    var hexId = profiles[0]._id.toHexString();

    request(app)
      .delete(`/api/profile/${hexId}`)
      .set('token', userOneToken)
      .expect(200)
      .expect((res) => {
        expect(res.body.profile._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        profile.findById(hexId).then((profile) => {
          expect(profile).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return 404 if profile not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/api/profile/${hexId}`)
      .set('token', userOneToken)
      .expect(404)
      .end(done);
  });

  it('should return 404 if object id is invalid', (done) => {
    request(app)
      .delete('/api/profile/123abc')
      .set('token', userOneToken)
      .expect(404)
      .end(done);
  });
});

describe("PUT /api/profiles/:id", () => {
  it("should update the profile", (done) => {
    var hexId = profiles[0]._id.toHexString();
    let description = 'Test profile';
    let profiles = {
        Company: 'First Test Complaint',
        Department: 'HR and Payroll',
        Status:'Developer',
        twitter:'Test@twitter.com',
        facebook:'Manager@facebook.com',
        linkedin:'test@linkedin.com',
        location:'test',
    }

    request(app)
      .put(`/api/profiles/${hexId}`)
      .set('token', userOneToken)
      .send({
        description
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.profile.description).toBe(description);
      })
      .end(done)
  });
});