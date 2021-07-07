const { expect } = require('chai');
const request = require('request');

describe('Home page', () => {
  it('App on', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal('OK');
        expect(body).to.equals('Welcome to the payment system');
        done();
      }
    });
  });
});