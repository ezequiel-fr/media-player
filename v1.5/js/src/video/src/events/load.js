
/**
 * Video loading completion.
 * @param {HTMLVideoElement} video Video.
 */

export const videoLoading = (video) => {
    video.dataset.loading = 1;

    video.addEventListener('waiting', () => video.dataset.loading = 1);
    video.addEventListener('canplay', () => video.dataset.loading = 0);
};
