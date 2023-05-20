const seccion1 = document.querySelector('#scrollNav')
const navbar = document.querySelector('.nav1')

window.addEventListener('scroll', (e) => {
	let pantalla = window.innerHeight
	let ubicacionObjeto = seccion1.getBoundingClientRect().top
	ubicacionObjeto <= 36 ? navbar.classList.add ('navAnimado') : navbar.classList.remove ('navAnimado') 

})