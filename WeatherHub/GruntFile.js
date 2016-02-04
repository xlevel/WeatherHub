module.exports = function (grunt) {
    
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/app.js', 'src/data/*.js', 'src/Models/*.js', 'src/web-services/*.js', 'test/**/*.js'],
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
        },
        sass: {
            dist: {
                files: {
                    'src/static/main.css' : 'src/static/sass/main.scss'                    
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-sass');
    
    
    grunt.registerTask('default', ['jshint', 'mochaTest', 'sass']);
};
