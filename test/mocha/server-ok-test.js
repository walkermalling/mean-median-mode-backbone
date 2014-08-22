require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('Server', function(){

  it('should respond with 200 status on base uri', function(done){
    chai.request('http://localhost:3000')
      .get('/')
      .res(function(res){
        expect(res).to.have.status(200);
        done();
      });
  });

});
