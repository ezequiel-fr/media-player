import { Controllers } from '../@types/VideoController';

import { PlayButton } from './buttons.js';

const controllers: Controllers = {
    events: {
        addKeyEvents: function () {
            // 
        }
    },
    playButton: PlayButton,
    timeAddons: function () {
        console.log("time addons");
    }
};

export default controllers;
