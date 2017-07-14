/**
 * @file
 */
module.exports = function(grunt) {

  // This is where we configure each task that we'd like to run.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // This is where we set up all the tasks we'd like grunt to watch for changes.
      images: {
        files: ['img/source/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      },
      vector: {
        files: ['img/source/**/*.svg'],
        tasks: ['svgmin'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['scss/**/*.scss', 'plugins/layouts/**/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: true
        }
      },
      twig: {
        files: ['templates/**/*.html.twig'],
        tasks: ['uglify', 'svgmin', 'imagemin', 'sass', 'drush:ccall']
      }
    },
    imagemin: {
      // This will optimize all of our images for the web.
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['{,*/}*.{png,jpg,gif}' ],
          dest: 'img/optimized/'
        }]
      }
    },
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['{,*/}*.svg' ],
          dest: 'img/optimized/'
        }]
      }
    },
    sass: {
      // This will compile all of our sass files
      // Additional configuration options can be found at https://github.com/sindresorhus/grunt-sass
      options: {
        includePaths: [
          "node_modules/bourbon/core",
          "node_modules/bourbon-neat/core",
          "node_modules/font-awesome/scss",
          "node_modules/neat-omega",
          "node_modules",
          "scss"
        ],
        sourceMap: true,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 5
      },
      dist: {
        files: {
          // Full Width Options.
          'plugins/layouts/full-width/bricks/css/bricks.css' : 'plugins/layouts/full-width/bricks/scss/bricks.scss',
          'plugins/layouts/full-width/ibeam/css/ibeam.css' : 'plugins/layouts/full-width/ibeam/scss/ibeam.scss',
          // Four Column.
          'plugins/layouts/four-column/molive/css/molive.css' : 'plugins/layouts/four-column/molive/scss/molive.scss',
          // Three Column.
          'plugins/layouts/three-column/bars/css/bars.css' : 'plugins/layouts/three-column/bars/scss/bars.scss',
          'plugins/layouts/three-column/battleship/css/battleship.css' : 'plugins/layouts/three-column/battleship/scss/battleship.scss',
          'plugins/layouts/three-column/blastila/left/css/blastila-left.css' : 'plugins/layouts/three-column/blastila/left/scss/blastila-left.scss',
          'plugins/layouts/three-column/blastila/right/css/blastila-right.css' : 'plugins/layouts/three-column/blastila/right/scss/blastila-right.scss',
          'plugins/layouts/three-column/chess/css/chess.css' : 'plugins/layouts/three-column/chess/scss/chess.scss',
          'plugins/layouts/three-column/cuttoner/left/css/cuttoner-left.css' : 'plugins/layouts/three-column/cuttoner/left/scss/cuttoner-left.scss',
          'plugins/layouts/three-column/cuttoner/right/css/cuttoner-right.css' : 'plugins/layouts/three-column/cuttoner/right/scss/cuttoner-right.scss',
          'plugins/layouts/three-column/percles/left/css/percles-left.css' : 'plugins/layouts/three-column/percles/left/scss/percles-left.scss',
          'plugins/layouts/three-column/percles/right/css/percles-right.css' : 'plugins/layouts/three-column/percles/right/scss/percles-right.scss',
          'plugins/layouts/three-column/robot/css/robot.css' : 'plugins/layouts/three-column/robot/scss/robot.scss',
          'plugins/layouts/three-column/space-invader/css/space-invader.css' : 'plugins/layouts/three-column/space-invader/scss/space-invader.scss',
          'plugins/layouts/three-column/strigges/css/strigges.css' : 'plugins/layouts/three-column/strigges/scss/strigges.scss',
          'plugins/layouts/three-column/sunset-delorean/left/css/sunset-delorean-left.css' : 'plugins/layouts/three-column/sunset-delorean/left/scss/sunset-delorean-left.scss',
          'plugins/layouts/three-column/sunset-delorean/right/css/sunset-delorean-right.css' : 'plugins/layouts/three-column/sunset-delorean/right/scss/sunset-delorean-right.scss',
          'plugins/layouts/three-column/thions/top/css/thions-top.css' : 'plugins/layouts/three-column/thions/top/scss/thions-top.scss',
          'plugins/layouts/three-column/thions/bottom/css/thions-bottom.css' : 'plugins/layouts/three-column/thions/bottom/scss/thions-bottom.scss',
          'plugins/layouts/three-column/valmer/left/css/valmer-left.css' : 'plugins/layouts/three-column/valmer/left/scss/valmer-left.scss',
          'plugins/layouts/three-column/valmer/right/css/valmer-right.css' : 'plugins/layouts/three-column/valmer/right/scss/valmer-right.scss',
          // Two Column.
          'plugins/layouts/two-column/donies/css/donies.css' : 'plugins/layouts/two-column/donies/scss/donies.scss',
          'plugins/layouts/two-column/frogger/css/frogger.css' : 'plugins/layouts/two-column/frogger/scss/frogger.scss',
          'plugins/layouts/two-column/pacman/right/css/pacman-right.css' : 'plugins/layouts/two-column/pacman/right/scss/pacman-right.scss',
          'plugins/layouts/two-column/pacman/left/css/pacman-left.css' : 'plugins/layouts/two-column/pacman/left/scss/pacman-left.scss',
          'plugins/layouts/two-column/aiur/css/aiur.css' : 'plugins/layouts/two-column/aiur/scss/aiur.scss',
          'plugins/layouts/two-column/plakes/right/css/plakes-right.css' : 'plugins/layouts/two-column/plakes/right/scss/plakes-right.scss',
          'plugins/layouts/two-column/plakes/left/css/plakes-left.css' : 'plugins/layouts/two-column/plakes/left/scss/plakes-left.scss',
          'plugins/layouts/two-column/toucan/css/toucan.css' : 'plugins/layouts/two-column/toucan/scss/toucan.scss',
          'plugins/layouts/two-column/trunks/right/css/trunks-right.css' : 'plugins/layouts/two-column/trunks/right/scss/trunks-right.scss',
          'plugins/layouts/two-column/trunks/left/css/trunks-left.css' : 'plugins/layouts/two-column/trunks/left/scss/trunks-left.scss',
          'plugins/layouts/two-column/wedge/right/css/wedge-right.css' : 'plugins/layouts/two-column/wedge/right/scss/wedge-right.scss',
          'plugins/layouts/two-column/wedge/left/css/wedge-left.css' : 'plugins/layouts/two-column/wedge/left/scss/wedge-left.scss',
          // One Column.
          'plugins/layouts/one-column/basic/css/basic.css' : 'plugins/layouts/one-column/basic/scss/basic.scss'
        }
      }
    },
    drush: {
      ccall: {
        args: ['cache-rebuild', 'all']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/**/*.css',
            'templates/**/*.twig',
            'img/optimized/**/*.{png,jpg,gif,svg}',
            'js/build/**/*.js',
            '*.theme'
          ]
        },
        options: {
          watchTask: true,
          // reloadDelay: 1000,
          // reloadDebounce: 500,
          reloadOnRestart: true,
          logConnections: true,
          injectChanges: false // Depends on enabling the link_css module
        }
      }
    },
    availabletasks: {
      tasks: {
        options: {
          filter: "include",
          tasks: [
            'browserSync', 'imagemin', 'sass', 'svgmin', 'watch', 'devmode'
          ]
        }
      }
    }
  });

  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-drush');

  // My tasks.
  grunt.registerTask('devmode', "Watch and BrowserSync all in one.", ['browserSync', 'watch']);

  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['availabletasks']);
};
