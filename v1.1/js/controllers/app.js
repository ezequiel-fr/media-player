import VideoController from './video/index.js';

window.addEventListener('load', () => {
    var video = document.querySelector('video');

    const videoController = new VideoController(video);
});
