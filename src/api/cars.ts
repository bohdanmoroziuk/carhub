import { Car } from '@/types'

export interface GetCarsParams {
  manufacturer?: string;
  model?: string;
  fuel?: string;
  year?: number;
  limit?: number;
}

export const getCars = async ({
  manufacturer = '',
  model = '',
  fuel = '',
  year = new Date().getFullYear(),
  limit = 10
}: GetCarsParams): Promise<[null, Car[]] | [Error, undefined]> => {
  const headers = {
		'X-RapidAPI-Key': 'd9a4563636mshbc810a92d67b5dfp1b08bdjsn4b3c84703a73',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'

  const searchParams = new URLSearchParams({
    make: manufacturer,
    model,
    fuel_type: fuel,
    year: year.toString(),
    limit: limit.toString()
  })

  const url = baseUrl.concat('?').concat(searchParams.toString())

  try {
    const response = await fetch(url, { headers })

    const data = await response.json()

    if (data.error) return [new Error(data.error), undefined]

    return [null, data]
  } catch (error) {
    return [error as Error, undefined]
  }
}
