import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import initDB from './database/init';
import UserRoute from './routes/user.route';

initDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', UserRoute);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
