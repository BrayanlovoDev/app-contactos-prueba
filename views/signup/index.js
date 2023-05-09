import { createNotificacion } from "../components/notification.js";


const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');
const notificacion = document.querySelector('#notificacion');
//regex

const EMAIL_VALIDACION = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
const PASSWORD_VALIDACIOM = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const NAME_VALIDACION = /^[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1\s]*)$/;

//validacion
let nombreValidacion = false;
let emailValidacion = false;
let passwordValidacion = false;
let matchValidacion = false;

const validacion = (input, validacionRegex) => {
  formBtn.disabled = nombreValidacion && emailValidacion && passwordValidacion && matchValidacion ? false : true;
  console.log(nombreValidacion && emailValidacion && passwordValidacion && matchValidacion);
  if (input.value === '') {
    input.classList.add('focus:outline-zinc-50');
    input.classList.remove('outline-green-500', 'outline-2', 'outline');
    input.classList.remove('outline-red-600', 'outline-2', 'outline');
  }
  if (validacionRegex === true) {
    input.classList.remove('focus:outline-zinc-50');
    input.classList.add('outline-green-500', 'outline-2', 'outline');
  } else if (validacionRegex === false) {
    input.classList.remove('focus:outline-zinc-50');
    input.classList.remove('outline-green-500', 'outline-2', 'outline');
    input.classList.add('outline-red-600', 'outline-2', 'outline');
  }
  
};

nameInput.addEventListener('input', e => {
  nombreValidacion = NAME_VALIDACION.test(e.target.value);
  validacion(nameInput, nombreValidacion);

});

emailInput.addEventListener('input', e => {
  emailValidacion = EMAIL_VALIDACION.test(e.target.value);
  validacion(emailInput, emailValidacion);

});

passwordInput.addEventListener('input', e => {
  passwordValidacion = PASSWORD_VALIDACIOM.test(e.target.value);
  matchValidacion = e.target.value === matchInput.value;
  validacion(passwordInput, passwordValidacion);
  validacion(matchInput, matchValidacion);
});

matchInput.addEventListener('input', e => {
  matchValidacion = e.target.value === passwordInput.value;
  validacion(matchInput, matchValidacion);
});


form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }
    const { data } = await axios.post('/api/users', newUser);
    createNotificacion(false, data);
    setTimeout(() =>{
      notificacion.innerHTML = '';
    }, 5000)

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    matchInput.value = '';

    validacion(nameInput, '');
    validacion(emailInput, '');
    validacion(passwordInput, '');
    validacion(matchInput, '');

  } catch (error) {
    createNotificacion(true, error.response.data.error);
    setTimeout(() =>{
      notificacion.innerHTML = '';
    }, 5000)
    
  }
  
});