export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return Number.parseFloat(rentalRatePerDay.toFixed(0));
};

export const updateSearchParam = (key: string, value: string) => {
  const searchParams = new URLSearchParams(location.search)

  searchParams.set(key, value)

  const path = location.pathname.concat('?').concat(searchParams.toString())

  return path
}
