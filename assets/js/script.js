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

function getWeather(loc) {
    let coordsLat = '';
    let coordsLon = '';
    let reqUrl = weatherApi + '/data/2.5/onecall?lat=' + coordsLat + '&lon=' + coordsLon + '&units=imperial&exclude=minutely,hourly&appid=' + apiKey;
}

$(document).ready(function(){

    $("#location-form").submit(function(event) {
        //prevents page loading on submit
        event.preventDefault();
        let sentAddress = document.getElementById("submitted-location").value;
        //console.log(sentAddress);


        //request the coordinates for the input address
        var coordinateRequest = new XMLHttpRequest();

        coordinateRequest.open('GET', 'https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&text=' + sentAddress);

        coordinateRequest.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

        coordinateRequest.onreadystatechange = function() {
            if (this.readyState === 4) {
                // console.log("Body", this.responseText);
                let response = this.responseText;
                let answer = JSON.stringify(response.features.geometry.coordinates);
                console.log(answer);
                //console.log("answer", JSON.stringify(response));
                // console.log(answer.split('"bbox": [').pop().split("]")[2]);
                // let earlyCoordinates = answer.split('"bbox": [').pop().split("]" )[2];
                // console.log(earlyCoordinates);
                // let almostReadyCoordinates = earlyCoordinates.slice(
                //     earlyCoordinates.indexOf("["),
                //     earlyCoordinates.lastIndexOf(""),
                // )
                // console.log(almostReadyCoordinates);

                // let nearlyReadyCoordinates = almostReadyCoordinates.slice(1);
                // console.log(nearlyReadyCoordinates);

                // let coordinatesArray = nearlyReadyCoordinates.split(",");
                // console.log(coordinatesArray);

                // coordinatesArray.splice(0, 1);
                // coordinatesArray.splice(2);

                // readyCoordinates = coordinatesArray.join(",")
                // console.log(readyCoordinates);
                
            
                //$("#directions-text").text("Starting Location: " + readyCoordinates + ". Ending Location: 39.108608,-84.3022336");

                
                //answer.indexOf("bbox")


                //beginning of directions
                //var request = new XMLHttpRequest();


                //send the receivedCoordinates from coordinateRequest here
                //request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=' + readyCoordinates + '&end=39.108608,-84.3022336');

                //request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ea1ed0d62b14f15830ccc2be6e3572b&start=8.681495,49.41461&end=8.687872,49.420318');


               

                //request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

                //request.onreadystatechange = function () {
                //if (this.readyState === 4) {
                    //console.log('Status:', this.status);
                    //console.log('Headers:', this.getAllResponseHeaders());
                    //console.log('Body:', this.responseText);
                    // let response2 = this.responseText;
                    // let answer2 = JSON.stringify(response2);

                    // let directions = answer2.split('"segments": [').pop().split('"summary":' )
                    // console.log(directions);

                    //$("#directions-text").text(directions);



                    //}
                //};
                //request.send();
                }
            };
        coordinateRequest.send();
    })
});

//send the coordinates received from coordinateRequest
let receivedCoordinates = '';

