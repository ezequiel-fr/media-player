import Hls from 'hls.js';
import { resolve } from 'path';

const file = resolve(process.cwd(), './public/index.html');
const source = resolve(process.cwd(), '../video/hls_master.m3u8');

const videoPage = (req, res) => {
    res.sendFile(file);
}

export default videoPage;
