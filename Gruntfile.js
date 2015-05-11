module.exports = function(grunt){
//project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      multiple: {
        command: [
          'tsd reinstall --save',
          'grunt bower:install'
        ].join('&&')
      }
    },
    typescript: {
      base: {
        src: ['src/ts/*.ts'],
        dest: 'dist/js/app.js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          basePath: 'src/ts',
          sourceMap: true,
          declaration: true,
          watch: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      },
      typescript: {
        files: ['src/ts/**/*.ts'],
        tasks: ['typescript']
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ["watch:css", "watch:typescript"]
      }
    },
    bower: {
      install: {
        options : {
          targetDir : "dist/lib"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default',['shell']);

  grunt.registerTask("dev", ["concurrent:dev"]);
};