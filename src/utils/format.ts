export const currency = (n: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(n)
}

export const date = (d: Date) => {
  return d.toLocaleDateString('pt-BR')
}
