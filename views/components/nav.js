const navbar = document.querySelector('#navbar');

const createNavHome = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <img src="/images/lista2.png" alt="" class="h-20 w-20 top-auto md:h-32 md:w-32 md:p-4 lg:h-40 lg:w-40 lg:p-6 md:mt-4">

  
  <!-- Version Movil -->
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" stroke="currentColor" 
  class="w-12 h-12 md:hidden text-white cursor-pointer p-2 hover:scale-125">
<path stroke-linecap="round" 
stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


<!-- Version de Escritorio -->
<div class="hidden md:flex flex-row gap-4">
<a href="/login/" class="font-bold text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Login</a>
<a href="/registro/" class="border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Registro</a>
</div>

<!-- Menu Movil -->
<div class="bg-violet-500/90 fixed top-16 left-0 right-0 bottom-0 hidden flex-col gap-4 animate__animated animate__zoomInDown">
    <a href="/login/" class=" flex justify-center items-center border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Login</a>
    <a href="/registro/" class="flex justify-center border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Registro</a>
  </div>

</div>
  `;
};

const createNavSignup = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <img src="/images/lista2.png" alt="" class="h-20 w-20 top-auto md:h-32 md:w-32 md:p-4 lg:h-40 lg:w-40 lg:p-6 md:mt-4">

  
  <!-- Version Movil -->
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" stroke="currentColor" 
  class="w-12 h-12 md:hidden text-white cursor-pointer p-2 hover:scale-125">
<path stroke-linecap="round" 
stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


<!-- Version de Escritorio -->
<div class="hidden md:flex flex-row gap-4">
<a href="/login/" class="font-bold text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Login</a>
</div>

<!-- Menu Movil -->
<div class="bg-violet-500/90 fixed top-16 left-0 right-0 bottom-0 hidden flex-col gap-4 animate__animated animate__zoomInDown">
    <a href="/login/" class=" flex justify-center items-center border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Login</a>
  </div>

</div>
  `;
};

const createNavLogin = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <img src="/images/lista2.png" alt="" class="h-20 w-20 top-auto md:h-32 md:w-32 md:p-4 lg:h-40 lg:w-40 lg:p-6 md:mt-4">

  
  <!-- Version Movil -->
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" stroke="currentColor" 
  class="w-12 h-12 md:hidden text-white cursor-pointer p-2 hover:scale-125">
<path stroke-linecap="round" 
stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


<!-- Version de Escritorio -->
<div class="hidden md:flex flex-row gap-4">
<a href="/registro/" class="border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Registro</a>
</div>

<!-- Menu Movil -->
<div class="bg-violet-500/90 fixed top-16 left-0 right-0 bottom-0 hidden flex-col gap-4 animate__animated animate__zoomInDown">
    <a href="/registro/" class="flex justify-center border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Registro</a>
  </div>

</div>
  `;
};

const createNavContact = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <img src="/images/lista2.png" alt="" class="h-20 w-20 top-auto md:h-32 md:w-32 md:p-4 lg:h-40 lg:w-40 lg:p-6 md:mt-4">

  
  <!-- Version Movil -->
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" stroke="currentColor" 
  class="w-12 h-12 md:hidden text-white cursor-pointer p-2 hover:scale-125">
<path stroke-linecap="round" 
stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


<!-- Version de Escritorio -->
<div class="hidden md:flex flex-row gap-4">
<button id="close-btn" class="border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Cerrar Sesion</button>
</div>

<!-- Menu Movil -->
<div class="bg-violet-500/90 fixed top-16 left-0 right-0 bottom-0 hidden flex-col gap-4 animate__animated animate__zoomInDown">

<button id="close-btn" class="border-double border-4 font-bold border-blue-50 text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-indigo-400 py-2 px-4 rounded-lg">Cerrar Sesion</button>

  </div>

</div>
  `;
};


if (window.location.pathname === '/') {
  createNavHome();
}else if (window.location.pathname === '/registro/') {
  createNavSignup();
}else if (window.location.pathname === '/login/') {
  createNavLogin();
}else if (window.location.pathname === '/contacto/') {
  createNavContact();
};

const navBtn = navbar.children[0].children[1];

navBtn.addEventListener('click', e => {

  const menuMobile = navbar.children[0].children[3];

 if (!navBtn.classList.contains('active')) {
   navBtn.classList.add('active');   
   navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />';

   menuMobile.classList.remove('hidden');
   menuMobile.classList.add('flex');

  }else {

    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');

  navBtn.classList.remove('active');
  navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
 }

});

const btnDeletEscri = navbar.children[0].children[2].children[0];
const btnDeletMobil = navbar.children[0].children[2].children[0];

btnDeletEscri.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});

btnDeletMobil.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});
