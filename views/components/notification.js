const div = document.querySelector('#notificacion');

export const createNotificacion = (isError, message) => {

  if (isError) {
    div.innerHTML = `
  <div class="max-w-7xl mx-auto px-4 flex justify-center  p-3">
    <p class="bg-red-600 p-4 rounded-lg w-72 font-bold">${message}</p>
  </div>`
  } else {
    div.innerHTML = `
  <div class="max-w-7xl mx-auto px-4 flex justify-center p-3">
    <p class="bg-green-600 p-4 rounded-lg w-72 font-bold">${message}</p>
  </div>`
  }
};