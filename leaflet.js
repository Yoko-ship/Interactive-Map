var map = L.map('map').setView([41.2995,69.2401], 13) //TODO Координаты города
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(map)
var marker = L.marker([41.2995,69.2401,]).addTo(map) //TODO: Добавление маркера


var marker2 = L.marker([41.438592, 69.532664]).addTo(map)
marker2.bindPopup('This the where i am studying(i actully hate to go to that place)')


var tashkent = L.marker([41.311791, 69.279699]).addTo(map)
tashkent.bindPopup("It's the Tashkent,the capital of Uzbekistan").openPopup()
var home = L.marker([41.308725, 69.229655]).addTo(map)
// home.bindPopup('This is my home')

var circle = L.circle([41.2885,69.2201],{      //TODO: Добавоение circle
    color: 'red',                       
    // fillColor: '#f03',
    // fillOpacity: 0.5,
    radius: 800
}).addTo(map)
var redFlag = L.circle([41.280612, 69.195457],{
    color: 'black',
    fillColor: 'black',
    fillOpacity: 0.7,
    radius: 500
}).addTo(map)
redFlag.bindPopup('Тут не возможно находиться после 3,(много народа)')

// var poligon = L.polygon([
//     [41.2865,69.2215],
//     [41.2885,69.2201]
// ]).addTo(map)  

marker.bindPopup('Hello').openPopup();
circle.bindPopup('This is the cirle') // TODO: Отображает то что ты написал(допустим)


// function mapClicked(e){
//     alert("You clicked me " + e.latlng); //TODO: Функция клика
// }
// map.on('click',mapClicked)

var popup = L.popup()
function mapClicked(e){
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng)
    .openOn(map)
}
map.on('click',mapClicked)

var div = document.querySelector('.down');
var btn = document.querySelector('.users');
var circleButton = document.querySelector('.circle');


btn.addEventListener('click',()=>{
        var inputLat = document.createElement('input');
        inputLat.type = 'text';
        inputLat.placeholder = "Latitude"
        div.appendChild(inputLat)
        
        var inputLng = document.createElement('input');
        inputLng.type = "text"
        inputLng.placeholder = "Longitude"
        div.appendChild(inputLng);
    
        var push = document.createElement('button');
        push.innerText = "Confirm"
        div.appendChild(push)
        
        push.addEventListener('click',()=>{
            var lat = parseFloat(inputLat.value);
            var lng = parseFloat(inputLng.value);
            if(!isNaN(lat) && !isNaN(lng)){
                var usersMarker = L.marker([lat,lng]).addTo(map)
            }else{
                alert("Something went wrong(You have to write coordinates)")
            }
        })
        

    })

circleButton.addEventListener('click',()=>{
    var circleinputLat = document.createElement('input')
    circleinputLat.type = 'text';
    circleinputLat.placeholder = 'Latitude';
    div.appendChild(circleinputLat);

    var circleinputLng = document.createElement('input');
    circleinputLng.type = 'text';
    circleinputLng.placeholder = "Longitude";
    div.appendChild(circleinputLng)
    
    var color = document.createElement('input');
    color.type = 'text';
    color.placeholder = "Color";
    div.appendChild(color)

    var radius = document.createElement('input');
    radius.type = 'text';
    radius.placeholder = 'Radious';
    div.appendChild(radius)

    var confirmBtn = document.createElement('button')
    confirmBtn.innerText = "Confirm";
    div.appendChild(confirmBtn)

    confirmBtn.addEventListener('click',()=>{
        var Lat = parseFloat(circleinputLat.value);
        var Lng = parseFloat(circleinputLng.value);
        var colors = color.value;
        var rad = radius.value
        if(!isNaN(Lat) && !isNaN(Lng) && !isNaN(colors && !isNaN(rad))){
            var userCircle = L.circle([Lat,Lng],{
                color: colors,
                radius: rad
            }).addTo(map)
        }
    })
})