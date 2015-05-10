module.exports = function(grunt){
//project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      multiple: {
        command: ['bower install',
          'rm -r libraries/*',
          'mv bower_components/** libraries/',
          'rm -rf bower_components',
          'rm -rf dist/js/lib && mkdir dist/js/lib',
          'mv libraries/angular2/index.js dist/js/lib/angular2.js',
          'tsd query angular2 --action install',
          'mv typings/angular2 src/ts/angular2',
          'rm -rf typings'
        ].join('&&')
      }
    },
    typescript: {
      base: {
        src: ['src/ts/**/*.ts'],
        dest: 'docroot/js/app.js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          basePath: 'docroot/ts',
          sourceMap: true,
          declaration: true,
          watch: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-typescript');

//Default Tasks
  grunt.registerTask('default',['shell']);

//production Tasks
//grunt.registerTask('dist',[..]);

//test tasks
};