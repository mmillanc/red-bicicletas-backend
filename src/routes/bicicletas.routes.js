import { Router } from 'express';
import { listarBicicletas } from '../controllers/bicicletas.controller.js';

const router = Router();

router.get('/', listarBicicletas);

export default router;