
export interface ControlsOptions {
    playButton?: boolean;
    displayTime?: boolean;
};

export interface ControllerEvent extends Object {
    id: number;
    type: "keyup" | "keydown";
}

interface ControllersEvents {
    addKeyEvents(): void
}

export interface Controllers {
    events?: ControllersEvents;
    playButton(video: HTMLVideoElement): void;
    timeAddons(): void;
};
