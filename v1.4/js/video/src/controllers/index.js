
/**
 * Toogle inner content of an element by his alternate value.
 * @param {HTMLElement} el the element.
 */
const replaceInnerValue = (el) => {
    const oldValue = el.innerText;

    el.innerText = el.dataset.alternateValue;
    el.dataset.alternateValue = oldValue;
}


/**
 * Play/pause events for videos.
 * 
 * @param {HTMLElement} el Play button.
 * @param {HTMLVideoElement} video Video.
 */

export const playOrPause = (el, video) => {
    el.addEventListener('click', function () {
        const method = video.paused ? 'play' : 'pause';

        el.dataset.status = method;
        video[method]();
    });

    video.addEventListener('play', () => replaceInnerValue(el));
    video.addEventListener('pause', () => replaceInnerValue(el));
};


/**
 * Mute/demute event for video.
 * 
 * @param {HTMLElement} el Mute button.
 * @param {HTMLVideoElement} video Video.
 */

export const muteFunction = (el, video) => {
    el.addEventListener('click', function () {
        replaceInnerValue(el);
        video.muted = !video.muted;
    });
}


/**
 * API or video's time.
 * 
 * @param {HTMLInputElement} el Slider bar.
 * @param {HTMLVideoElement} video Video.
 */

export const currentTime = ({

    /**
     * Set API for the time slider bar.
     * 
     * @param {HTMLInputElement} el Slider bar.
     * @param {HTMLVideoElement} video Video.
     */

    slide: function (el, video) {
        const updateTime = () => {
            el.value = video.currentTime / video.duration * 100;
        };

        const updateSeekbar = () => {
            video.currentTime = el.value * video.duration / 100;
        };

        el.addEventListener('change', updateSeekbar);
        el.addEventListener('click', updateSeekbar); // add better sliding
        el.addEventListener('drag', updateSeekbar);

        video.addEventListener('timeupdate', updateTime);
    },


    /**
     * Display time with a classical reading value.
     * Ex : (00:00 / 24:00)
     * 
     * @param {HTMLSpanElement} el Span element.
     * @param {HTMLVideoElement} video Video.
     * @param {HTMLElement} box box.
     * 
     * @return {HTMLSpanElement} element.
     */

    display: function (el, video, box) {
        const videoTime = (currentTime, duration) => {
            var currentMins = Math.floor(currentTime / 60),
                currentSecs = Math.floor(currentTime - currentMins * 60),
                durationMins = Math.floor(duration / 60),
                durationSecs = Math.floor(duration - durationMins * 60);

            if (currentMins < 10) currentMins = "0" + currentMins;
            if (currentSecs < 10) currentSecs = "0" + currentSecs;
            if (durationMins < 10) durationMins = "0" + durationMins;
            if (durationSecs < 10) durationSecs = "0" + durationSecs;

            el.innerHTML = `${currentMins} : ${currentSecs} / ${durationMins} : ${durationSecs}`;
        };

        box.firstChild.addEventListener('mousemove', () => {
            box.firstChild.value * video.duration / 100,
            video.duration
        });

        video.addEventListener('timeupdate', () => videoTime(video.currentTime, video.duration));
        video.addEventListener('canplay', () => videoTime(video.currentTime, video.duration));

        return el;
    }
});
