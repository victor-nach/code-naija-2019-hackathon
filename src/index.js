import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import routes from './routes';
import { Response } from './utils';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(`${path.join(__dirname)}/../public`));

app.use(cors(corsOptions));

// app.use('/', routes);

app.get('/', (req, res) => res.render('index'));

app.all('*', (req, res) => Response.resErr(res, 404, 'Sorry endpoint does not exist'));

app.listen(PORT);

export default app;
