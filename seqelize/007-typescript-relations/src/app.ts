import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { errorHandler } from './common/middlewares/errors.middleware';
import { databaseGenerate } from './config/database';
import { router as studentsRoutes } from './modules/students/students.routes';


dotenv.config();

const app: express.Express = express();
app.use(express.json({ limit: '100mb' }));

app.use(cors());

app.use('/api/students', studentsRoutes);

app.use(errorHandler);

databaseGenerate();

export default app;
