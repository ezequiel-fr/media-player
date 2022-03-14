import Hls from 'hls.js';

let myHls = new Hls({
    pLoader: (config) => {
        let loader = new Hls.DefaultConfig.loader(config);

        this.abort = () => loader.abort();
        this.destroy = () => loader.destroy();
        this.load = (context, config, callbacks) => {
            let { type, url } = context;

            if(type === 'manifest') {
                console.log(`Manifest ${url} will be loaded.`);
            }

            loader.load(context, config, callbacks);
        };
    }
});

const video = () => {
    console.log("test");
};

export default video;
