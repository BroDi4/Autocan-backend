import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import * as ProductController from './controllers/ProductController.js';
import * as ModelController from './controllers/ModelController.js';
import * as OfferController from './controllers/OfferController.js';

const app = express();
app.use(express.json());
app.use(cors());

//connect to DB
mongoose
  .connect(
    'mongodb+srv://brod:12BroD123@cluster.8z0udat.mongodb.net/autocan?retryWrites=true&w=majority',
  )
  .then(() => console.log('Database connect succesuful'))
  .catch((err) => console.log(err));

//Server init
app.listen('4000', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server started');
});

//queryes

app.get('/products', ProductController.getAll);

app.get('/categories', ModelController.getAllCategories);

app.get('/models', ModelController.getModels);

app.get('/offer', OfferController.getAll);
