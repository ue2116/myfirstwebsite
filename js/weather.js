var apiKey = '16aa59b08bf9e7a583f26ed66730449e';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city; 
var units = 'imperial';
var weatherData;
var temperature = 0;
var humidity = 0; 
var button;
var icon;
var wind;
var imageicon;
var img;



function setup(){
    createCanvas (800,800);
    button = select('#submit');
    city= select('#city');
    button.mousePressed(queryAPI);
    img=loadImage("../img/codes/300.png");
    //imageicon = loadImage("../img/imgs/"+icon+".png");
   
}

window.onload = function () {
    icon = document.getElementById("icon");
}

function update(weather) {
    icon.src = "imgs/codes/" + weather.icon + ".png"
    console.log(icon.src);
}


function queryAPI(){
     var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(query, getweatherData);
}

function getweatherData(apiData){
    weatherData = apiData;
    temperature= weatherData.main.temp;
    humidity= weatherData.main.humidity;
    console.log(weatherData);
    wind=weatherData.wind.speed;
    icon = weatherData.weather[0].id;
}


function draw(){
    background(255);
    if (weatherData){
        noStroke();
        fill (0);
        text("Temperature: " +str(temperature)+" F",20,20);
        text("Humidity: "+ str(humidity)+ "%",20,40);
        text("Wind: " +str(wind)+" MPH",20,60);
        text("imageID: "+str(icon)+" ", 20, 80);
        image(img,0,0);
    } 
}
