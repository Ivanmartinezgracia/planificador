import './style.css'
import { formatearFecha, calcularPeso } from './utils'
import confetti from 'canvas-confetti'

const boton = document.getElementById('Añadir')
const input = document.getElementById('texto')
const inputMin = document.getElementById('min')
const lista = document.getElementById('lista')
boton.addEventListener('click', (e) => guardarPlan(e))

function guardarPlan(e) {
  e.preventDefault()

  const minutos = inputMin.value
  if (!minutos) return
  if (!input.value) return
  let peso = calcularPeso(minutos)
  const fechaHoy = formatearFecha(new Date())
  const li = document.createElement('li')
  li.textContent =
    input.value + ' - ' + fechaHoy + ' ' + minutos + ' (' + peso + ')'
  inputMin.value = ''
  lista.appendChild(li)
  input.value = ''
  confetti({
    particleCount: 300,
    spread: 70,
    origin: { y: 0.6 },
  })
}
