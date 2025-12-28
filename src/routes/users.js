import { Router } from 'express';

const router = Router();

/* GET users listing */
router.get('/', (req, res) => {
  res.json({ message: 'respond with a resource' });
});

export default router;
