import Builds from '../build/index.js';
const replaceInnerValue = (el) => {
    if (el.hasChildNode() && el.firstChild == el.lastChild)
        el = el.firstChild;
    const old = el.innerHTML;
    el.innerHTML = el.dataset.alternative;
    el.dataset.alternative = old;
};
const controllers = {
    events: {
        addKeyEvents: function () {
            // 
        }
    },
    playButton: function (video) {
        // Create button
        var btn = Builds.buttonPattern(["VideoPlayer-play", "play"], ["Play", "Pause"]);
        // Set HTML
        btn = Builds.boxing(btn);
        btn.classList.add('VideoPlayer-component', 'btn');
        btn.style.width = 'min-content';
        // Set controller
        btn.addEventListener('click', function () {
            const method = (video === null || video === void 0 ? void 0 : video.paused) ? 'play' : 'pause';
            btn.dataset.status = method;
            video[method]();
        });
        // Change the content on new event
        video.addEventListener('play', () => replaceInnerValue(btn));
        video.addEventListener('pause', () => replaceInnerValue(btn));
        // Display button
        let components = Builds.elementPattern('div', ['components-box', 'components'], 'VideoPlayer'), box = Builds.boxing(video, false);
        components.appendChild(btn);
        box.appendChild(components);
    },
    timeAddons: function () {
        console.log("time addons");
    }
};
export default controllers;
//# sourceMappingURL=index.js.map