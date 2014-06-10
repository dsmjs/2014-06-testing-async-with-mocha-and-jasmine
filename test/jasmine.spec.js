describe("hello", function() {
    it("jasmine", function(done) {
        setTimeout(function() {
            expect(1).toBe(2);
            done();
        }, 1000);
        expect(1).toBe(1);
    });
});
