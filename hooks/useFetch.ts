import { useEffect, useState } from 'react'
export const useFetch = <TDomain>(
  getData: () => Promise<TDomain | null>,
  dependencies: any,
) => {
  const [data, setData] = useState<TDomain | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setLoading(true)
      try {
        const newData = await getData()
        setData(newData)
      } catch (error) {
        setError(error as Error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 200)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [dependencies])

  return { data, loading, error }
}
