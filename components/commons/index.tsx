export const getPropValue = (prop: string, obj: object) => {
  const definedKey = prop.toLocaleLowerCase() as keyof typeof obj

  return obj[definedKey]
}
