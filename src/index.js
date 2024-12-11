// Import your styles
import './styles/body.scss';
import icons from './components/icons'

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

// Selecting the search button and input field
const searchInput = document.querySelector('input');

searchInput.addEventListener('keydown', async (event) => {

    if (event.key === 'Enter') {
        const location = searchInput.value.trim();

        if (location) {
            try {
                const weatherData = await fetchWeatherData(location);
                displayWeatherData(weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        } else {
            alert('Please enter a location!');
        }
    }
});

// Function to fetch weather data
async function fetchWeatherData(location) {
    try {
        const url = `${BASE_URL}/${location}?unitGroup=us&key=${API_KEY}&contentType=json`;
        console.log('API Request URL:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)

        return data;
    } catch (error) {
        console.error('Network Error:', error);
        return null;
    }
}

// Function to display the weather data
function displayWeatherData(weatherData) {
    if (!weatherData) {
        console.error('No weather data available.');
        return;
    }

    const container = document.querySelector('.location-container');
    let weatherContainer = document.querySelector('.weather-data');

    if (weatherContainer) weatherContainer.remove();


    // Create a new weather container
    weatherContainer = document.createElement('div');
    weatherContainer.className = 'weather-data';
    const location = document.createElement('div');
    location.className = 'location';
    const image = document.createElement('div');
    image.className = 'weather-image';

    const locationName = weatherData.resolvedAddress || 'Unknown';
    const temperature = weatherData.currentConditions?.temp || 'N/A';
    const description = weatherData.description || 'N/A';
    const conditionText = weatherData.currentConditions?.icon || 'unknown';  // Visual Crossing provides `icon` or `weather description`.
    const iconPath = icons[conditionText] || icons['default'];

    location.innerHTML = `
        <h1>${locationName}</h1>
        <p>Temperature: ${temperature}°C</p>
        <p>${description}</p>
            `;
    image.innerHTML = `
            <img src="${iconPath}" alt="${conditionText}" class="weather-icon">
            <p>${conditionText}</p>

    `
    weatherContainer.appendChild(location);
    weatherContainer.appendChild(image);
    container.appendChild(weatherContainer);

    displaySevenDays(weatherData);
    displayConditions(weatherData)
}

function displaySevenDays(weatherData) {
    // Render 7-day forecast
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = `<h2>7-Day Forecast</h2>`;

    const dailyData = weatherData?.days;

    console.log(dailyData)

    if (Array.isArray(dailyData) && dailyData.length >= 7) {
        dailyData.slice(0, 7).forEach(dayData => {
            const dayItem = document.createElement('div');
            dayItem.className = 'day-item';

            const date = new Date(dayData.datetime);
            const formattedDate = `${date.getMonth() + 1}-${date.getDate()}- ${date.getFullYear()}`;

            const iconPathForDay = icons[dayData.icon] || icons['default'];
            const tempHigh = dayData.tempmax;
            const tempLow = dayData.tempmin;

            dayItem.innerHTML = `
                <p><strong>${formattedDate}</strong></p>
                <img src="${iconPathForDay}" alt="${dayData.icon}" class="day-icon">
                <p>High: ${tempHigh}°C / Low: ${tempLow}°C</p>
            `;

            daysContainer.appendChild(dayItem);
        });
    } else {
        daysContainer.innerHTML = `<p>7-day forecast data is not available.</p>`;
    }
}

function displayConditions(weatherData) {
    const conditionCon = document.querySelector('.conditions-container');
    const condition = document.createElement('div');
    condition.className = 'condition';

    conditionCon.innerHTML = `
        <h1>Air Conditions</h1>
    `

    // Clear any existing content
    condition.innerHTML = '';

    // Data to display
    const dataToDisplay = [
        { title: 'Humidity', value: `${weatherData.currentConditions.humidity}%` },
        { title: 'Condition', value: weatherData.currentConditions.conditions },
        { title: 'Wind Speed', value: `${weatherData.currentConditions.windspeed}mph` },
        { title: 'Wind Gust', value: `${weatherData.currentConditions.windgust}mph` }

    ];

    // Dynamically create wrapper elements
    dataToDisplay.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        const title = document.createElement('h2');
        title.textContent = item.title;

        const value = document.createElement('p');
        value.textContent = item.value;

        wrapper.appendChild(title);
        wrapper.appendChild(value);
        condition.appendChild(wrapper)
        conditionCon.appendChild(condition);
    });
}



document.addEventListener('DOMContentLoaded', async () => {
    const defaultLocation = 'Miami';

    try {
        const weatherData = await fetchWeatherData(defaultLocation);
        displayWeatherData(weatherData);
    } catch (error) {
        console.error('Failed to load default location weather data for Miami', error);
    }
})

