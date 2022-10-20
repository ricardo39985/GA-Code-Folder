var htmlToImage = require('html-to-image');
var node = document.getElementById('my-node');

htmlToImage
  .toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
