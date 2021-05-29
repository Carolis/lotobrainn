export const normalizeDate = (isoDate: string): string => {
  return isoDate.split('T')[0].split('-').reverse().join('/')
}

export const normalizeEvent = (genericEvent: string): string => {
  return genericEvent.normalize('NFD').replace(/-|\s|[^a-zA-Zs]/g, '')
}
