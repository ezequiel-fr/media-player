import Actions from '../actions/index.js';
import * as eventsTypes from '../constants/eventsTypes.js';


/**
 * @param {HTMLVideoElement} video
 */

export const videoSaveTime = (video) => {
    const updateTime = () => localStorage.setItem('time', video.currentTime / video.duration * 100);

    localStorage.setItem('time', 0);
    video.addEventListener('timeupdate', updateTime);
};


/**
 * Add play and pause API to the video when clicked.
 * @param {HTMLVideoElement} video
 */

export const videoClickEvents = (video) => {
    const interval = setInterval(() => {
        if (video.parentElement.classList.contains('player-video')) {
            video.onclick = () => Actions(eventsTypes.PLAY_OR_PAUSE);
            clearInterval(interval);
        }
    }, 100);
};


/**
 * Return the event (only with `onkeydown` event).
 * @param {KeyboardEvent} e the event to test.
 * @returns {String|Array} the action.
 */

const _keyEventsSwitch_a = (e) => {
    switch (e.keyCode) {
        case 37: return eventsTypes.VIDEO_BACKWARD;
        case 38: return eventsTypes.VOLUME_UP;
        case 39: return eventsTypes.VIDEO_FRONTWARD;
        case 40: return eventsTypes.VOLUME_DOWN;
        default: return null;
    }
};


/**
 * Return the event (only with `onkeyup` event).
 * @param {KeyboardEvent} e the event to test.
 * @returns {String|Array} the action.
 */

const _keyEventsSwitch_b = (e) => {
    switch (e.keyCode) {
        case 32: return eventsTypes.PLAY_OR_PAUSE;
        case 70: return eventsTypes.TOGGLE_FULLSCREEN_MODE;
        case 48: case 96: return eventsTypes.CHAPTER_0;
        case 49: case 97: return eventsTypes.CHAPTER_1;
        case 50: case 98: return eventsTypes.CHAPTER_2;
        case 51: case 99: return eventsTypes.CHAPTER_3;
        case 52: case 100: return eventsTypes.CHAPTER_4;
        case 53: case 101: return eventsTypes.CHAPTER_5;
        case 54: case 102: return eventsTypes.CHAPTER_6;
        case 55: case 103: return eventsTypes.CHAPTER_7;
        case 56: case 104: return eventsTypes.CHAPTER_8;
        case 57: case 105: return eventsTypes.CHAPTER_9;
        default: return null;
    }
};


/**
 * Do an action when a specific key is pressed.
 * @returns {never}
 */

export const keyEvents = function () {
    document.onkeydown = (e) => {
        const action = _keyEventsSwitch_a(e);
        return (null === action ? void 0 : Actions(action));
    };

    document.onkeyup = (e) => {
        const action = _keyEventsSwitch_b(e);
        return (null === action ? void 0 : Actions(action));
    };

    // only for test
    // document.addEventListener('keyup', (e) => console.log(e));
    // document.addEventListener('keypress', (e) => console.log(e));
};
