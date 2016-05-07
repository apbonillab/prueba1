module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-include-source');

    grunt.initConfig({

        includeSource: {
            options: {
                basePath: 'public/',
            },
            dev: {
                files: {
                    'public/index.html': 'public/index.html'
                }
            }

        },
        default: {
            task: {

            }
        }
    });


    grunt.registerTask('default', ['includeSource:dev']);

};