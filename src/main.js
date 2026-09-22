import './style.css'
import { formatearFecha } from './utils'
import confetti from 'canvas-confetti'

const boton = document.getElementById('Añadir')
const input = document.getElementById('texto')
const lista = document.getElementById('lista')
boton.addEventListener('click', guardarPlan)

function guardarPlan() {
  if (input.value.trim() !== '') {
    const fechaHoy = formatearFecha(new Date())
    const li = document.createElement('li')
    li.textContent = input.value + ' - ' + fechaHoy
    lista.appendChild(li)
    input.value = ''
    confetti({
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 },
    })
    input.value = ''
  }
}
