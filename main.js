//getting the weather data using API stuff
const apiKey='39878118c3bd5269e808d6ffd456a339' ;
const city = 'Nairobi';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
    .then(response=>{
        if(!response.ok){
            throw new Error(`Network gave up on you LOL:${response.status}`)
        }
        return response.json()

    })
    .then(data=>{
        console.log(`Everything you need heheheh: temperature:${data.main.temp-273.15} rain:${data.rain?data.rain['1h'] || 0:0}  humidity:${data.main.humidity}  place:${data.name}`)
    })
    .catch(error=>{
        console.error(`to the funny error: ${error.message}`)
    })
//I guess getting the necessary data and parsing
const temperatureKelvin = data.main.temp;
const temperatureCelsius = temperatureKelvin - 273.15; 
const description = data.weather[0].description;
const rain = data.rain ? data.rain['1h'] || 0 : 0; 
const humidity = data.main.humidity; 
const cityName = data.name; 
//displaying data

const temp1=document.getElementById('temp1');
const rain1=document.getElementById('rain1');
const hum1 = document.getElementById('hum1')


temp1.textContent = `${temperatureCelsius}°C`
rain1.textContent = `${rain}ml`
hum1.textContent=`${humidity}RH`
