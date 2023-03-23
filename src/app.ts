import 'express-async-errors';
import express from 'express';
import { errorHandler } from 'middlewares/errorHandler';
import unknownRoute from 'middlewares/unknownRoute';
import router from './api/router'

const expressApp = async () => {
  const app = express();

  app.use(router)
  
  app.use(unknownRoute);
  app.use(errorHandler);

  return app
}

expressApp().then(app => app.listen(4000, () => {
  console.log(`server running on port 4000`);
}))