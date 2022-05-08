let temperatureText = document.getElementById('temperature');
let humidityText = document.getElementById('humidity');
let windSpeedText = document.getElementById('wind-speed');
let uvIndexText = document.getElementById('uv-index');


//send the input address here
function getForm(event) {
    event.preventDefault();
    let sentAddress = document.getElementById("submitted-location").value;
    console.log(sentAddress);

}
const weatherApi = 'https://api.openweathermap.org'
const apiKey = '5233678e0f7f0fbc91ee3f82dda53af5'

let todaysForecast = document.getElementById("todays-forecast").value;
let upcomingForecast = document.getElementById("upcoming-forecast").value;

$(document).ready(function () {

    $("#location-form").submit(function (event) {
        //prevents page loading on submit
        event.preventDefault();
        let sentAddress = document.getElementById("submitted-location").value;
        //console.log(sentAddress);
        const coordsUrl = 'https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&text=' + sentAddress

        //request the coordinates for the input address
        fetch(coordsUrl,
            {
                headers: {
                    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
                }
            }
        )
            .then((res) => {
                return res.json()

            })
            .then((data) => {
                return data.features[0];
            })
            .then((feature) => {
                //console.log(feature);

                let returnedCoordinatesLon = (feature.geometry.coordinates[0]);
                let returnedCoordinatesLat = (feature.geometry.coordinates[1]);

                //console.log(returnedCoordinatesLon);
                //console.log(returnedCoordinatesLat);
                return {
                    coordsLon: returnedCoordinatesLon,
                    coordsLat: returnedCoordinatesLat
                }
            })
            .then((coords) => {
                //console.log(coords)
                let coordsLat = '';
                let coordsLon = '';
                let reqUrl = weatherApi + '/data/2.5/onecall?lat=' + coords.coordsLat + '&lon=' + coords.coordsLon + '&units=imperial&exclude=minutely,hourly&appid=' + apiKey;
                return fetch(reqUrl)
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.current);
                let humidity = data.current.humidity
                let temperature = data.current.temp;
                let windSpeed = data.current.wind_speed;
                let uvIndex = data.current.uvi;
                console.log(humidity)
                temperatureText.innerHTML = humidity;
                humidityText.innerHTML = temperature;
                windSpeedText.innerHTML = windSpeed;
                uvIndexText.innerHTML = uvIndex;

            })
            .catch((err) => {
                console.error(err);
            })
    });
});

//send the coordinates received from coordinateRequest

