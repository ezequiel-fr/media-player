window.addEventListener('load', () => {
    // get video
    const video = document.getElementById('video-element');
    const _video = video;

    var box = document.createElement('div');
    video.replaceWith(box);

    // put in a box
    box.appendChild(_video);
    box.appendChild(document.createElement('br'));
    box.className = "video-player";

    // load components
    const [
        playButton,
        muteButton,
        skipButtons
    ] = videoComponents(box);

    console.log(box);

});


const videoComponents = (box) => {
    const playButton = playButton();

    const muteButton = document.createElement('button');
          muteButton.className = 'mute';
          muteButton.addEventListener('click', () => console.log('mute/demute'));

    const skipButtons = document.createElement('button');
          skipButtons.className = 'skip';
          skipButtons.addEventListener('click', () => console.log('mute/demute'));

    box.appendChild(playButton);
    box.appendChild(muteButton);
    box.appendChild(skipButtons);

    playButton.innerText = "play";
    muteButton.innerText = "mute";
    skipButtons.innerText = "skip";

    return [playButton, muteButton, skipButtons];
};

const playButton = () => {
    const playButton = document.createElement('button');
    
    playButton.className = 'play';
    playButton.addEventListener('click', () => console.log('play/pause'));

    return playButton;
};
