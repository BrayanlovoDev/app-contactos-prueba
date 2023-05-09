const contactosRouter = require('express').Router();
const User = require('../models/user');
const contacto = require('../models/contacto');
const Contacto = require('../models/contacto');

contactosRouter.get('/', async (request, response) => {
  const user = request.user;

   const contactos = await contacto.find({ user: user.id });
   return response.status(200).json(contactos);

});

contactosRouter.post('/', async (request, response) => {
  const user = request.user;
   const { name, numero, email } = request.body;
   const newContacto = new Contacto({
    name,
    numero,
    email,
    user: user._id
   });
   const savedContacto = await newContacto.save();
   user.contactos = user.contactos.concat(savedContacto._id);
   await user.save();

   return response.status(201).json(savedContacto);
});

contactosRouter.delete('/:id', async (request, response) => {
  const user = request.user;
   

  await Contacto.findByIdAndDelete(request.params.id);

  user.contactos = user.contactos.filter(contacto => contacto.id !== request.params.id);

  await user.save();
  return response.sendStatus(204);
});



module.exports = contactosRouter;
