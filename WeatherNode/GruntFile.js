module.exports = function (grunt) {
    
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                esnext: true
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['tests/**/*-tests.js']
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    
    grunt.registerTask('default', ['jshint', 'mochaTest']);
};
