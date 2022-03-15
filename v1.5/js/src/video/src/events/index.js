import { keyEvents } from './clicks.js';
import { videoFullscreenHandling, videoLoading } from './load.js';

export default class videoControllerEvents
{
    /**
     * @param {HTMLVideoElement} video
     * @return 
     */

    constructor (video) {
        this.video = video;
        return this.load();
    }


    /**
     * Load functionnality
     */

    load() {
        videoLoading(this.video);
        videoFullscreenHandling(this.video);

        keyEvents();
    }

}
