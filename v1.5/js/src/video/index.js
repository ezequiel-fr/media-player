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

        this.prepareVideoContainer();

        this.loadEvents();
        this.loadStyles();
    }


    /**
     * Disable full controls of video and include the possibility
     * that someone try to add manually controls.
     * 
     * @param {HTMLVideoElement} video
     * @returns {number}
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

    loadEvents = () => this.events = new videoControllerEvents(this.video);


    /**
     * Load and add styles
     */

    loadStyles() {
        // main box
        this.box.style.width = 'min-content';
        this.box.style.display = 'flex';
        this.box.style.flexDirection = 'column';

        // video
        this.components.style.marginTop = '10px';

        // childs
        // console.log(this.box);
    }


    /**
     * Add basic components and create the box that will
     * contains all stuff.
     */

    prepareVideoContainer() {
        this.box = this.builds.boxing(this.video, false);
        this.box.className = "player-video";

        this.box.appendChild(this.components);
    }


    /**
     * Add controls to the video
     * 
     * @param {String|Array} controls
     */

    controls(controls) {
        if (typeof controls == 'string') {
            controls = [controls];
        }

        /**
         * @param {String} control
         * @returns {void|Boolean|HTMLElement}
         */

        const chooseControl = (control) => {
            switch (control) {
                case 'play': return this.playButton();
                case 'time': return this.timeAddons();
                // 
                default: return void 0;
            }
        };

        controls.forEach(a => chooseControl(a));
    }

}
