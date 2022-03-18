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
        video.classList.add('videoPlayer');
        // this.controlsRemover(video); // desactives the video click event

        this.loadBuilds();
        this.prepareVideoContainer();
        this.loadEvents();
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
     * Load entire classes and build dependencies.
     */

    loadBuilds = () => this.builds = VideoControllerBuildDependecies;
    

    /**
     * Load entire classes and events.
     */

    loadEvents = () => this.events = new videoControllerEvents(this.video);

    /**
     * Add basic components and create the box that will
     * contains all stuff.
     */

    prepareVideoContainer() {
        this.box = this.builds.boxing(this.video, true);
        this.box.className = "player-video";
    }

}
