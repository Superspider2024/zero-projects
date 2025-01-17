//setting fundamental global variables for DOM

const temp1=document.getElementById('temp1');
const rain1=document.getElementById('rain1');
const hum1 = document.getElementById('hum1');
const image =document.getElementById('image');
const place = document.getElementById('place');
const search = document.getElementById('search')

//the search carries everything bro

search.addEventListener('click',()=>{
    //getting the weather data using API stuff

const apiKey='39878118c3bd5269e808d6ffd456a339' ;
const city = place.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
    .then(response=>{
        if(!response.ok){
            throw new Error(`Network gave up on you LOL:${response.status}`)
        }
        return response.json()

    })
    .then(data=>{

        //parsing and receiving the data

        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(0); 
        const description = data.weather[0].description;
        const rain = data.rain ? data.rain['1h'] || 0 : 0; 
        const humidity = data.main.humidity; 
        const cityName = data.name; 

        //debugging

        console.log(`Everything you need heheheh: temperature:${data.main.temp-273.15} rain:${data.rain?data.rain['1h'] || 0:0}  humidity:${data.main.humidity}  place:${data.name}`)

        //displaying content
        temp1.textContent = `${temperatureCelsius}°C`
        rain1.textContent = `${rain}ml`
        hum1.textContent=`${humidity}RH`

        //image selector
        decImage(data);
    })
    .catch(error=>{
        console.error(`to the funny error: ${error.message}`)
    })


})


const decImage=(data)=>{
    if(data.main.temp >=(26+273.15)){
        if((data.rain ? data.rain['1h'] || 0 : 0)>=8){
            image.src='images/cloud.png'
        }else{
            image.src='images/hot-temperature.png'
        }

    
    }else if(data.main.temp>=(20+273.15)){
        if((data.rain ? data.rain['1h'] || 0 : 0)>=8){
            image.src='images/cloud.png'
        }else{
            image.src='images/medium.png'
        }
        

    }else if(data.main.temp>=(18+273.15)){
        if((data.rain ? data.rain['1h'] || 0 : 0)>=8){
            image.src='images/cloud.png'
        }else{
            image.src='images/low.png'
        }
        
    }else{
        if((data.rain ? data.rain['1h'] || 0 : 0)>=8){
            image.src='images/water-cooler.png'
        }else{
            image.src='images/temperature.png'
        }
    }

    }




