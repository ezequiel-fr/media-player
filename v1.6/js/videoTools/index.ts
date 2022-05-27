
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

    /** @var {number} _removeControls */
    private _removeControls: number;

    /**
     * Initialize the player.
     * 
     * @param {HTMLVideoElement} video the video.
     */

    public constructor(video:HTMLVideoElement) {
        this.video = video;
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

}

export default VideoController;
