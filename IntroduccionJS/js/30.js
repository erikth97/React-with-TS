// EVENTOS DEL DOM - CLICK

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Nuevo heading al dar click'
})