import { Car } from '@/types'

export const getCars = async (): Promise<[null, Car[]] | [Error, undefined]> => {
  const headers = {
		'X-RapidAPI-Key': 'd9a4563636mshbc810a92d67b5dfp1b08bdjsn4b3c84703a73',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'

  try {
    const response = await fetch(url, { headers })

    const data = await response.json()

    if (data.error) return [new Error(data.error), undefined]

    return [null, data]
  } catch (error) {
    return [error as Error, undefined]
  }
}
