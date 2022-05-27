"use strict";
exports.__esModule = true;
var index_js_1 = require("./videoTools/index.js");
/** @var {HTMLVideoElement} video current video to apply changes */
var video = document.querySelector('video#video-hls');
/** @var {String} source THe video source */
var source = "../video/hls_master.m3u8";
window.addEventListener('load', function () {
    var videoController = new index_js_1["default"](video);
    // 
});
try {
    /** @module Hls */
    var Hls = globalThis.Hls;
    if (Hls.isSupported()) {
        var player = new Hls();
        player.loadSource(source);
        player.attachMedia(video);
        player.on(Hls.Events.LEVEL_LOADED, function () {
            video.muted = true;
            video.pause();
        });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
    }
}
catch (error) {
    console.error(error);
}
