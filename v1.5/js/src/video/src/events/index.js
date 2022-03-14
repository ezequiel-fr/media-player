import { keyEvents } from './clicks.js';
import { videoLoading } from './load.js';

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
        keyEvents();
    }

}
