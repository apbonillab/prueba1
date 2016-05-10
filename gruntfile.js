module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-include-source');
    grunt.initConfig({
        //auto include files
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