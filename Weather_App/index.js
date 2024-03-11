
const input=document.getElementById("input");
const card=document.getElementById("card");
const city=document.getElementById("city");
const temper=document.getElementById("temperature");
const humidity=document.getElementById("humidity");
const display=document.getElementById("display");
let weatheremoji=document.getElementById("weatheremoji");
const errorDisplay=document.getElementById("errorDisplay");
const apikey="559d683819a35fbac7707132fbc298d0";
const search=document.getElementById("search");
search.addEventListener("click", ()=>{
    const location=input.value;
    if(location)
    {
        return started(location);
        // console.log("click");
    }
    else{
        return errordisplay();
    }
});
function started(location)
{
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            card.style.display="block";
            show(data);
            Humidity(data);
            temperature(data.main.temp);
            description(data.weather[0].description);
            icon(data.weather[0].id);
        })
        .catch(error => {
            card.style.display="none";
            return window.alert("Enter the Correct City Name");
            // console.error('Error fetching weather data:', error);
        });
}
function show(data){
    city.textContent=data.name;
}
function Humidity(data)
{
    humidity.textContent=`Humidity:${data.main.humidity}%`;
}
function temperature(K)
{
    let f=Math.floor((K-273.15)*(9/5)+32);
    temper.textContent=`${f}°F`;
}
function description(descr)
{
    display.textContent=descr
    // console.log(descr);
    // display.textContent=descr;
}
function icon(id)
{
    // weatheremoji.src="https://openweathermap.org/img/wn/10d@2x.png";
    if(id>=200 && id<=232)
    {
        weatheremoji.textContent="⛈️";
    }
    else if(id>=300 && id<=321)
    {
        weatheremoji.textContent="🌧️";
    }
    else if(id>=500 && id<=531)
    {
        weatheremoji.textContent="☔️";
    }
    else if(id>=600 && id<=622)
    {
        weatheremoji.textContent="❄️";
    }
    else if(id>=701 && id<=781)
    {
        weatheremoji.textContent="⛅️";
    }
    else if(id>=801 && id<=804)
    {
        weatheremoji.textContent="☁️";
    }
    else{
        weatheremoji.textContent="🌤️";
    }
    // console.log(id);
}
function errordisplay()
{
    card.style.display="block";
    city.textContent="";
    temper.textContent="";
    humidity.textContent="";
    display.textContent="";
    weatheremoji.textContent="";
    errorDisplay.style.display="block";
    errorDisplay.style.fontSize="3rem";
    errorDisplay.textContent="Please Enter the City";
}

//  started();