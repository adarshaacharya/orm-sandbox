import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import initDB from './database/init';
import UserRoute from './routes/user.route';
import PostRoute from './routes/post.route';
import TagRoute from './routes/tag.route';

initDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', UserRoute);
app.use('/api/posts', PostRoute);
app.use('/api/tags', TagRoute);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
