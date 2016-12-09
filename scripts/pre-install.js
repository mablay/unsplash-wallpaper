var fs = require('fs');
var Path = require('path');
var config = require('app-config');



/** Init gitignored folder structure **/
console.log('[PRE-INSTALL] Create gitignored folder structure');

console.log('[PRE-INSTALL] \t%s', config.dir.images);
if ( !fs.existsSync(config.dir.images) )    fs.mkdirSync(config.dir.images);

console.log('[PRE-INSTALL] \t%s', config.dir.wallpaper);
if ( !fs.existsSync(config.dir.wallpaper) ) fs.mkdirSync(config.dir.wallpaper);

console.log('[PRE-INSTALL] \t%s', config.dir.archive);
if ( !fs.existsSync(config.dir.archive) )   fs.mkdirSync(config.dir.archive);




/** Create local copy of unsplash configuration **/
console.log();
console.log('[PRE-INSTALL] Create local (gitignored) unsplash.js config file');
var unsplashConfigFile = Path.join('config', 'unsplash.js');
var unsplashConfigExampleFile = Path.join(config.dir.config, 'unsplash_example.js');
console.log('[PRE-INSTALL] \t%s', unsplashConfigFile);
if ( !fs.existsSync(unsplashConfigFile) )
    fs.writeFileSync(unsplashConfigFile, fs.readFileSync(unsplashConfigExampleFile));





