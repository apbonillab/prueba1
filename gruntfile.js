module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-include-source');

    grunt.initConfig({

        includeSource: {
            options: {
                basePath: 'public/',
                baseUrl: 'public/',
            },
            dev: {
                files: {
                    'index.html': 'index.html'
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