import { Router } from 'express';
import ExerciseController from './app/controllers/ExerciseController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Coodeco' }));

routes.post('/exercises', ExerciseController.index);

export default routes;
