import VideoEvents from '../events/index.js';
import videoButtons from './buttons.js';
import videoTime from './time.js';

class VideoController
{
    /**
     * Init controllers for videos int HTML, add API for
     * each component.
     * 
     * @param {HTMLVideoElement} video the video
     * @returns {HTMLVideoElement} return the same video 
     */

    constructor (video) {
        // start
        this.video = video;

        // init component
        this.init();

        // end
        return video;
    }


    /**
     * Main initiator (suite of constructor).
     * Inits the box and after init components (button, time, ...).
     * 
     * @returns {void}
     */

    init() {
        // init box
        this.box = this.initBox();

        // init buttons
        this.initButtons();
        
        // init time
        this.box.appendChild(document.createElement('br')); // bt
        this.initTime();

        // init events
        this.events = new VideoEvents();
    }


    /**
     * Init box before define others components. \
     * Creates a div, and the video into it.
     * That's scripts returns the `HTMLElement` that contains the video.
     * 
     * @returns {HTMLElement} box
     */

    initBox() {
        // video
        const video = this.video;
        const _video = video;

        var box = document.createElement('div');
        video.replaceWith(box);

        // put video into the box
        box.appendChild(_video);
        box.appendChild(document.createElement('br'));
        box.className = "video-player";

        return box;
    }


    /**
     * Init all buttons and displays it.
     * 
     * @return {void}
     */

    initButtons() {
        this.controllers = new videoButtons(this.box);

        // elements to init
        this.play();
        this.volume();
        this.speed();
    }


    /**
     * Init time counter. And display it. \
     * Creates a range and a time display in a box.
     * 
     * @returns {void}
     */

    initTime() {
        var time = document.createElement('span');
        const _box = document.createElement('div');

        time.className = 'videoPlayer-timeDisplay';
        _box.className = 'videoPalyer-timeDisplayBox';

        const updateTime = () => {
            time.innerHTML = videoTime(this.video);
        }

        updateTime();

        _box.appendChild(time);
        _box.innerHTML += "&ensp;";

        time = _box.querySelector('.' + time.classList[0]);

        // load input -> range
        var buttons = new videoButtons();
        const range = buttons._timeRange();

        const updateSeekbar = () => {
            range.dataset.time = range.value;
            
            this.video.currentTime = this.video.duration * range.value / 100;

            updateSeekbarTime();
        };

        const updateSeekbarTime = () => {
            range.value = this.video.currentTime / this.video.duration * 100;
        };

        range.addEventListener('change', updateSeekbar);
        range.addEventListener('mousemove', updateSeekbar);

        _box.appendChild(range);

        // add sub box to the video
        this.box.appendChild(_box);

        this.video.addEventListener('timeupdate', updateTime);
        this.video.addEventListener('timeupdate', updateSeekbarTime);
    }


    /**
     * Return an HTMLElement found in the controllers (child of videoButtons).
     * 
     * @param {String} name button to search
     * @returns {HTMLElement} HTMLElement
     */

    findElement(name) {
        return this.controllers.find(e => e.id == name)
    }


    /**
     * Add api for the play/pause button.
     * 
     * @returns {void}
     */
    
    play() {
        const button = this.findElement('play');

        button.addEventListener('click', () => {
            this.video[button.dataset.status]();
        });
    }


    /**
     * Create and add api to a volume slider. 
     * 
     * @returns {void}
     */

    volume() {
        const range = this.findElement('volume');

        range.value = this.video.volume * 100;
        
        const updateVol = () => {
            range.dataset.volume = range.value;
            this.video.volume = range.value / 100;
        };

        updateVol();
        
        range.addEventListener('change', updateVol);
        range.addEventListener('mousemove', updateVol);

        this.video.addEventListener('onvolumechange', updateVol);
    }


    /**
     * Select button to select the speed of the video.
     * 
     * @returns {void}
     */

    speed() {
        // 
    }

}


export default VideoController;
