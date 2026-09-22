import { describe, it, expect } from 'vitest'
import { formatearFecha } from './utils'

describe('formatear fecha', () => {
  it('formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33)
    const resultado = formatearFecha(fecha)
    expect(resultado).toBe('21/09/2026 14:33')
  })
})
