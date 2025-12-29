import { Router } from 'express';
import {
  listarBicicletas,
  obtenerBicicletaPorId,
  crearBicicleta,
  actualizarBicicleta,
  eliminarBicicleta
} from '../controllers/bicicletas.controller.js';

const router = Router();

router.get('/', listarBicicletas);
router.get('/:id', obtenerBicicletaPorId);
router.post('/', crearBicicleta);
router.put('/:id', actualizarBicicleta);
router.delete('/:id', eliminarBicicleta);

export default router;
