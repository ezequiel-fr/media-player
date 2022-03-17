import { keyEvents, videoClickEvents, videoSaveTime } from './clicks.js';
import { videoFullscreenHandling, videoLoading } from './load.js';

export default class videoControllerEvents
{
    /**
     * @param {HTMLVideoElement} video
     */

    constructor (video) {
        this.video = video;
        this.load();
    }


    /**
     * Load functionnality
     */

    load() {
        videoLoading(this.video);
        videoFullscreenHandling(this.video);

        videoSaveTime(this.video);

        keyEvents();
        videoClickEvents(this.video);
    }

}
