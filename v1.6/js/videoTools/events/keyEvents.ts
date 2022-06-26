import { ControllerEvent } from "../@types/VideoController";

const PLAY_OR_PAUSE = "play";

const VideoKeyEvents = {
    [PLAY_OR_PAUSE]: {
        id: 31,
        type: 'keydown'
    }
};

// const PLAY_OR_PAUSE: ControllerEvent = {id: 31, type: 'keydown'};

export default VideoKeyEvents;
