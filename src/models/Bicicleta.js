import mongoose from 'mongoose';

const bicicletaSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
      trim: true
    },
    modelo: {
      type: String,
      required: true,
      trim: true
    },
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Bicicleta', bicicletaSchema);
