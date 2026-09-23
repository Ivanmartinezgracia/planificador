import dayjs from 'dayjs'

export function formatearFecha(fecha) {
  const fechaFormateada = dayjs(fecha).format('DD/MM/YYYY HH:mm')
  return fechaFormateada
}

export function calcularPeso(minutos) {
  if (minutos < 10) return 'Baja'
  if (minutos < 30) return 'Media'
  return 'Alta'
}
