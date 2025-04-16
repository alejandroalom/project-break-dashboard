document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "80279496328f400cbff164801251604";
    const city = "Santa Cruz de Tenerife";

    // Función para obtener el clima desde la API
    async function obtenerClima() {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);
            const data = await response.json();

            mostrarClima(data);
            mostrarPrevision(data.forecast.forecastday[0].hour);
        } catch (error) {
            const weatherDiv = document.getElementById("weather-info");
            if (weatherDiv) {
                weatherDiv.textContent = "Error al obtener el clima.";
            }
            console.error("Error en la API del tiempo:", error);
        }
    }

    // Función para mostrar la información del clima actual
    function mostrarClima(data) {
        const weatherDiv = document.getElementById("weather-info");
        if (weatherDiv) {
            weatherDiv.innerHTML = `
                <h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
                <p><strong>${data.current.condition.text}</strong></p>
                <img src="https:${data.current.condition.icon}" alt="icono del clima" />
                <p>🌡️ ${data.current.temp_c}°C</p>
                <p>💧 Humedad: ${data.current.humidity}%</p>
                <p>🌬️ Viento: ${data.current.wind_kph} km/h</p>
            `;
        } else {
            console.error("Elemento 'weather-info' no encontrado.");
        }
    }

    // Función para mostrar la previsión del clima por horas
    function mostrarPrevision(horas) {
        const forecastDiv = document.getElementById("forecast");
        if (!forecastDiv) {
            console.error("Elemento 'forecast' no encontrado.");
            return;
        }

        forecastDiv.innerHTML = "<h3>Previsión por horas</h3>";

        const horasFiltradas = horas.filter(h => {
            const horaActual = new Date().getHours();
            const horaDato = new Date(h.time).getHours();
            return horaDato >= horaActual && horaDato <= horaActual + 5;
        });

        horasFiltradas.forEach(h => {
            forecastDiv.innerHTML += `
                <div class="hora">
                    <p><strong>${h.time.split(" ")[1]}</strong></p>
                    <img src="https:${h.condition.icon}" alt="icono" />
                    <p>${h.temp_c}°C</p>
                </div>
            `;
        });
    }

    // Llamamos a la función para obtener el clima
    obtenerClima();
});

  

  


