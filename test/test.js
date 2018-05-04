// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done); 
  });
});

function sum(a, b) {
	return a + b;
}

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});