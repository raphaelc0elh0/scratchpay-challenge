import express from 'express';
import { errorHandler } from 'middlewares/errorHandler';
import unknownRoute from 'middlewares/unknownRoute';
import router from './api/router'

const app = express();

app.use(router)

app.use(unknownRoute);
app.use(errorHandler);

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});