var chai = require('chai');
var expect = chai.expect;

describe("hello", function() {
    it("mocha", function(done) {
        setTimeout(function() {
            expect(1).eql(2);
            done();
        }, 1000);
        expect(1).eql(1);
    });
});
