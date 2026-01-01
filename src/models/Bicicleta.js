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
      required: true,
      min: -90,
      max: 90
    },
    lng: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Bicicleta', bicicletaSchema);
