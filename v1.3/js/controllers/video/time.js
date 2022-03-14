
const videoTime = (video) => {
    var currentTime = video.currentTime,
        duration = video.duration;

    var currentMins = Math.floor(currentTime / 60),
        currentSecs = Math.floor(currentTime - currentMins * 60),
        durationMins = Math.floor(duration / 60),
        durationSecs = Math.floor(duration - durationMins * 60);

    if (currentMins < 10) currentMins = "0" + currentMins;
    if (currentSecs < 10) currentSecs = "0" + currentSecs;
    if (durationMins < 10) durationMins = "0" + durationMins;
    if (durationSecs < 10) durationSecs = "0" + durationSecs;

    return (
        `${currentMins} : ${currentSecs} / ${durationMins} : ${durationSecs}`
    );
};

export default videoTime;
