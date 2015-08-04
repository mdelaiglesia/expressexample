/**
 * Created by matiasdelaiglesia on 3/8/15.
 */
var assert = require("assert");
var expect = require('chai').expect;
var request = require('request');
var server = require('../app.js');

describe('projects', function () {
  before(function () {
    server.listen(3000);
  });

  it('should give a 404 error code if the resource is not found', function () {
    request.get('http://localhost:3000/notavalidresource', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      expect(res.body).to.equal('wrong header');
      done();
    });
  });

  it('should give a 200 error code if the resource is found', function () {
    request.get('http://localhost:3000/projects', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('hello project!');
      done();
    });
  });

});
