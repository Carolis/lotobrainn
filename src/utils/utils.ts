export const normalizeDate = (isoDate: string): string => {
  return isoDate.split('T')[0].split('-').reverse().join('/')
}
