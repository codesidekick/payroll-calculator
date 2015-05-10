module.exports = function(grunt){
//project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      multiple: {
        command: ['bower install',
          'rm -r libraries/*',
          'mv bower_components/** libraries/',
          'rm -rf bower_components'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

//Default Tasks
  grunt.registerTask('default',['shell']);

//production Tasks
//grunt.registerTask('dist',[..]);

//test tasks
};