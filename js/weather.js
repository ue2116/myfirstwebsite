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
    img200=loadImage("../img/codes/300.png");
    img201=loadImage("../img/codes/300.png");
    img202=loadImage("../img/codes/300.png");
    img210=loadImage("../img/codes/300.png");
    img211=loadImage("../img/codes/300.png");
    img212=loadImage("../img/codes/300.png");
    img221=loadImage("../img/codes/300.png");
    img230=loadImage("../img/codes/300.png");
    img231=loadImage("../img/codes/300.png");
    img232=loadImage("../img/codes/300.png");
    img300=loadImage("../img/codes/300.png");
    img301=loadImage("../img/codes/300.png");
    img302=loadImage("../img/codes/300.png");
    img310=loadImage("../img/codes/300.png");
    img311=loadImage("../img/codes/300.png");
    img312=loadImage("../img/codes/300.png");
    img313=loadImage("../img/codes/300.png");
    img314=loadImage("../img/codes/300.png");
    img321=loadImage("../img/codes/300.png");
    img500=loadImage("../img/codes/300.png");
    img501=loadImage("../img/codes/300.png");
    img502=loadImage("../img/codes/300.png");
    img503=loadImage("../img/codes/300.png");
    img504=loadImage("../img/codes/300.png");
    img511=loadImage("../img/codes/300.png");
    img520=loadImage("../img/codes/300.png");
    img521=loadImage("../img/codes/300.png");
    img522=loadImage("../img/codes/300.png");
    img531=loadImage("../img/codes/300.png");
    img600=loadImage("../img/codes/300.png");
    img601=loadImage("../img/codes/300.png");
    img602=loadImage("../img/codes/300.png");
    img603=loadImage("../img/codes/300.png");
    img611=loadImage("../img/codes/300.png");
    img612=loadImage("../img/codes/300.png");
    img615=loadImage("../img/codes/300.png");
    img616=loadImage("../img/codes/300.png");
    img620=loadImage("../img/codes/300.png");
    img621=loadImage("../img/codes/300.png");
    img622=loadImage("../img/codes/300.png");
    img701=loadImage("../img/codes/300.png");
    img711=loadImage("../img/codes/300.png");
    img721=loadImage("../img/codes/300.png");
    img731=loadImage("../img/codes/300.png");
    img741=loadImage("../img/codes/300.png");
    img751=loadImage("../img/codes/300.png");
    img761=loadImage("../img/codes/300.png");
    img762=loadImage("../img/codes/300.png");
    img771=loadImage("../img/codes/300.png");
    img781=loadImage("../img/codes/300.png");
    img800=loadImage("../img/codes/300.png");
    img801=loadImage("../img/codes/300.png");
    img803=loadImage("../img/codes/300.png");
    img804=loadImage("../img/codes/300.png");
    imageicon = loadImage("../img/imgs/"+icon+".png");
   
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
        image(imageicon,80,80);
    } 
}
