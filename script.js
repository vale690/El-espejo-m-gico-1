// Interactividad mínima para la boutique
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click',()=> menu.classList.toggle('hidden'));

function addFav(item){
  alert(item + ' añadido a favoritos ✨');
}

document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Gracias por escribirnos — te responderemos pronto.');
  e.target.reset();
});
