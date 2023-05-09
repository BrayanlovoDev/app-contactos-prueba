export const linkBtn = (href, color, text) => {
  const link = document.createElement('div');
  link.innerHTML = `
  <a href="${href}" class="py-2 px-4 bg-${color}-500 rounded-lg text-white font-bold
      hover:bg-${color}-600 transition w-2/5 text-center 
      ">${text}</a>
  `;
  return link;
};