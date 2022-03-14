import { videoLoading } from './load.js';

/**
 * Video loading handler.
 * 
 * @param {HTMLVideoElement} video
 * @return {never}
 */

const videoLoadingHandler = (video) => {
    video.dataset.loading = 1;
    videoLoading(video);
};

export default class VideoEvents
{
    /**
     * Add events.
     * 
     * @param {HTMLElement} box
     */

    constructor(box) {
        this.box = box;
        this.video = box.querySelector('video');

        // video loading
        videoLoadingHandler(this.video);
        
        this.loadActions();
        this.videoEvents();
        this.loadKeyEvents();
    }


    /**
     * Load actions
     */

    loadActions() {
        this.playPause = () => {
            this.box.querySelector('button#btn-play').click();
        }
    }


    /**
     * video events
     */

    videoEvents() {
        this.video.addEventListener('click', () => this.playPause());
    }


    /**
     * Key events
     */

    loadKeyEvents() {
        const video = this.video;

        document.onkeydown = (e) => {
            switch (e.keyCode) {
                case 32: // space
                    return this.playPause();
                
                case 37: // left arrow
                    if (e.ctrlKey) {
                        video.currentTime -= 90;
                    } else if (e.shiftKey) {
                        video.currentTime -= 1;
                    } else if (e.altKey) {
                        video.currentTime -= 5;
                    } else {
                        video.currentTime -= 10;
                    }
                    break;
                
                case 38: // up arrow
                    console.log("Up key is pressed.");
                    break;
                
                case 39: // right arrow
                    if (e.ctrlKey) {
                        video.currentTime += 90;
                    } else if (e.shiftKey) {
                        video.currentTime += 1;
                    } else if (e.altKey) {
                        video.currentTime += 5;
                    } else {
                        video.currentTime += 10;
                    }
                    break;
                
                case 40: // down arrow
                    console.log("Down key is pressed.");
                    break;

                case 70: // f key
                    console.log("Toggle fullscreen mode.");
                    break;

                // chapters
                case 48:
                case 96:
                    video.currentTime = 0;
                    break;

                case 49:
                case 97:
                    video.currentTime = video.duration / 10 * 1;
                    break;

                case 50:
                case 98:
                    video.currentTime = video.duration / 10 * 2;
                    break;

                case 51:
                case 99:
                    video.currentTime = video.duration / 10 * 3;
                    break;

                case 52:
                case 100:
                    video.currentTime = video.duration / 10 * 4;
                    break;

                case 53:
                case 101:
                    video.currentTime = video.duration / 10 * 5;
                    break;

                case 54:
                case 102:
                    video.currentTime = video.duration / 10 * 6;
                    break;

                case 55:
                case 103:
                    video.currentTime = video.duration / 10 * 7;
                    break;

                case 56:
                case 104:
                    video.currentTime = video.duration / 10 * 8;
                    break;

                case 57:
                case 105:
                    video.currentTime = video.duration / 10 * 9;
                    break;

                default:
                    // console.log(e);
                    break;
            }
        };
    }

}
