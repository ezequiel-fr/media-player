import Controllers from "./controllers/index.js";
/**
 * The video controller librairie is an open source librairie
 * made by TheRedMineTheRedMine.
 *
 * @class VideoController
 * @TheRedMineTheRedMine <theredminedu51@gmail.com>
 */
class VideoController {
    /**
     * Initialize the player.
     *
     * @param {HTMLVideoElement} video the video.
     */
    constructor(video) {
        /** @var {ControlsOptions} defaultOptions */
        this.defaultOptions = {
            playButton: true,
            displayTime: true
        };
        /**
         * Remove base controls of the video thanks to an interval
         * to prevent modifications with the navigator console.
         *
         * @returns {number} interval
         */
        this.removeControls = () => this._removeControls = setInterval(() => {
            if (this.video.getAttribute('controls') !== null)
                this.video.removeAttribute('controls');
            if (this.video.style.pointerEvents !== 'none')
                this.video.style.pointerEvents = 'none';
        }, 2000);
        /**
         * Remove the interval auto-removing the video base
         * controls.
         *
         * @returns {void} anything.
         */
        this.authorizeControls = () => clearInterval(this._removeControls);
        this.video = video; // Init video
        this.removeControls(); // Remove controls
        this.controllers = Controllers;
    }
    /**
     * Choose and init video controllers.
     * If empty values, the program will choose basics
     * controls (play/pause button, display time, ...).
     *
     * @param {ControlsOptions} params a customizable object.
     * @returns {void}
     */
    controls(params = this.defaultOptions) {
        let _params = Object.keys(params);
        _params.forEach(a => (params[a] || typeof a == undefined) && this.chooseControl(a));
    }
    chooseControl(control) {
        switch (control) {
            case 'playButton': return this.controllers.playButton(this.video);
            case 'displayTime': return "this.controllers.timeAddons()";
            // 
            default: return void 0;
        }
    }
    ;
}
export default VideoController;
//# sourceMappingURL=index.js.map