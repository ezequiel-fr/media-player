import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './src/routes.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// route
app.use('/', routes);

// port
const PORT = process.env.PORT || 5000;

// run
app.listen(PORT, () => console.log('Server running at : ' + PORT))
