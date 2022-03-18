import VideoControllerBuildDependecies from './build/index.js';


/**
 * VideoControllerElements
 */

export default class VideoControllerElements
{

    /**
     * Construct
     */

    constructor() {
        this.loadBuilds();
    }


    /**
     * Returns the name (in an array) for button compatibility.
     * @param {String} name
     */

    nameBtnPattern = (name) => [["videoPlayer", name].join('-'), name];


    /**
     * Load entire classes and build dependencies.
     */

    loadBuilds = () => this.builds = VideoControllerBuildDependecies;

     
    /**
     * Play/Pause button
     */

     playButton() {
        var btn = this.builds.buttonPattern (
            this.nameBtnPattern('play'),
            ['Play', 'Pause']
        );

        console.log(btn);
    }

}
