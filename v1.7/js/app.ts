import VideoController from './videoTools/index.js';

/** @var {HTMLVideoElement} video current video to apply changes */
var video: HTMLVideoElement = document.querySelector('video#video-hls');

/** @var {String} source THe video source */
var source: string = "../video/hls_master.m3u8";

window.addEventListener('load', function () {
    const videoControls = new VideoController(video);

    videoControls.defaultControls();
});

try {

    /** @module Hls */
    let Hls = globalThis.Hls;

    if (Hls.isSupported()) {
        var player = new Hls();

        player.loadSource(source);
        player.attachMedia(video);

        player.on(Hls.Events.LEVEL_LOADED, function () {
            video.muted = true;
            video.pause();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
    }

} catch (error) {
    console.error(error);
}
