import mongoose from 'mongoose';

const bicicletaSchema = new mongoose.Schema({
  color: String,
  modelo: String,
  lat: Number,
  lng: Number
});

export default mongoose.model('Bicicleta', bicicletaSchema);