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
var img200;
var img201;
var img202;
var img210;
var img211;
var img212;
var img221;
var img230;
var img231;
var img232;
var img300;
var img301;
var img302;
var img310;
var img311;
var img312;
var img313;
var img314;
var img321;
var img500;
var img501;
var img502;
var img503;
var img504;
var img511;
var img520;
var img521;
var img522;
var img531;
var img600;
var img601;
var img602;
var img603;
var img611;
var img612;
var img615;
var img616;
var img620;
var img621;
var img622;
var img701;
var img711;
var img721;
var img731;
var img741;
var img751;
var img761;
var img762;
var img771;
var img781;
var img800;
var img801;
var img803;
var img804;

function setup(){
    createCanvas (800,800);
    button = select('#submit');
    city= select('#city');
    button.mousePressed(queryAPI);
    img300=loadImage("../img/codes/300.png");
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
        image(img,80,80);
    } 
}
