export const transformId = (id: string) => {
  return id.replace(/([A-Z])/g, '-$1').toLowerCase()
}
