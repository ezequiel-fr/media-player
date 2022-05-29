import { ControlsOptions, Controllers as ControllersType } from "./@types/VideoController";
import Controllers from "./controllers/index.js";


/**
 * The video controller librairie is an open source librairie
 * made by TheRedMineTheRedMine.
 * 
 * @class VideoController
 * @TheRedMineTheRedMine <theredminedu51@gmail.com>
 */

class VideoController {

    /** @var {HTMLVideoElement} video */
    public video: HTMLVideoElement;

    /** @var {ControlsOptions} defaultOptions */
    protected defaultOptions: ControlsOptions = {
        playButton: true,
        displayTime: true
    };

    /** @var {number} _removeControls */
    private _removeControls: number;

    /** @var {ControllersType} controllers */
    protected controllers: ControllersType;

    /**
     * Initialize the player.
     * 
     * @param {HTMLVideoElement} video the video.
     */

    public constructor(video: HTMLVideoElement) {
        this.video = video; // Init video
        this.removeControls(); // Remove controls

        this.controllers = Controllers;
    }


    /**
     * Remove base controls of the video thanks to an interval
     * to prevent modifications with the navigator console.
     * 
     * @returns {number} interval
     */

    public removeControls = (): number => this._removeControls = setInterval(() => {
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

    public authorizeControls = (): void => clearInterval(this._removeControls);


    /**
     * Choose and init video controllers.
     * If empty values, the program will choose basics
     * controls (play/pause button, display time, ...).
     * 
     * @param {ControlsOptions} params a customizable object.
     * @returns {void}
     */

    public controls (params: ControlsOptions = this.defaultOptions): void {
        let _params = Object.keys(params);
        
        _params.forEach(a => (params[a] || typeof a == undefined) && this.chooseControl(a));
    }


    private chooseControl (control: string) {
        switch (control) {
            case 'playButton': return this.controllers.playButton(this.video);
            case 'displayTime': return "this.controllers.timeAddons()";
            // 
            default: return void 0;
        }
    };

}

export default VideoController;
