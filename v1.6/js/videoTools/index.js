"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export const __esModule = true;
var VideoController = /** @class */ (function () {
    /**
     * Initialize the player.
     *
     * @param {HTMLVideoElement} video the video.
     */
    function VideoController(video) {
        var _this = this;
        /**
         * Remove base controls of the video thanks to an interval
         * to prevent modifications with the navigator console.
         *
         * @returns {number} interval
         */
        this.removeControls = function () { return _this._removeControls = setInterval(function () {
            if (_this.video.getAttribute('controls') !== null)
                _this.video.removeAttribute('controls');
            if (_this.video.style.pointerEvents !== 'none')
                _this.video.style.pointerEvents = 'none';
        }, 2000); };
        /**
         * Remove the interval auto-removing the video base
         * controls.
         *
         * @returns {void} anything.
         */
        this.authorizeControls = function () { return clearInterval(_this._removeControls); };
        this.video = video; // Init video
        this.removeControls(); // Remove controls
    }
    /**
     * Choose and init video controllers.
     * If empty values, the programm will choose basics
     * controls (play/pause button, display time, ...).
     *
     */
    VideoController.prototype.controls = function (_a) {
        var _b = _a.playButton, playButton = _b === void 0 ? true : _b, _c = _a.displayTime, displayTime = _c === void 0 ? true : _c;
        if (playButton) {
            console.log("apply play button");
        }
        if (displayTime) {
            console.log("apply time display");
        }
    };
    return VideoController;
}());
exports["default"] = VideoController;
