const search = document.querySelector('.search-location');
const city = document.querySelector('.search-location input');
// const city = document.querySelector('.form-control');
const cityName = document.querySelector('.card-body h5');
// const city = document.querySelector('.card-title');
const cardBody = document.querySelector('.card-body');
const weatherDetails = document.querySelector('.card-rounded');
const timeImage = document.querySelector('.card-rounded img');
// const timeImage = document.querySelector('.card-img-top');

const Celcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}





updateWeather = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon
    // cityName.innerHTML = city.name;
    weatherDetails.innerHTML = `
    <div class="col-lg-6 mt-1 ">
    <div class="card-rounded" style="width: 18rem; margin-left: 70px; margin-top: 120px;">
          <div class="card-body" style="position: relative; font-family:'Poppins', sans-serif;">
            <h5 class="card-title" style="position: absolute; bottom: 150%; left: 35%; color:white;">${city.name}</h5>
            <div class="row">
            <div class="col">
            <p class="card-text ms-2" style="color: white; font-size: 60px; font-family: 'Montserrat', sans-serif;">${Celcius(city.main.temp)}C</p>
          </div>
          <div class="col">
            <p class="text-center mt-4" style="font-family:'Poppins', sans-serif; color: white;">${city.weather[0].description}</p>
          </div>
          </div>
          </div>
            <div class="row text-center" style="color: white;">
              <div class="col">
                <p style="font-family:'Poppins', sans-serif ;">Feels like:</p>
              </div>
              <div class="col">
                <p style="font-family:'Montserrat', sans-serif ;">${Celcius(city.main.feels_like)}<sup>C</sup></p>
              </div>
            </div>
            <div class="row text-center" style="color: white;">
              <div class="col">
                <p style="font-family: 'Poppins', sans-serif;">Humidity:</p>
              </div>
              <div class="col">
                <p style="font-family: 'Montserrat', sans-serif;">${city.main.humidity}%</p>
              </div>
            </div>
            </div>
            `;

}

// add event listener to form
search.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = city.value.trim();
    console.log(citySearched);
    search.reset();

    requestCity(citySearched)
        .then((data) => {
            updateWeather(data);
        })
        .catch((error) => {
            console.log(error);
        })
    
})



