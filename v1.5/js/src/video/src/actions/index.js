import {
    PLAY_OR_PAUSE, 
    TOGGLE_FULLSCREEN_MODE, 
    VOLUME_DOWN, 
    VOLUME_UP
} from '../constants/eventsTypes.js';


/**
 * @param {String} action
 * @returns {void|null|string|boolean}
 */

export default (action) => {
    if (undefined === __video || null === video)
        var __video = window.__video;
    
    switch (action) {
        case PLAY_OR_PAUSE:
            return __video[__video.paused ? 'play' : 'pause']();

        case TOGGLE_FULLSCREEN_MODE:
            if (!__video.fullscreenElement) {
                __video.documentElement.requestFullscreen();
            } else {
                if (__video.exitFullscreen) {
                    __video.exitFullscreen();
                }
            }
            break;

        case VOLUME_UP:
            return __video.volume += 10;

        case VOLUME_DOWN:
            return __video.volume -= 10;
    }
};
