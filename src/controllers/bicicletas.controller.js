import Bicicleta from '../models/Bicicleta.js';

export const listarBicicletas = async (req, res) => {
  const bicicletas = await Bicicleta.find();
  res.json(bicicletas);
};