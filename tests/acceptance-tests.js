var app = require('../app.js')
var request = require('supertest')(app)
const assert = require('assert')

describe('college athletes api', function () {
  describe('read and list athlete data', function () {
    it('returns json', function (done) {
      request
        .get('/athletes')
        .expect('Content-Type', 'application/json')
      done()
    })
    it('Returns a list of all athletes', function (done) {
      request
        .get('/athletes')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Returns a list of athletes based on query', function (done) {
      request
        .get('/teams?=""') // what is the param
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Returns an athelete with their details', function (done) {
      request
        .get('/athlete/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
  })
  describe('read and list college data', function () {
    it('returns json', function (done) {
      request
        .get('/colleges')
        .expect('Content-Type', 'application/json')
      done()
    })
    it('Returns a list of all colleges', function (done) {
      request
        .get('/colleges')
        .expect(200)
        .then(response => {
                // assert.  something.
          done()
        }).catch(done)
    })
    it('Returns a list of colleges based on query', function (done) {
      request
        .get('/colleges?=""') // what is the param
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Returns college with their athlete details', function (done) {
      request
        .get('/college/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
  })
  describe('update data in database', function () {
    it('Updates details of an existing athlete record', function (done) {
      request
        .patch('/athlete/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Replaces details of an existing athlete record', function (done) {
      request
        .post('/athlete/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Updates details of an existing college record', function (done) {
      request
        .patch('/college/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Replaces details of an existing college record', function (done) {
      request
        .post('/college/:id')
        .expect(200)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
  })
  describe('add new entry to database', function () {
    it('Creates a new athlete record', function (done) {
      request
        .post('/athlete')
        // what is the ERD- are we sending both?
        .send({ athleteName: 'Jerry Rice', athletePosition: 'Wide Receiver', college: 'Mississippi Valley State', collegeColors: 'Forest Green and White' })
        .expect(201)
        .then(response => {
          assert.equal(response.body, { athleteName: 'Jerry Rice', athletePosition: 'Wide Receiver', college: 'Mississippi Valley State', collegeColors: 'Forest Green and White' })
          done()
        }).catch(done)
    })
    it('Creates a new college record', function (done) {
      request
        .post('/college')
        // what is the ERD- are we sending both?
        .send({ athleteName: 'Jerry Rice', athletePosition: 'Wide Receiver', college: 'Mississippi Valley State', collegeColors: 'Forest Green and White' })
        .expect(201)
        .then(response => {
          assert.equal(response.body, { athleteName: 'Jerry Rice', athletePosition: 'Wide Receiver', college: 'Mississippi Valley State', collegeColors: 'Forest Green and White' })
          done()
        }).catch(done)
      done()
    })
  })
  describe('removes entry from database', function () {
    it('Removes an athlete record', function (done) {
      request
        .delete('/athlete/:id')
        // how do I add the id?
        .expect(204)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
    it('Removes a college record', function (done) {
      request
        .delete('/college/:id')
        .expect(204)
        .then(response => {
        // assert.  something.
          done()
        }).catch(done)
    })
  })
})
