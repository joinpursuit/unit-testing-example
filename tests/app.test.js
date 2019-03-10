const request = require('supertest')
const {app,} = require('../app')

test('Passing in empty body returns 400', done => {
    request(app)
      .post('/buyer')
      .send({})
      .catch((response) => {
        expect(response.status).toBe(400);
        done();
      });
})

test('Passing in valid body returns 204', done => {
    request(app)
      .post('/buyer')
      .send({
        'name': 'a',
        'email': 'b',
        'password': 'c',
        'phone_number': 'd',
      })
      .then((response) => {
        expect(response.status).toBe(204);
        done();
      });
})
