document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "ce0d655e931b2ec0335393dc6bd708d8"; // Replace with your OpenWeatherMap API key

    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("city");
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    searchBtn.addEventListener("click", () => {
        const cityName = cityInput.value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                location.textContent = `Location: ${data.name}, ${data.sys.country}`;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                location.textContent = "City not found";
                temperature.textContent = "";
                description.textContent = "";
            });
    });
    cityInput.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            const cityName = cityInput.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
                    temperature.textContent = `Temperature: ${data.main.temp}°C`;
                    description.textContent = `Description: ${data.weather[0].description}`;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    location.textContent = "City not found";
                    temperature.textContent = "";
                    description.textContent = "";
                });
        }
    });
});
