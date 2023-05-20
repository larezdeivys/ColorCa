const seccion8 = document.querySelector('#par6')
const sec8 = document.querySelector('.btn8')

window.addEventListener('scroll', (e) => {
	let boton = window.innerHeight
	let ubicacionboton = seccion8.getBoundingClientRect().top
	ubicacionboton <= 36 ? sec8.classList.add ('btnanimado') : sec8.classList.remove ('btnanimado') 

})