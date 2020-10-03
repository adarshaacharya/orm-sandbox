import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import { databaseGenerate } from './config/database';
import { router as userRoutes } from './routes/user.route';
import { router as authRoutes } from './routes/auth.route';

dotenv.config();

const app: express.Express = express();
app.use(express.json({ limit: '100mb' }));

app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

databaseGenerate();

export default app;
