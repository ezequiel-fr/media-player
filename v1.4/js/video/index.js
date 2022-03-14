import { boxing, buttonPattern, rangePattern } from './src/build/index.js';
import { currentTime, muteFunction, playOrPause } from './src/controllers/index.js';
import VideoEvents from './src/events/index.js';


/**
 * Create a box to put controls into it if not exists.
 * @param {HTMLElement} element
 * @returns {HTMLElement} element's box
 */

const controlsBox = (element) => {
    const box = document.querySelector('div.player-video video ~ div.video-controls');

    if (null === box) {
        boxing(element).classList.add("video-controls", "videoPlayer-controls");
    } else {
        box.append(element);
    }

    return boxing(element).classList.add('video-control', `videoPlayer-${element.id}`);
};


/**
 * Create button element and return it.
 * 
 * @param {Array} name the name of the element.
 * @param {Array} innerHTML the values that will be placed into the button.
 * 
 * @returns {HTMLElement}
 */

const btnPattern = (name, innerValues = []) => buttonPattern (
    [["videoPlayer", name].join('-'), name],
    innerValues
);


/**
 * Create an in input with range's type.
 * 
 * @param {String} name the name of the range.
 * @returns {HTMLInputElement}
 */

const slidePattern = (name, step = 1, defaultValue = 0) => rangePattern (
    [["videoPlayer", name].join('-'), name],
    step, defaultValue
);


export default class VideoControllers
{
    /**
     * Add controllers to a video.
     * 
     * @param {HTMLVideoElement} video
     */

    constructor(video) {
        // init video
        this.video = video;
        video.removeAttribute('controls');

        // init box
        this.box = boxing(video, true);
        this.box.className = "player-video";
        
        this.events = new VideoEvents(this.box);
    }


    /**
     * Play button
     * If called, add a play/pause button.
     */

    playButton() {
        const button = btnPattern('play', ["Play", "Pause"]);

        playOrPause(button, this.video);

        this.box.appendChild(button);
        controlsBox(button);
    }


    /**
     * Mute button
     * If called, mute/demute the video.
     */

    muteButton() {
        const button = btnPattern('mute', ["Mute", "Demute"]);

        muteFunction(button, this.video);

        this.box.appendChild(button);
        controlsBox(button);
    }


    /**
     * Time API, generate displayer for video time and add a slider to
     * choose the moment we will see in video.
     */

     timeAPI() {
        const box1 = this.timeSlide();
        const box2 = boxing(this.timeDisplayer(box1));

        box1.classList.add('videoPlayer-timer', 'time-slider-bar');
        box2.classList.add('videoPlayer-timer', 'text-format-time');
        
        this.box.appendChild(box2);
        controlsBox(box2);

        box2.parentElement.appendChild(box1);
        box2.parentElement.classList.replace('videoPlayer-', 'videoPlayer-time-functions');
    }


    /**
     * Time displayer
     * 
     * @param {HTMLSpanElement}
     */

    timeDisplayer(box) {
        return currentTime.display (
            document.createElement('span'),
            this.video, box
        );
    }


    /**
     * Time slide bar
     * Set the time of the video
     */

    timeSlide() {
        const slide = slidePattern('time', 10e-4);

        currentTime.slide(slide, this.video);

        return boxing(slide);
    }
    
}
