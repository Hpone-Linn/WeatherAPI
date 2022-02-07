const apikey = "ad731bc0ae274a9f887183459220502"

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

const url =(city) => `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=7`

async function getWeatherbyLocation(city){
    let response  = await fetch(url(city));
    let data = await response.json();
     
    let weather = document.createElement("div");
    weather.classList.add("row");
    weather.innerHTML=`
    <div class="col-12 col-md-6 col-lg-4">
     <div class="card">
         <h5 class="status">Today Weather Forrecast</h5>
         <h4>${data.location.name} ,${data.location.country}</h4>
          <h3><img src="https:${data.current.condition.icon}" />
         ${data.current.temp_c} c / ${data.current.temp_f} F</h3>
         <h5>
        <span>${data.current.condition.text}</span
        <span> | Wind ${data.current.wind_mph} mph</span></h5>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
     <div class="card">
         <h5 class="status">Tomorrow Weather Forrecast</h5>
         <h4>${data.location.name} ,${data.location.country}</h4>
          <h3><img src="https:${data.current.condition.icon}" />
         ${data.current.temp_c} c / ${data.current.temp_f} F</h3>
         <h5>
        <span>${data.current.condition.text}</span
        <span> | Wind ${data.current.wind_mph} mph</span></h5>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
     <div class="card">
         <h5 class="status">Today Weather Forrecast</h5>
         <h4>${data.location.name} ,${data.location.country}</h4>
          <h3><img src="https:${data.current.condition.icon}" />
         ${data.current.temp_c} C / ${data.current.temp_f} F</h3>
         <h5>
        <span>${data.current.condition.text}</span
        <span> | Wind ${data.current.wind_mph} mph</span></h5>
      </div>
    </div>
    `
    main.innerHTML="";
    main.appendChild(weather);
}

form.addEventListener("keyup", (event) => {
    event.preventDefault()
    const city = search.value;
    if(city){
        getWeatherbyLocation(city)
    }
})