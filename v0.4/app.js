
const video = document.querySelector('video#video-element');

import Hls from './hls.js/dist/hls.js';

console.log(Hls, video);


// if (Hls.isSupported()) {
//     var hls = new Hls();

//     hls.loadSource('../video/hls_master.m3u8');
//     hls.attachMedia(video);

//     hls.on(Hls.Events.MANIFEST_PARSED, () => {
//         video.muted = true;
//         video.play();
//     });
// }
