import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import bicicletasRoutes from './routes/bicicletas.routes.js';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Vite
}));

/* Necesario para __dirname en ES Modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bicicletas', bicicletasRoutes);

export default app;
