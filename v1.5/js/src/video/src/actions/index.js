import {
    CHAPTER, PLAY_OR_PAUSE,
    TOGGLE_FULLSCREEN_MODE, 
    VIDEO_BACKWARD, VIDEO_FRONTWARD, 
    VOLUME_DOWN, VOLUME_UP
} from '../constants/eventsTypes.js';


/**
 * @param {String|Array} action
 * @returns {void|null|string|boolean}
 */

export default (action) => {
    if (undefined === __video || null === video)
        var __video = window.__video;
    
    switch (
        typeof action == 'string' ? action : action[0]
    ) {
        case PLAY_OR_PAUSE:
            return __video[__video.paused ? 'play' : 'pause']();

        case TOGGLE_FULLSCREEN_MODE:
            if (__video.dataset.fullscreen == true) {
                try {
                    document.exitFullscreen();
                } catch {
                    var requestMethod = __video.exitFullScreen || __video.webkitExitFullScreen || __video.mozExitFullScreen || __video.msExitFullScreen;
                }
            } else {
                var requestMethod = __video.requestFullScreen || __video.webkitRequestFullScreen || __video.mozRequestFullScreen || __video.msRequestFullScreen;
            }
            
            if (requestMethod) {
                requestMethod.call(__video);
            } else if (typeof window.ActiveXObject !== 'undefined') {
                // old versions
                var wscript = new ActiveXObject("WScript.Shell");
                if (null !== wscript) wscript.SendKeys("{F11}");
            }

            __video.dataset.fullscreen = true == __video.dataset.fullscreen ? 0 : 1;

            break;

        case VIDEO_FRONTWARD:
            return __video.currentTime += 10;

        case VIDEO_BACKWARD:
            return __video.currentTime -= 10;

        case VOLUME_UP:
            return __video.volume += 5e-2;

        case VOLUME_DOWN:
            return __video.volume -= 5e-2;

        case CHAPTER:
            return __video.currentTime = Math.round(__video.duration / 10 * action[1]);
        
        default: return;
    }
};
