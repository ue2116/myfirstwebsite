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
var cloud;
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
    img300=loadImage("../img/codes/300.png");
    img500=loadImage("../img/codes/500.png");
    img511=loadImage("../img/codes/511.png");
    img520=loadImage("../img/codes/520.png");
    img600=loadImage("../img/codes/600.png");
    img701=loadImage("../img/codes/701.png");
    img800=loadImage("../img/codes/800.png");
    img801=loadImage("../img/codes/801.png");
    img803=loadImage("../img/codes/803.png");
    img804=loadImage("../img/codes/804.png");
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
    cloud= weatherData.clouds.all;
}


function draw(){
    background(255);
    if (weatherData){
        noStroke();
        fill (0);
        textSize(24);
        text("The temperature is " +str(temperature)+" F",20,20);
        text("Humidity is at " +str(humidity)+ "%",20,50);
        text("Winds are blowing at " +str(wind)+" MPH",20,70);
        text("Clouds are at " +str(cloud)+ "%", 20, 90);
        //text("imageID: "+str(icon)+" ", 20, 80);
        //image(img803,80,80);
        
        if((icon==300) || (icon==301) || (icon==301) || (icon==302) || (icon==310) || (icon==311) || (icon==312) || (icon==313) || (icon==314) || (icon==321)){
            image(img300,180,180);
        }
        else if((icon==200) || (icon==201)|| (icon==202)|| (icon==210)|| (icon==211)|| (icon==212)|| (icon==221)|| (icon==230)|| (icon==231)|| (icon==232)){
            image(img200,180,180);
        }
        else if((icon==500) || (icon==501)|| (icon==502)|| (icon==503)|| (icon==504) || (icon==511) || (icon==521)|| (icon==522)|| (icon==531)){
            image(img500,180,180);
        } 
        else if (icon==511){
            image(img511,180,180);
        }
        else if(icon==520){
            image(img520,180,180);
        }
        else if((icon==600) || (icon==601)|| (icon==602)|| (icon==603)|| (icon==611) || (icon==612)|| (icon==615)|| (icon==616)|| (icon==620) || (icon==621) || (icon==622)){
            image(img600,180,180); 
        }
        else if((icon==701) || (icon==711)|| (icon==721)|| (icon==731)|| (icon==741) || (icon==751)|| (icon==761)|| (icon==762)|| (icon==771) || (icon==781)){
            image(img701,180,180); 
        }   
        else if(icon==800){
            image(img800,180,180);
        } 
        else if(icon==801){
            image(img801,180,180);
        } 
        else if(icon==803){
            image(img803,180,180);
        }  
        else if(icon==804){
            image(img804,180,180);
        }
    } 
}
