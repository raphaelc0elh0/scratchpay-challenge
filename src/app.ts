import 'express-async-errors';
import express from 'express';
import { errorHandler } from 'middlewares/errorHandler';
import unknownRoute from 'middlewares/unknownRoute';
import router from './api/router'
import bodyParser from 'body-parser';

const expressApp = async () => {
  const app = express();

  app.use(bodyParser.json({limit: '6mb', strict: false}));
  app.use(bodyParser.text({limit: '6mb'}));
  app.use(bodyParser.urlencoded({limit: '6mb', extended: false}));

  app.use(router)
  
  app.use(unknownRoute);
  app.use(errorHandler);

  return app
}

export default expressApp

