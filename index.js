var Unsplash = require('unsplash-js');
global.fetch = require('node-fetch');   // Unsplash needs this
var https = require('https');
var fs = require('fs');
var Path = require('path');
var Queue = require('queue');
var queue = Queue({concurrency: 1});
var config = require('app-config');
const unsplash = new Unsplash.default(config.unsplash);

const PATH_WALLPAPER = Path.join('images', 'wallpaper');
const PATH_ARCHIVE= Path.join('images', 'archive');


var consumePhotoList = (photos => {
  console.log('[consumePhotoList] Processing %d photos', photos.length);

  // Build the queue (download one image at a time)
  photos.forEach(photo => {
    queue.push(next => {
      var url = photo.urls.raw;
      var filename = photo.id + '.jpg';
      var request = https.get(url, function(response) {
        console.log('[consumePhotoList] Downloading %s => %s', url, filename);
        var fileWriteStream = fs.createWriteStream(Path.join(PATH_WALLPAPER, filename));
        response.pipe(fileWriteStream);
        fileWriteStream.on('finish', next);
      });
    });
  });

  // Start downloading
  queue.start(err => {
    if (err) return console.warn('[consumePhotoList] Error ', err);
    console.log('[consumePhotoList] DONE!');
  });

});

var downloadPhotos = () => {
  unsplash.photos
    .listPhotos(1, 15, "latest")
    .then(Unsplash.toJson)
    .then(consumePhotoList);
};


var downloadCuratedPhotos = () => {
  unsplash.photos
    .listCuratedPhotos(1, 15, "latest")
    .then(Unsplash.toJson)
    .then(consumePhotoList);
};


var downloadRandomPhotos = () => {
  unsplash.photos
    .getRandomPhoto({
      featured: true,
      orientation:'landscape',
      count: 15
    })
    .then(Unsplash.toJson)
    .then(consumePhotoList)
};



//downloadCuratedPhotos();
downloadRandomPhotos();