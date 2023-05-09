

const form = document.querySelector("#form");
const nameInput = document.querySelector("#Nombre-contacto");
const numeroInput = document.querySelector("#Numero-tlf");
const emailInput = document.querySelector("#Correo");
const ul = document.querySelector('ul');


(async () => {
  try {
    const { data } = await axios.get('/api/contactos', {
      withCredentials: true
    });
    
    data.forEach(contacto => {
      const createContacto = document.createElement('li');
      createContacto.id = contacto.id;
      createContacto.classList.add('flex', 'justify-center', 'items-center', 'gap-4', 'w-full', 'rounded-lg', 'bg-violet-400/40', 'focus:outline-zinc-50', 'placeholder:text-zinc-600');
      createContacto.innerHTML = `
      <div class="group grow flex flex-row justify-between" id="">
      <button id="boton-editar" class="bg-green-500 flex justify-center items-center w-1 p-4 rounded-sm">&#x1F4dd</button>
        <div class="group grow flex flex-col md:flex-row">
          <p class="p-4 break-words flex justify-center items-center content-center">${contacto.name}</p>
          <p class="p-4 break-words  flex justify-center items-center content-center">${contacto.numero}</p>
          <p class="p-4 break-words  flex justify-center items-center content-center">${contacto.email}</p>
        </div>
      <button id="boton-eliminar" class="bg-red-600 flex justify-center items-center w-1 p-4 rounded-sm">&#x2623</button>
    </div>
      `;
      ul.append(createContacto);
    });
    
  } catch (error) {
    window.location.pathname = '/login'
  }

  

})();


form.addEventListener('submit', async e => {
  e.preventDefault();

  const { data } = await axios.post('/api/contactos', { name: nameInput.value, numero: numeroInput.value, email: emailInput.value });
  console.log(data);

  const createContacto = document.createElement('li');
  createContacto.id = data.id;
  createContacto.classList.add('flex', 'justify-center', 'items-center', 'gap-4', 'w-full', 'rounded-lg', 'bg-violet-400/40', 'focus:outline-zinc-50', 'placeholder:text-zinc-600');
  createContacto.innerHTML = `
  <div class="group grow flex flex-row justify-between" id="">
  <button id="boton-editar" class="bg-green-500 flex justify-center items-center w-1 p-4 rounded-sm">&#x1F4dd</button>
    <div class="group grow flex flex-col md:flex-row">
      <p class="p-4 break-words flex justify-center items-center content-center">${data.name}</p>
      <p class="p-4 break-words  flex justify-center items-center content-center">${data.numero}</p>
      <p class="p-4 break-words  flex justify-center items-center content-center">${data.email}</p>
    </div>
  <button id="boton-eliminar" class="bg-red-600 flex justify-center items-center w-1 p-4 rounded-sm">&#x2623</button>
</div>
  `;

  ul.append(createContacto);

  nameInput.value = '';
  numeroInput.value = '';
  emailInput.value = '';

});

ul.addEventListener('click', async e => {
  
  if (e.target.closest('#boton-eliminar')) {
    const li = e.target.closest('#boton-eliminar').parentElement.parentElement;
    await axios.delete(`/api/contactos/${li.id}`);
    li.remove();
  }

});