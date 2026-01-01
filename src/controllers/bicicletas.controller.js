import Bicicleta from '../models/Bicicleta.js';

/* =========================
  GET /api/bicicletas
   ========================= */
export const listarBicicletas = async (req, res) => {
  try {
    const bicicletas = await Bicicleta.find();
    res.json(bicicletas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener bicicletas' });
  }
};

/* =========================
  GET /api/bicicletas/:id
   ========================= */
export const obtenerBicicletaPorId = async (req, res) => {
  try {
    const bicicleta = await Bicicleta.findById(req.params.id);

    if (!bicicleta) {
      return res.status(404).json({ message: 'Bicicleta no encontrada' });
    }

    res.json(bicicleta);
  } catch (error) {
    res.status(400).json({ message: 'ID inválido' });
  }
};

/* =========================
  POST /api/bicicletas
   ========================= */
export const crearBicicleta = async (req, res) => {
  try {
    const nuevaBicicleta = new Bicicleta(req.body);
    await nuevaBicicleta.save();
    res.status(201).json(nuevaBicicleta);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

/* =========================
  PUT /api/bicicletas/:id
   ========================= */
export const actualizarBicicleta = async (req, res) => {
  try {
    const bicicletaActualizada = await Bicicleta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!bicicletaActualizada) {
      return res.status(404).json({ message: 'Bicicleta no encontrada' });
    }

    res.json(bicicletaActualizada);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar bicicleta' });
  }
};

/* =========================
  DELETE /api/bicicletas/:id
   ========================= */
export const eliminarBicicleta = async (req, res) => {
  try {
    const bicicletaEliminada = await Bicicleta.findByIdAndDelete(req.params.id);

    if (!bicicletaEliminada) {
      return res.status(404).json({ message: 'Bicicleta no encontrada' });
    }

    res.json({ message: 'Bicicleta eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar bicicleta' });
  }
};
