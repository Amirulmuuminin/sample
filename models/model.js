import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  nama: String,
  email: String,
  pesan: String
});

const Test = models.Pesan || model('Pesan', testSchema);

export default Test;