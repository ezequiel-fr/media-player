import VideoController from './video/index.js';

window.addEventListener('load', () => {
    const video = document.getElementById('video-element');

    return new VideoController(video);
});
