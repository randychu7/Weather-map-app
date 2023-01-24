$(document).ready(function(){

    const weatherImages = {
        'Rain':  `<svg class="rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
        <path class="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
        <path class="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
        <path class="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
        <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
            C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
            c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z M400,256c-17.1,0-32.9-5.5-45.9-14.7
            C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
            c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
            S444.2,256,400,256z" />
        </svg>`,
        'Sunny': `<svg class="sunshine" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
        <path class="sun-full" d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z M256,336
            c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
        <path class="sun-ray-eight" d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
            C147.9,351.6,137.8,351.6,131.6,357.8z" />
        <path class="sun-ray-seven" d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
        <path class="sun-ray-six" d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
            s6.2-16.4,0-22.6L380.5,357.8z" />
        <path class="sun-ray-five" d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
        <path class="sun-ray-four" d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
            C364.1,160.4,374.2,160.4,380.4,154.2z" />
        <path class="sun-ray-three" d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
        <path class="sun-ray-two" d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
            c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
        <path class="sun-ray-one" d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
      </svg> `,
      'Clouds':  `<svg class="sun-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
      <path class="sun-half" d="M127.8,259.1c3.1-4.3,6.5-8.4,10-12.3c-6-11.2-9.4-24-9.4-37.7c0-44.1,35.7-79.8,79.8-79.8
          c40,0,73.1,29.4,78.9,67.7c11.4,2.3,22.4,5.7,32.9,10.4c-0.4-29.2-12-56.6-32.7-77.3C266.1,109,238,97.4,208.2,97.4
          c-29.9,0-57.9,11.6-79.1,32.8c-21.1,21.1-32.8,49.2-32.8,79.1c0,17.2,3.9,33.9,11.2,48.9c1.5-0.1,3-0.1,4.4-0.1
          C117.3,258,122.6,258.4,127.8,259.1z" />
          
      <path class="cloud" d="M400,256c-5.3,0-10.6,0.4-15.8,1.1c-16.8-22.8-39-40.5-64.2-51.7c-10.5-4.6-21.5-8.1-32.9-10.4
          c-10.1-2-20.5-3.1-31.1-3.1c-45.8,0-88.4,19.6-118.2,52.9c-3.5,3.9-6.9,8-10,12.3c-5.2-0.8-10.5-1.1-15.8-1.1c-1.5,0-3,0-4.4,0.1
          C47.9,258.4,0,307.7,0,368c0,61.8,50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
          c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,256,400,256z M400,448
          c-17.1,0-32.9-5.5-45.9-14.7C330.6,461.6,295.6,480,256,480c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7
          c-44.2,0-80-35.8-80-80s35.8-80,80-80c7.8,0,15.4,1.2,22.5,3.3c2.7,0.8,5.4,1.7,8,2.8c4.5-8.7,9.9-16.9,16.2-24.4
          C182,241.9,216.8,224,256,224c10.1,0,20,1.2,29.4,3.5c10.6,2.5,20.7,6.4,30.1,11.4c23.2,12.4,42.1,31.8,54.1,55.2
          c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80S444.2,448,400,448z" />
  
      <path class="ray ray-one" d="M16,224h32c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,224,16,224z" />
      <path class="ray ray-two" d="M83.5,106.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6L83.5,60.9c-6.2-6.2-16.4-6.2-22.6,0
          c-6.2,6.2-6.2,16.4,0,22.6L83.5,106.2z" />
      <path class="ray ray-three" d="M208,64c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C192,56.8,199.2,64,208,64z" />
      <path class="ray ray-four" d="M332.4,106.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0l-22.6,22.6
          c-6.2,6.2-6.2,16.4,0,22.6S326.2,112.4,332.4,106.2z" />
      <path class="ray ray-five" d="M352,208c0,8.8,7.2,16,16,16h32c8.8,0,16-7.2,16-16s-7.2-16-16-16h-32C359.2,192,352,199.2,352,208z" />
    </svg>`,
    'Clear': `<svg class="windy-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <g class="cloud-wrap">
    <path class="cloud" d="M417,166.1c-24-24.5-57.1-38.8-91.7-38.8c-34.6,0-67.7,14.2-91.7,38.8c-52.8,2.5-95,46.2-95,99.6
    c0,55,44.7,99.7,99.7,99.7c5.8,0,11.6-0.5,17.3-1.5c20.7,13.5,44.9,20.9,69.7,20.9c24.9,0,49.1-7.3,69.8-20.9
    c5.7,1,11.5,1.5,17.3,1.5c54.9,0,99.6-44.7,99.6-99.7C512,212.3,469.8,168.5,417,166.1z M412.4,333.3c-8.3,0-16.4-1.5-24-4.4
    c-17.5,15.2-39.8,23.8-63.1,23.8c-23.2,0-45.5-8.5-63-23.8c-7.6,2.9-15.8,4.4-24,4.4c-37.3,0-67.7-30.4-67.7-67.7
    c0-37.3,30.4-67.7,67.7-67.7c3.2,0,6.4,0.2,9.5,0.7c18.1-24.6,46.5-39.4,77.5-39.4c30.9,0,59.4,14.8,77.5,39.4
    c3.1-0.5,6.3-0.7,9.6-0.7c37.3,0,67.6,30.4,67.6,67.7C480,303,449.7,333.3,412.4,333.3z" />
    </g>
    <path class="wind-three" d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
    <path class="wind-two" d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
    <path class="wind-one" d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
  </svg>`

    }

    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        
        container: "map",
        style: 'mapbox://styles/randychu7/cld4u7lhq000d01o2otr7r35o',
        zoom: 10,
        center: [-98.4916, 29.4252]

        });
    // Create the starting marker and make it draggable
    let marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);

    //Marker on drag stores the long and lat inside a variable
    marker.on('dragend', function() {
    let lngLat = marker.getLngLat();
    let longitude = lngLat.lng;
    // console.log(longitude);
    let latitude = lngLat.lat;
    // console.log (latitude)


    $.get('https://api.openweathermap.org/data/2.5/forecast', {
    lat: latitude,  //Use the variable inside the api request
    lon: longitude,
    appid: keys.weather
, 
    units: 'imperial' 
    
                }).done(function(data) {
                $('.data').empty();
                for (let i = 0; i < data.list.length; i += 8) {
                    const d = new Date(`${data.list[i].dt_txt}`);
                    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    const day = weekday[d.getDay()];
                    //   console.log(data.list[i]);
                    //   console.log(data.list[i].main);
                   
                    let html =                  `
                                  
                    <div class="weather-card rain">
                    <div class = "day-week">${day}</div>
                    ${weatherImages[data.list[i].weather[0].main]}

                        <h6>${data.list[i].weather[0].main}</h6>
                        <div class = "day-info d-flex ">
                            <div class = "stat-left" style=" height: 100%; width: 50%;">
                                <div><img src = images/windspeedwhite.png" style = "width: 30px;">${data.list[i].wind.speed} mph</div>
                                <div><img src = "images/humiditywhite.png" style = "width: 30px;"> ${data.list[i].main.humidity}%</div>
                                <div><img src = "images/pressure.png" style = "width: 30px;"> ${data.list[i].main.pressure}</div>
                                </div>
                                <div class = "stat-right d-flex" style=" height: 100%; width: 50%;">
                                ${data.list[i].main.temp}°
                             </div>
                        </div>
                </div>`

                        $('.data').append(html);
}
                  }).fail(function(jqXhr, status, error) {
                    console.log(jqXhr);
                    console.log(status);
                    console.log(error);
                })});
    
    //Get weather data
    $.get('https://api.openweathermap.org/data/2.5/forecast', {
    q: "San Antonio, Texas",
    lat: 29.4252,
    lon: -98.4916,
    appid: keys.weather
, 
    units: 'imperial' 
    
  }).done(function(data) {
    $('.data').empty();
    for (let i = 0; i < data.list.length; i += 8) {
        const d = new Date(`${data.list[i].dt_txt}`);
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = weekday[d.getDay()];
   
        let html =                  `          
        <div class="weather-card rain">
        <div class = "day-week">${day}</div>
        ${weatherImages[data.list[i].weather[0].main]}

            <h6>${data.list[i].weather[0].main}</h6>
            <div class = "day-info d-flex ">
                <div class = "stat-left" style=" height: 100%; width: 50%;">
                    <div><img src = "images/windspeedwhite.png" style = "width: 30px;">${data.list[i].wind.speed} mph</div>
                    <div><img src = "images/humiditywhite.png" style = "width: 30px;"> ${data.list[i].main.humidity}%</div>
                    <div><img src = "images/pressure.png" style = "width: 30px;"> ${data.list[i].main.pressure}</div>
                    </div>
                    <div class = "stat-right d-flex" style=" height: 100%; width: 50%;">
                    ${data.list[i].main.temp}°
                 </div>
            </div>
    </div>`

            $('.data').append(html);
}
  }).fail(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
});





// On click fly to location on map
 $('#button-addon1').on('click', function(){
    let value = $('.form-control').val();
    geocode(value, keys.mapbox).then(function(result) {
    
        map.flyTo(
        {center: result,
        essential: true}
        )
           
            marker.setLngLat(result).addTo(map);


                marker.on('dragend', function() {
                let lngLat = marker.getLngLat();
                let longitude = lngLat.lng;
                // console.log(longitude);
                let latitude = lngLat.lat;


                $.get('https://api.openweathermap.org/data/2.5/forecast', {
                    lat: latitude,  //Use the variable inside the api request
                    lon: longitude,
                appid: keys.weather
                , 
                units: 'imperial' 
            }).done(function(data) {
                $('.data').empty();
                for (let i = 0; i < data.list.length; i += 8) {
                    const d = new Date(`${data.list[i].dt_txt}`);
                    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    const day = weekday[d.getDay()];
                    
                            
                                let html = `<div class="weather-card rain">
                                <div class = "day-week">${day}</div>
                                ${weatherImages[data.list[i].weather[0].main]}

                                    <h6>${data.list[i].weather[0].main}</h6>
                                    <div class = "day-info d-flex ">
                                        <div class = "stat-left" style=" height: 100%; width: 50%;">
                                            <div><img src = "images/windspeedwhite.png" style = "width: 30px;">${data.list[i].wind.speed} mph</div>
                                            <div><img src = "images/humiditywhite.png" style = "width: 30px;"> ${data.list[i].main.humidity}%</div>
                                            <div><img src = "images/pressure.png" style = "width: 30px;"> ${data.list[i].main.pressure}</div>
                                            </div>
                                            <div class = "stat-right d-flex" style=" height: 100%; width: 50%;">
                                            ${data.list[i].main.temp}°
                                         </div>
                                    </div>
                            </div>`
                        
                            $('.data').append(html);

                            
                             
    }
  }).fail(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
})});


        })});
  
     
// On Search Lookup the weather information
$('#button-addon1').on('click', function(){
  let value = $('.form-control').val();

  $.get('https://api.openweathermap.org/data/2.5/forecast', {
    q: value,
    appid: keys.weather
, 
    units: 'imperial' 
  }).done(function(data) {
    // can be used to get forecast conditions at current time in increments of 24 hours
    $('.data').empty();
    for (let i = 0; i < data.list.length; i += 8) {
    const d = new Date(`${data.list[i].dt_txt}`);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[d.getDay()];
    //   console.log(data.list[i]);
    //   console.log(data.list[i].main);
   
    let html =                  `
                                  
    <div class="weather-card rain">
    <div class = "day-week">${day}</div>
    ${weatherImages[data.list[i].weather[0].main]}

        <h6>${data.list[i].weather[0].main}</h6>
        <div class = "day-info d-flex ">
            <div class = "stat-left" style=" height: 100%; width: 50%;">
                <div><img src = "images/windspeedwhite.png" style = "width: 30px;">${data.list[i].wind.speed} mph</div>
                <div><img src = "images/humiditywhite.png" style = "width: 30px;"> ${data.list[i].main.humidity}%</div>
                <div><img src = "images/pressure.png" style = "width: 30px;"> ${data.list[i].main.pressure}</div>
                </div>
                <div class = "stat-right d-flex" style=" height: 100%; width: 50%;">
                ${data.list[i].main.temp}°
             </div>
        </div>
</div>`

        $('.data').append(html);
}
  }).fail(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
})});




















});
