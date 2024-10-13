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
        console.log(`Everything you need heheheh:  ${data}`)
    })
    .catch(error=>{
        console.error(`to the funny error: ${error.message}`)
    })

const temperatureKelvin = data.main.temp;
const temperatureCelsius = temperatureKelvin - 273.15; 
const description = data.weather[0].description;
const rain = data.rain ? data.rain['1h'] || 0 : 0; 
const humidity = data.main.humidity; 
const cityName = data.name; 
