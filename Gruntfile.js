module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist'
    },

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js', '!src/js/bootstrap.js']
    },

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/roomready.min.js': 'src/js/roomready.js',
          'dist/js/bootstrap.min.js': 'src/js/bootstrap.js'
          // how to minify muliple
          //'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js']
        }
      }
    },

     // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'dist/css/roomready.css': 'src/css/roomready.less'
        }
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/roomready.min.css': 'src/css/roomready.css',
          'dist/css/bootstrap.min.css': 'src/css/bootstrap.css'
        }
      }
    },

    // configure watch to auto update ----------------
    watch: {
      options: {
        //livereload: true,
      },
      // for stylesheets, watch css and less files 
      // only run less and cssmin stylesheets:
      css: {
        files: ['src/css/*.less'], 
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
      html: {
        files: ['src/**/*.pug'],
        tasks: ['pug']
      }
    },

    pug: {
      compile: {
        options: {
          data: {
            debug: false
          },
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "src/templates/",
          src: "**/*.pug",
          dest: "dist/",
          expand: true,
          ext: ".html"
        } ]
      }
    }
  });

  //Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-pug');

  //Grunt Tasks
  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'cssmin', 'less', 'pug']); 


};