const apikey="20c6edef22fd9e7523a0071fd4f6842f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let card = document.querySelector(".card");
const d = new Date();
let currentTime = d.toLocaleTimeString();
const currentDate = d.toLocaleDateString();

async function checkWeather(city) {
    let response =await fetch(apiUrl+city+ `&appid=${apikey}`);
    let data = await response.json();  // json: javascript object notation
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+'°c';
    document.querySelector(".humidity").innerHTML=data.main.humidity+' %';
    document.querySelector(".wind").innerHTML= data.wind.speed+' Km/hr.';    

    if(data.weather[0].main=='Clouds')
        {
            weatherIcon.src="images/clouds.png"
           card.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR160-11XPOkVq7u1lMiliqPM0XUtjCss31fA&s')"
        }
        else if(data.weather[0].main=='Snow')
            {
                weatherIcon.src="images/snow.png"
                card.style.backgroundImage="url('https://media.tenor.com/CXZZ24l_jy0AAAAM/mountain-winter.gif')";
            }
        else if(data.weather[0].main=='Drizzle')
                {
                    weatherIcon.src="images/drizzle.png"
                    card.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lfc_aYZa5JK8GCbbdlu1Ca4E0ryxLLctUA&s')";
                }
        else if(data.weather[0].main=='Clear')
                    {
                        weatherIcon.src="images/clear.png"
                        card.style.backgroundImage="url('https://media2.giphy.com/media/0Styincf6K2tvfjb5Q/200w.gif?cid=6c09b952c9agj68ubrfaxuosw93186p3zsznmpjnd6rcmbuv&ep=v1_gifs_search&rid=200w.gif&ct=g')";
                    }
        else if(data.weather[0].main=='Rain')
                    {
                        weatherIcon.src="images/rain.png";
                        card.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjZV0UMayU9UfKZmvoHBCNO-ljHqP5qQ-WQ&s')";
                    }
        else if(data.weather[0].main=='Mist')
                        {
                            weatherIcon.src="images/mist.png"
                            card.style.backgroundImage="url('https://cdn.pixabay.com/animation/2023/03/05/12/05/12-05-54-62_512.gif')";
                        }
        else if(data.weather[0].main=='Smoke')
                            {
                                weatherIcon.src="images/smoke.png"
                                card.style.backgroundImage="url('https://media.tenor.com/aDNXJUG35UoAAAAM/clouds-dark-skies.gif')";
                            }
        else if(data.weather[0].main=='Haze')
                                {
                                    weatherIcon.src="images/haze.png"
                                    card.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGgGZD_Ldr5nKTNb-Gds92ZJc-Xle7a6ytw&s')";
                                }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".date").innerHTML = currentDate;
    document.querySelector(".time").innerHTML = currentTime;
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keydown',(event)=>{
    if(event.key === "Enter")
        {
            checkWeather(searchBox.value);
        }
})


