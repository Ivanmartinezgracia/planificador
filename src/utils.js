import dayjs from 'dayjs'

export function formatearFecha(fecha) {
  const fechaFormateada = dayjs(fecha).format('DD/MM/YYYY HH:mm')
  return fechaFormateada
}
