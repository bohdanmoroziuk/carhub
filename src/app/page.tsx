import { Hero, SearchBar, CustomFilter, CarCard } from '@/components'
import { getCars } from '@/api'

export default async function Home() {
  const [error, cars] = await getCars()

  const hasCars =
    !error
    cars &&
    Array.isArray(cars) &&
    cars.length > 0

  return (
    <main className="home overflow-hidden">
      <Hero />

      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">
            Car Catalogue
          </h2>
          <p>
            Explore the cars your might like.
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {hasCars
          ? (
            <section>
              <div className="home__cars-wrapper">
                {cars!.map((car, index) => (
                  <CarCard
                    key={index}
                    car={car}
                  />
                ))}
              </div>
            </section>
          )
          : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{error.message}</p>
            </div>
          )}
      </div>
    </main>
  )
}
