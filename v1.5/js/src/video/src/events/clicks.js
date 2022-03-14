import eventsTypes from '../constants/eventsTypes.js';


/**
 * Return the event.
 * @param {KeyboardEvent} e 
 */

const _keyEventsSwitch = (e) => {
    switch (e.keyCode) {
        case 32: return eventsTypes.PLAY_OR_PAUSE;
        case 37: return eventsTypes.VIDEO_BACKWARD;
        case 38: return eventsTypes.VOLUME_UP;
        case 39: return eventsTypes.VIDEO_FRONTWARD;
        case 40: return eventsTypes.VOLUME_DOWN;
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
 * Add key events for the video player.
 * @returns {void}
 */

export const keyEvents = () => {
    return document.onkeyup = (e) => {
        console.log(_keyEventsSwitch(e));
    }
};
