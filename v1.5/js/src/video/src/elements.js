import Builds from './build/index.js';


/**
 * Toogle inner content of an element by his alternate value.
 * @param {HTMLElement} el the element.
 */

const replaceInnerValue = (el) => {
    if (el.hasChildNodes() && el.firstChild == el.lastChild) {
        el = el.firstChild;
    }

    const oldValue = el.innerHTML;
    
    el.innerHTML = el.dataset.alternateValue;
    el.dataset.alternateValue = oldValue;
}


/**
 * VideoControllerElements
 */

export default class VideoControllerElements
{
    /**
     * Construct
     */

    constructor() {
        /** * Load entire classes and build dependencies. */
        this.builds = Builds;
    }


    /**
     * Returns the name (in an array) for button compatibility.
     * @param {String} name
     */

    nameBtnPattern = (name) => [["videoPlayer", name].join('-'), name];


    /**
     * @param {String} name
     * @param {String|Array} innerValues
     * 
     * @returns {HTMLButtonElement}
     */

    btnPattern (name, innerValues) {
        var btn = this.builds.buttonPattern(name, innerValues);

        btn = this.builds.boxing(btn);
        btn.classList.add('videoPlayer-component', 'btn');
        btn.style.width = 'min-content';

        return btn;
    };


    /**
     * Play/Pause button
     */

    playButton() {
        var btn = this.btnPattern (
            this.nameBtnPattern('play'),
            ['Play', 'Pause']
        );

        // set api
        btn.addEventListener('click', function () {
            const method = __video.paused ? 'play' : 'pause';
            
            btn.dataset.status = method;
            __video[method]();
        });

        // change content
        this.video.addEventListener('play', () => replaceInnerValue(btn));
        this.video.addEventListener('pause', () => replaceInnerValue(btn));

        replaceInnerValue(btn);

        return this.box.appendChild(btn);
    }

}
