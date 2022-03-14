import VideoControllers from './video/index.js';

window.addEventListener('load', function () {
    const video = document.querySelector('video#video-element');        
    const videoController = new VideoControllers(video);

    videoController.playButton();
    videoController.muteButton();
    videoController.timeAPI();
});
