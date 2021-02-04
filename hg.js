class UI {
  constructor() {
    this.uiContainer = document.getElementById("data.hp");
    this.city;
    this.defaultCity = "London";
  }











  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

//var tempcl =Math.floor(data.main.temp - 273.15);
//var tempmicl =Math.floor(data.main.temp_min - 273.15);
//var tempmxcl =Math.floor(data.main.temp_max - 273.15);
//var tempflcl =Math.floor(data.main.feels_like - 273.15);

var tempcl = data.main.temp;
var tempmicl = data.main.temp_min;
var tempmxcl = data.main.temp_max;
var tempflcl = data.main.feels_like;


var humi = data.main.humidity;
var winspd = data.wind.speed;
var windeg = data.wind.deg;
var icn = data.weather[0].icon;


    this.uiContainer.innerHTML = `
        
        
        
        <center>
    <br><br><br><br>
      <div class="card big_card">
        <div class="card-body info_crd">
        
          <p class="city">${data.name}<span class="state">, ${data.sys.country}</span></p>    
          <p class="temp">${tempcl}<br>°C</p><br>
          <p class="fls_lik info_txts">Feels Like: ${tempflcl} °C</p>
          <div class="day flex_box info_txts" id="min_max"><p class="max_tmpr tmprt">Min: ${tempmicl} °C  </p><p  class="min_tmpr tmprt">Max: ${tempmxcl} °C</div><br>
          <div class="icon__info">
         <p><img class="info_icnn" src="api-icons/icons/${icn}.png" alt="${data.weather[0].main}@2x.png"/></p>
          <p class="info_txts">Weather Condition: ${data.weather[0].description}</p>
          </div>
          <p class="info_txts">Humidity: ${humi} %</p>
          <p class="info_txts">Wind Speed: ${winspd} meter/s<br> Wind Direction: ${windeg}°</p>
        </div>
      </div>
    
    </center>





        
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
