import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { databaseGenerate } from './config/database';
import { router as authRoutes } from './routes/auth.route';
import { router as userRoutes } from './routes/user.route';

import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

const app: express.Express = express();
app.use(express.json({ limit: '100mb' }));

app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

// error handling middleware
app.use(errorHandler);

databaseGenerate();

export default app;
