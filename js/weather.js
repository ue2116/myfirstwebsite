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
var img300;
var img500;
var img511;
var img520;
var img600;
var img701;
var img800;
var img801;
var img803;
var img804;

function setup(){
    createCanvas (800,800);
    button = select('#submit');
    city= select('#city');
    button.mousePressed(queryAPI);
    img200=loadImage("../img/codes/200.png");
    img201=loadImage("../img/codes/201.png");
    img202=loadImage("../img/codes/202.png");
    img210=loadImage("../img/codes/210.png");
    img211=loadImage("../img/codes/211.png");
    img212=loadImage("../img/codes/212.png");
    img221=loadImage("../img/codes/221.png");
    img230=loadImage("../img/codes/230.png");
    img231=loadImage("../img/codes/231.png");
    img232=loadImage("../img/codes/232.png");
    img300=loadImage("../img/codes/300.png");
    img301=loadImage("../img/codes/301.png");
    img302=loadImage("../img/codes/302.png");
    img310=loadImage("../img/codes/310.png");
    img311=loadImage("../img/codes/311.png");
    img312=loadImage("../img/codes/312.png");
    img313=loadImage("../img/codes/313.png");
    img314=loadImage("../img/codes/314.png");
    img321=loadImage("../img/codes/321.png");
    img500=loadImage("../img/codes/500.png");
    img501=loadImage("../img/codes/501.png");
    img502=loadImage("../img/codes/502.png");
    img503=loadImage("../img/codes/503.png");
    img504=loadImage("../img/codes/504.png");
    img511=loadImage("../img/codes/511.png");
    img520=loadImage("../img/codes/520.png");
    img521=loadImage("../img/codes/521.png");
    img522=loadImage("../img/codes/522.png");
    img531=loadImage("../img/codes/531.png");
    img600=loadImage("../img/codes/600.png");
    img601=loadImage("../img/codes/601.png");
    img602=loadImage("../img/codes/602.png");
    img603=loadImage("../img/codes/603.png");
    img611=loadImage("../img/codes/611.png");
    img612=loadImage("../img/codes/612.png");
    img615=loadImage("../img/codes/615.png");
    img616=loadImage("../img/codes/616.png");
    img620=loadImage("../img/codes/620.png");
    img621=loadImage("../img/codes/621.png");
    img622=loadImage("../img/codes/622.png");
    img701=loadImage("../img/codes/701.png");
    img711=loadImage("../img/codes/711.png");
    img721=loadImage("../img/codes/721.png");
    img731=loadImage("../img/codes/731.png");
    img741=loadImage("../img/codes/741.png");
    img751=loadImage("../img/codes/751.png");
    img761=loadImage("../img/codes/761.png");
    img762=loadImage("../img/codes/762.png");
    img771=loadImage("../img/codes/771.png");
    img781=loadImage("../img/codes/781.png");
    img800=loadImage("../img/codes/800.png");
    img801=loadImage("../img/codes/801.png");
    img803=loadImage("../img/codes/803.png");
    img804=loadImage("../img/codes/804.png");
    //imageicon=loadImage("../img/codes/"+icon+".png");
   
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
        //image(img803,80,80);
        
        if(icon=300 || icon=301){
            image(img300,80,80);
        }
        else if (icon=200){
            image(img200,80,80);
        }
        
    } 
}
