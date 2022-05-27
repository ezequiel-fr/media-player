"use strict";
/**
 * The video controller librairie is an open source librairie
 * made by TheRedMineTheRedMine.
 *
 * @class VideoController
 * @TheRedMineTheRedMine <theredminedu51@gmail.com>
 */
exports.__esModule = true;
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
        this.video = video;
    }
    return VideoController;
}());
exports["default"] = VideoController;
