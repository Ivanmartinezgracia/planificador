import { describe, it, expect } from 'vitest'
import { formatearFecha, calcularPeso } from './utils'

describe('formatear fecha', () => {
  it('formatea correctamente una fecha simple', () => {
    const fecha = new Date(2026, 8, 21, 14, 33)
    const resultado = formatearFecha(fecha)
    expect(resultado).toBe('21/09/2026 14:33')
  })
})

describe('calcularPeso', () => {
  it('devuelve Baja cuando los minutos son menores a 10', () => {
    expect(calcularPeso(5)).toBe('Baja')
  })

  it('devuelve Media cuando los minutos son entre 10 y 29', () => {
    expect(calcularPeso(10)).toBe('Media')
    expect(calcularPeso(25)).toBe('Media')
  })

  it('devuelve Alta cuando los minutos son 30 o más', () => {
    expect(calcularPeso(30)).toBe('Alta')
    expect(calcularPeso(45)).toBe('Alta')
  })
})
