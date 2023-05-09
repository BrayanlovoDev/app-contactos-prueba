import { linkBtn } from '../components/linkBtn.js';

//import { createNavHome } from '../components/nav.js';

const title = document.querySelector('h1');
const prueba = title.innerHTML.split('');
title.innerHTML = '';
prueba.forEach((letter, index) => {
  const delay = index * 40;
  const span = document.createElement('span');
  span.innerHTML = letter;
  span.classList.add('animate_animated', 'animate_fadeInleft', 'animate_dealy-0.5s');
  setTimeout(() => title.append(span), delay);
});




const btnGroup = document.querySelector('#btn-group');

const loginBtn = linkBtn('/login', 'indigo', 'Login');

const signupBtn = linkBtn('/registro', 'slate', 'Registro');

btnGroup.append(loginBtn, signupBtn);