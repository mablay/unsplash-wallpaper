var Path = require('path');

var dir = {
    project: Path.resolve(__dirname, '..')
};
dir.images =    Path.join(dir.project, 'images');
dir.wallpaper = Path.join(dir.images, 'wallpaper');
dir.archive =   Path.join(dir.images, 'archive');
dir.config =    Path.join(dir.project, 'config');

module.exports = dir;


