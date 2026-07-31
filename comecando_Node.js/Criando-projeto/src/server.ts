import express from 'express';
import { router } from './routes';

//inicializando o o projeto
const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () =>  console.log('Server Online !!'))

