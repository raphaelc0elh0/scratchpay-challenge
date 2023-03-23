import express from 'express';
import router from './api/router'

const app = express();

app.use(router)

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});