import Hls from 'hls.js';

const video = document.querySelector('video#video-element');
const source = "../video/hls_master.m3u8";

if (Hls.isSupported())
{
    var hls = new Hls();

    hls.loadSource(source);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
    });
}
else if (video.canPlayType('application/vnd.apple.mpegurl'))
{
    video.setAttribute('src', source);
}
