export const transformId = (id: string) => {
  if (!id) return undefined
  return id.split(' ').join('-').toLowerCase()
}
