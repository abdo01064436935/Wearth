// var apiKey ="bfb502fcaa8e4488906235113241412"
var row = document.querySelector(".row");

var recSearch = document.querySelector("#recSearch")


var globalDay;



get("egypt")
async function get(wearth){
    var res = await fetch(`http://api.weatherapi.com/v1/search.json?key=bfb502fcaa8e4488906235113241412&q=${wearth}`);
     res = await res.json();
     
    
    displayRec(res)
    displayday();
   
    
}



















recSearch.addEventListener("input" , function(e){
    get(e.target.value)
   
   
})



function displayRec(arr){
    cartoona = "";
    for(var i =0 ; i < arr.length ; i++ ){
        cartoona += `<div class="col-md-4 ">
                    <div class="bar d-flex justify-content-between w-100">
                        <p></p>
                        <p>16December</p>
                    </div>
                    <p class="py-4">${arr[i].name}</p>
                    <h1 class="text-white">${arr[i].lat}</h1>
                    <img src="images/113.png" class="px-3" alt="#">
                    <p class="clear">clear</p>

                 <div class="con d-flex justify-content-evenly w-75">
                    <div class="weather d-flex">
                        <div class="image">
                         <img src="images/icon-umberella.png"  alt="">
                        </div>
                         <p class="ps-1">20%</p>
                     </div>
                     <div class="weather d-flex">
                         <div class="image">
                          <img src="images/icon-wind.png"  alt="">
                         </div>
                          <p class="ps-1">18km/h</p>
                      </div>
                      <div class="weather d-flex">
                         <div class="image">
                          <img src="images/icon-compass.png"  alt="">
                         </div>
                          <p class="ps-1">East</p>
                      </div>
                 </div>

                </div>

                <div class="col-md-5">
                    <div class="bar2 text-center py-1 ">
                        <p>Tuesday</p>
                    </div>

                    <div class="layer m-auto mt-5 w-25 d-flex flex-column justify-content-center align-items-center">
                        <img src="images/113.png" alt="">
                        <h2 class="text-white">${arr[i].lon}</h2>
                        <p>13.1o</p>
                        <p class="sunny">Sunny</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bar3 py-1 text-center">
                        <p>Wednesday</p>
                       

                    </div>
                    <div class="layer m-auto mt-5 text-center d-flex flex-column justify-content-center align-items-center w-25 ">
                        <img src="images/116.png" alt="">
                        <h2 class="text-white">22.2oC</h2>
                        <p>13.1o</p>
                        <p class="sunny">Sunny</p>
                    </div>
                    

                </div>
              
              
            </div>`
    }

    row.innerHTML = cartoona;
  

}


function displayday(){
    var date = new Date("2024-12-17");
    var daysofweak = ["Sunday","Monday","Thusday","Wednesday","Thursday","Friday","Saturday"];
    var daysofweak = daysofweak[date.getDay()];

    globalDay = daysofweak ;
   
  
   
    
}



