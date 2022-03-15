import VideoControllerBuildDependecies from './src/build/index.js';
import VideoControllerElements from './src/elements.js';
import videoControllerEvents from './src/events/index.js';

export default class VideoControllers extends VideoControllerElements
{
    /**
     * Add controllers to a video.
     * 
     * @param {HTMLVideoElement} video
     */

    constructor(video) {
        super();

        this.video = video;
        this.controlsRemover(video);

        this.load();
        this.prepareVideoContainer();
    }


    /**
     * Disable full controls of video and include the possibility
     * that somronr try to add manually controls.
     * 
     * @param {HTMLVideoElement} video
     * @return {number}
     */

    controlsRemover(video) {
        return setInterval(() => {
            if (
                null !== video.getAttribute('controls')
                || 'none' !== video.style.pointerEvents
            ) {
                video.removeAttribute('controls');
                video.style.pointerEvents = 'none';
            }
        }, 2000);
    }


    /**
     * Load entire classes and events.
     */

    load() {
        this.events = new videoControllerEvents(this.video);
        this.builds = VideoControllerBuildDependecies;
    }


    /**
     * Add basic components and create the box that will
     * contains all stuff.
     */

    prepareVideoContainer() {
        this.box = this.builds.boxing(this.video, true);
        this.box.className = "player-video";
    }

}
