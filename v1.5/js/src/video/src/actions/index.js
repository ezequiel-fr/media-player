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
            try {
                return __video.requestFullscreen();
            } catch {
                if (__video.webkitSupportsFullscreen) {
                    return __video.webkitEnterFullscreen();
                }
            }

        case VOLUME_UP:
            return __video.volume += 10;

        case VOLUME_DOWN:
            return __video.volume -= 10;
    }
};
