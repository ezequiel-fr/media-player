import express from 'express';
import videoPage from './video.js';

const routes = express.Router();

routes.get('/video', videoPage);

export default routes;
