const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({

  name: String,
  numero: Number,
  email: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

contactoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;