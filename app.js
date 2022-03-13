const express = require('express');
const app = express();

let jsonData = {
    "vixen-the-hard-way-to-become-an-actress": "https://link.ap1.storjshare.io/juuf34d2kmhmtjnzyblqfbfb7boa/ujav%2Fvixen-the-hard-way-to-become-an-actress.mp4?wrap=0"
};

app.get('/:id', (req, res) => {
    res.status(200).send(html(jsonData[req.params.id]));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

const html = (src) => `
<!DOCTYPE html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shared Links</title>
    <script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>
    <div id="container"><video id="video"></video></div>
    <script>
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let source = document.createElement('source');
    source.setAttribute('src', '${src}');source.setAttribute('type', 'video/mp4');
    let video = document.getElementById('video');video.appendChild(source);
    let myFP = fluidPlayer(
        'video', {
        layoutControls: {
            playButtonShowing:      true,
            playPauseAnimation:     true,
            fillToContainer:        true,
            preload:                true,
            doubleclickFullscreen:  true,
            subtitlesEnabled:       false,
            keyboardControl:        true,
            layout:                 'default',
            allowDownload:          true,
            playbackRateEnabled:    false,
            allowTheatre:           false,
            loop:                   true,
            controlBar: {autoHide:true,autoHideTimeout:3,animated:true},
        }
    });
    </script>
    <style>html,body{margin:0px;height:100%;}#container{position:absolute;top:0px;right:0px;bottom:0px;left:0px;}</style>
</head>
<body>
</body>
</html>`;
