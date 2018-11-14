const request = require('supertest');
const app = require ('../src/app');
const services = require ('../src/help');

test('should pass integration tests', (done) => {
  request(app)
    .get('/services/list')
    .expect(200, services)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});