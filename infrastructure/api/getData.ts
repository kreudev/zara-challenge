export const getData = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'x-api-key': process.env.API_KEY_AUTH ?? '',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Error al obtener los datos')
  }

  return data
}
