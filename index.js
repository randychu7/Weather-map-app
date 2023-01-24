// $(document).ready(function(){


//     mapboxgl.accessToken = keys.mapbox;
//     let map = new mapboxgl.Map({
        
//         container: "map",
//         style: 'mapbox://styles/randychu7/cld4u7lhq000d01o2otr7r35o',
//         zoom: 10,
//         center: [-98.4916, 29.4252]

//         });
//     // Create the starting marker and make it draggable
//     let marker = new mapboxgl.Marker({draggable: true})
//     .setLngLat([-98.4916, 29.4252])
//     .addTo(map);

//     //Marker on drag stores the long and lat inside a variable
//     marker.on('dragend', function() {
//     let lngLat = marker.getLngLat();
//     let longitude = lngLat.lng;
//     // console.log(longitude);
//     let latitude = lngLat.lat;
//     // console.log (latitude)


//     $.get('https://api.openweathermap.org/data/2.5/forecast', {
//     lat: latitude,  //Use the variable inside the api request
//     lon: longitude,
//     appid: keys.weather
// , 
//     units: 'imperial' 
    
//                 }).done(function(data) {
//                 $('.data').empty();
//                 for (let i = 0; i < data.list.length; i += 8) {
//                     const d = new Date(`${data.list[i].dt_txt}`);
//                     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//                     const day = weekday[d.getDay()];
//                     //   console.log(data.list[i]);
//                     //   console.log(data.list[i].main);
                   
//                       let html =                  `<div class = "cards" style="background-color: #439eb7;"> 
//                                                         <p> <h5>${day}</h5></p>
//                                                         <p> Date: ${data.list[i].dt_txt} </p>
//                                                         <p> Status ${data.list[i].weather[0].main}.</p>
//                                                         <p> Pressure ${data.list[i].main.pressure}.</p>
//                                                         <p> Humidity ${data.list[i].main.humidity}.</p>
//                                                         <p> Temp ${data.list[i].main.temp} F.</p>
//                                                         <p> Wind ${data.list[i].wind.speed} MPH.</p>
//                                                     </div>`
                
//                                                     $('.data').append(html);
                
                                                    
                
//                     }
//                   }).fail(function(jqXhr, status, error) {
//                     console.log(jqXhr);
//                     console.log(status);
//                     console.log(error);
//                 })});
    
//     //Get weather data
//     $.get('https://api.openweathermap.org/data/2.5/forecast', {
//     q: "San Antonio, Texas",
//     lat: 29.4252,
//     lon: -98.4916,
//     appid: keys.weather
// , 
//     units: 'imperial' 
    
//   }).done(function(data) {
//     $('.data').empty();
//     for (let i = 0; i < data.list.length; i += 8) {
//         const d = new Date(`${data.list[i].dt_txt}`);
//         const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//         const day = weekday[d.getDay()];
   
//       let html =                  `<div class = "cards" style="background-color: #439eb7;"> 
//                                         <p> <h5>${day}</h5></p>
//                                         <p> Date: ${data.list[i].dt_txt} </p>
//                                         <p> Status ${data.list[i].weather[0].main}.</p>
//                                         <p> Pressure ${data.list[i].main.pressure}.</p>
//                                         <p> Humidity ${data.list[i].main.humidity}.</p>
//                                         <p> Temp ${data.list[i].main.temp} F.</p>
//                                         <p> Wind ${data.list[i].wind.speed} MPH.</p>
//                                     </div>`

//                                     $('.data').append(html);

//     }
//   }).fail(function(jqXhr, status, error) {
//     console.log(jqXhr);
//     console.log(status);
//     console.log(error);
// });





// // On click fly to location on map
//  $('#button-addon1').on('click', function(){
//     let value = $('.form-control').val();
//     geocode(value, keys.mapbox).then(function(result) {
    
//         map.flyTo(
//         {center: result,
//         essential: true}
//         )
           
//             marker.setLngLat(result).addTo(map);


//                 marker.on('dragend', function() {
//                 let lngLat = marker.getLngLat();
//                 let longitude = lngLat.lng;
//                 // console.log(longitude);
//                 let latitude = lngLat.lat;


//                 $.get('https://api.openweathermap.org/data/2.5/forecast', {
//                     lat: latitude,  //Use the variable inside the api request
//                     lon: longitude,
//                 appid: keys.weather
//                 , 
//                 units: 'imperial' 
//             }).done(function(data) {
//                 $('.data').empty();
//                 for (let i = 0; i < data.list.length; i += 8) {
//                     const d = new Date(`${data.list[i].dt_txt}`);
//                     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//                     const day = weekday[d.getDay()];
//       let html =                  `
//                                     <div class="weather-card rain">
//                                         <div class = <h5>${day}</h5></div>
//                                         <svg class="rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
//                                             <path class="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
//                                             <path class="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
//                                             <path class="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
//                                             <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
//                                                 C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
//                                                 c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z M400,256c-17.1,0-32.9-5.5-45.9-14.7
//                                                 C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
//                                                 c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
//                                                 S444.2,256,400,256z" />
//                                             </svg>
//                                             <h6>${data.list[i].weather[0].main}</h6>
//                                             <div class = "day-info">
//                                                     <div class = "stat-left"></div>
//                                                     <div class = "stat-right"></div>
//                                             </div>
//                                     </div>
      

//       <div class = "cards" style="background-color: #439eb7;"> 
//                                              <p> </p>
//                                         <p> Date: ${data.list[i].dt_txt} </p>
//                                         <p> Status ${data.list[i].weather[0].main}.</p>
//                                         <p> Pressure ${data.list[i].main.pressure}.</p>
//                                         <p> Humidity ${data.list[i].main.humidity}.</p>
//                                         <p> Temp ${data.list[i].main.temp} F.</p>
//                                         <p> Wind ${data.list[i].wind.speed} MPH.</p>
//                                     </div>`

//                                     $('.data').append(html);
//     }
//   }).fail(function(jqXhr, status, error) {
//     console.log(jqXhr);
//     console.log(status);
//     console.log(error);
// })});


//         })});
  
     
// // On Search Lookup the weather information
// $('#button-addon1').on('click', function(){
//   let value = $('.form-control').val();

//   $.get('https://api.openweathermap.org/data/2.5/forecast', {
//     q: value,
//     appid: keys.weather
// , 
//     units: 'imperial' 
//   }).done(function(data) {
//     // can be used to get forecast conditions at current time in increments of 24 hours
//     $('.data').empty();
//     for (let i = 0; i < data.list.length; i += 8) {
//     const d = new Date(`${data.list[i].dt_txt}`);
//     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const day = weekday[d.getDay()];
//     //   console.log(data.list[i]);
//     //   console.log(data.list[i].main);
   
//       let html =                  `<div class = "cards" style="background-color: #439eb7;"> 
//                                         <p> <h5>${day}</h5></p>
//                                         <p> Date: ${data.list[i].dt_txt} </p>
//                                         <p> Status ${data.list[i].weather[0].main}.</p>
//                                         <p> Pressure ${data.list[i].main.pressure}.</p>
//                                         <p> Humidity ${data.list[i].main.humidity}.</p>
//                                         <p> Temp ${data.list[i].main.temp} F.</p>
//                                         <p> Wind ${data.list[i].wind.speed} MPH.</p>
//                                     </div>`

//                                     $('.data').append(html);

                                    

//     }
//   }).fail(function(jqXhr, status, error) {
//     console.log(jqXhr);
//     console.log(status);
//     console.log(error);
// })});




















// });
