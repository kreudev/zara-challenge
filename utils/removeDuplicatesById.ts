export const removeDuplicatesById = <T extends { id: string }>(data: T[]) => {
  return data.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id),
  )
}
