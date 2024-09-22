// React's State
import { useState } from 'react'
// Search Component
import SearchForm from './components/search-form'
// Weather Component 
import WeatherInfo from './components/weather-info'
// Weather Custom Hook
import { useWeather } from './hooks/use-weather'

function App() {

  // Set State for City
  const [city, setCity] = useState("");

  // Deconstructing custom hook for weather value
  const { weather, notFound, searchWeatherByCity } = useWeather();
  
  // Weather search 
  const handleSubmit = async (event) => {
    // Avoid refreshing the page
    event.preventDefault();
    // Doing the search
    searchWeatherByCity(city);
  };
  
  return (
    <>
      <div className='min-h-screen container-block'>
        <div className="flex flex-col items-start justify-center max-w-sm gap-8 mx-auto">
          <div className='w-full bg-theme-dark border border-theme-medium py-8 px-6 rounded-lg flex flex-col shadow-lg shadow-theme-light/10'>

            {/* Search Form */}
            <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />

            {/* If no cities found, NotFound Component */}
            {notFound && <NotFound />}

            {/* If cities found, Weather Component */}
            {!notFound && weather && (
              <WeatherInfo
                icon={weather.icon}
                description={weather.description}
                temperature={weather.temperature}
                humidity={weather.humidity}
                windSpeed={weather.windSpeed}
              />
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
