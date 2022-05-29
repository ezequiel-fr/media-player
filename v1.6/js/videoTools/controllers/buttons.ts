import Builds from '../build/index.js';

const replaceInnerValue = (el: any) => {
    if (el.hasChildNodes() && el.firstChild == el.lastChild) el = el.firstChild;

    const oldValue = el.innerHTML;
    
    el.innerHTML = el.dataset.alternateValue;
    el.dataset.alternateValue = oldValue;
}

export function PlayButton (video: HTMLVideoElement) {
    // create button
    var btn: HTMLElement = Builds.buttonPattern(["videoPlayer-play", 'play'], ['Play', 'Pause']);

    // set HTML
    btn = Builds.boxing(btn);
    btn.classList.add('videoPlayer-component', 'btn');
    btn.style.width = 'min-content';

    // set API
    btn.addEventListener('click', function () {
        const method = video.paused ? 'play' : 'pause';

        btn.dataset.status = method;
        video[method]();
    });

    // change content automatically
    video.addEventListener('play', () => replaceInnerValue(btn));
    video.addEventListener('pause', () => replaceInnerValue(btn));

    // Show it !
    let components = Builds.elementPattern('div', ['components-box', 'components'], 'videoPayer'),
        box = Builds.boxing(video, false);

    components.appendChild(btn);
    box.appendChild(components);
};
