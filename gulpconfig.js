module.exports = {
  browserSync: {
    enabled: true,
    port: 3050,
    watchFiles: [],
    baseDir: 'build/',
    startPath: '/',
    openBrowserAtStart: true,
    // requires above to be true; allows non-default browser to open
    browser: [
      'Google Chrome',
    ],
    reloadDelay: 50,
    reloadDebounce: 750,
  },
  css: {
    enabled: true,
    source: [
      'src/scss/styles.scss',
    ],
    includePaths: [
      'src/canvas/css/',
    ],
    dest: 'build/css/',
    watchPaths: [
      'src/scss/**/*.scss'
    ],
    lint: false,
    // outputStyles maybe 'expanded', 'compressed', 'nested'
    outputStyle: 'expanded',
    sourceMapEmbed: true,
    sourceComments: false,
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    flattenOutput: true,
    sassdoc: {
      enabled: false,
      dest: 'sassdoc',
      verbose: false,
      exclude: [],
    },
  },
  js: {
    enabled: true,
    source: 'src/js/*.js',
    dest: 'build/js/',
    destFileName: 'scripts.js',
    babel: false,
    uglify: false,
    sourceMap: false,
    includePaths: [
      'src/canvas/js/jquery.js',
      'src/canvas/js/jquery.gmap.js',
      'src/canvas/js/plugins.js',
      'src/canvas/js/functions.js',
      'src/canvas/js/lodash.js',
      'src/canvas/js/hwd.ts.js',
    ],
    eslint: {
      enabled: false,
      sources: [
        'src/js/**/*.js',
      ],
    },
    documentationJs: {
      enabled: false,
      sources: [
        'src/js/**/*.js',
      ],
      dest: 'jsdoc',
      // Either 'html', 'md', or 'json'
      format: 'html',
    },
  },
  html: {
    enabled: true,
    sources: [
      'src/index.twig',
      'src/accessibility.twig',
      'src/privacy.twig',
    ],
    dest: 'build/',
    lint: true,
    twig: {
      enabled: true,
      baseDir: 'src/templates/',
      dataSrc: [
        'src/templates/vars/general.json',
        'src/templates/vars/services.json',
        'src/templates/vars/team.json',
      ],
    },
  },
  assets: {
    //clean pipe, no compiling
    enabled: true,
    sources: [
        'src/assets/**/*.*',
        'src/**/*.pdf',
    ],
    dest: 'build/assets/',
  }
};