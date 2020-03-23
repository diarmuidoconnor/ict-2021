const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  address: String,
  age: Number,
  email: String,
  updated: Date
});

export default mongoose.model('contacts', ContactSchema);