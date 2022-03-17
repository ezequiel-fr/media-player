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
            var requestMethod = __video.requestFullScreen || __video.webkitRequestFullScreen || __video.mozRequestFullScreen || __video.msRequestFullScreen;

            console.log(__video);

            if (requestMethod) {
                requestMethod.call(__video);
            } else if (typeof window.ActiveXObject !== 'undefined') {
                // old versions
                var wscript = new ActiveXObject("WScript.Shell");
                if (null !== wscript) wscript.SendKeys("f");
            }

            break;

        case VOLUME_UP:
            return __video.volume += 10;

        case VOLUME_DOWN:
            return __video.volume -= 10;
    }
};
