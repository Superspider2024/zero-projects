const apiKey='39878118c3bd5269e808d6ffd456a339' ;
const city = 'Nairobi';
fetch(`api.openweathermap.org/data/2.5/weather?q=${city}y&APPID=${apiKey}`)
    .then(response=>{
        if(!response.ok){
            throw new Error("Network gave up on you LOL")
        }
        return response.json()

    })
    .then(data=>{
        console.log(`Everything you need heheheh:  ${data}`)
    })
    .catch(error=>{
        console.error(`to the funny error: ${error.message} lol the status ${error.status}`)
    })