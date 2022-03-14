import VideoControllers from './src/video/index.js';

/** @var {HTMLVideoElement} video */
var video = document.querySelector('video#video-hls');
/** @var {String} source */
var source = '../../video/2/hls_master.m3u8';

export default window.addEventListener('load', function () {
    const videoController = new VideoControllers(video);

    globalThis.__videoController = videoController;
    globalThis.__video = video;
});

try {
    
    /** @module Hls */
    Hls = globalThis.Hls;

    if (Hls.isSupported()) {
        var player = new Hls();

        player.loadSource(source);
        player.attachMedia(video);

        player.on(Hls.Events.LEVEL_LOADED, function () {
            video.muted = true;
            video.pause();
        })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
    }

} catch (error) {
    console.error(error);
}
