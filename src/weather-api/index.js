export const getWeather = async(city) => {
    // Get the API key from the .env file
    const appid = process.env.OPEN_WEATHER_API_KEY
    // URL uses the API key and the city
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${appid}`
    // Fetch the response asynchronously
    const response = await fetch(URL)
    // Get the data asynchronously in JSON format
    const data = await response.json()
    // Finally, return the data
    return data
}