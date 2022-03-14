export default class videoButtons {

    constructor(box = false) {
        if (box !== false) {
            // get box
            this.box = box;

            // define functions
            const proto = Object.getPrototypeOf(this);
            const names = Object.getOwnPropertyNames(proto);
            const buttonFunctions = names.filter(name => name != 'constructor' && !name.toLowerCase().includes('_'));

            // define buttons
            var functions = [];
            buttonFunctions.forEach(f => functions.push(this[f]()));

            return functions;
        }
    }

    _buttonPattern(name) {
        const button = document.createElement('button');

        button.classList.add(['videoPlayer', name].join('-'));
        button.id = name;

        return button;
    }

    _rangePattern(name) {
        const range = document.createElement('input');

        range.classList.add(['videoPlayer', name].join('-'));
        range.type = 'range';
        range.id = name;

        range.min = 0;
        range.step = 1;
        range.max = 100;

        return range;
    }

    _selectPattern(name, type = 'select') {
        const select = () => {
            const select = document.createElement('select');

            select.classList.add(['videoPlayer', name].join('-'));
            select.name = name;
            select.id = name;

            return select;
        };

        const option = () => {
            const option = document.createElement('option');

            option.classList.add(['videoPlayer', name].join('-'));
            option.id = name;

            return option;
        };

        return eval(type)();
    }

    playButton() {
        const button = this._buttonPattern('play');

        button.innerText = "Play";
        button.dataset.status = "pause";

        button.addEventListener('click', () => {
            button.dataset.status =
                button.dataset.status === "play"
                    ? "pause" : "play";
        });

        this.box.appendChild(button);

        return button;
    }

    muteButton() {
        const button = this._buttonPattern('mute');

        button.innerText = "Mute";

        button.dataset.status = Boolean(
                this.box.querySelector('video').muted
            ).toString();

        button.addEventListener('click', () => {
            button.dataset.status =
                button.dataset.status === 'true'
                    ? 'false' : 'true';
        });

        this.box.appendChild(button);

        return button;
    }

    volumeRange() {
        const range = this._rangePattern('volume');
        
        // update vol
        const updateVol = (vol = null) => {
            if (vol != null) {
                range.value = vol;
            }

            range.dataset.volume = range.value;
        };

        updateVol(100);

        range.addEventListener('change', () => updateVol());
        range.addEventListener('mousemove', () => updateVol());

        this.box.appendChild(range);

        return range;
    }

    _timeRange() {
        const range = this._rangePattern('time');

        range.value = 0;
        range.setAttribute("step", 10e-4);

        return range;
    }

    selectSpeed() {
        const select = this._selectPattern('speedSelector', 'select');
    }

};
