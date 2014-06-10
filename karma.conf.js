module.exports = function(karma) {
    karma.set({
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        files: ["test/jasmine.spec.js"],
        reporters: ['progress'],
        singleRun: true,
        autoWatch: false,
    });
};
