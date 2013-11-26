bundle = bin 'one/onejs'
stylus = bin 'stylus'
jsify = bin 'jsify'

all 'lib/templates.js', 'dist/index.html', 'dist/7min.js', 'dist/7min.css'

target 'dist/index.html', 'index.html', ->
    debug 'Building dist/7min.js'
    cp '-f', 'index.html', 'dist/index.html'

target 'dist/7min.js', '*.js', 'lib/*.js', 'node_modules', 'components', ->
    debug 'Building dist/7min.js'
    bundle "index.js -o dist/7min.js"

target 'dist/7min.css', '7min.styl', ->
    debug 'Building dist/7min.css'
    stylus "7min.styl -o dist/"

target 'lib/templates.js', 'templates', ->
    jsify "templates/* -o lib/templates.js"

task 'deploy', ->
    mkdir '-p', 'prod'
    cp '-rf', 'dist/*', 'prod/.'
