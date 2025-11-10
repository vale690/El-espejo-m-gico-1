// Boutique - interactividad
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click',()=> menu.classList.toggle('hidden'));
function addFav(item){
  alert(item + ' añadido a tus favoritos ✨');
}
function ver(item){
  alert('Mostrando detalles de ' + item + '. (Demo)');
}
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Gracias por escribir — te responderemos en breve.');
  e.target.reset();
});
