var Hls = globalThis.Hls;
const video = document.querySelector('video#video-hls');

if (Hls.isSupported()) {
    var player = new Hls();

    player.loadSource('../video/2/hls_master.m3u8');
    player.attachMedia(video);

    player.on(Hls.Events.MANIFEST_LOADED, function () {
        video.muted = true;
        video.pause();
    });
}
