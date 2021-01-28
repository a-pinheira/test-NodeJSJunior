//variável
var map;
function initMap() {
    //Constructor creates a new map - onlu center and zoom are required
    map = new google.maps.Map(document.getElementById('map'), {
        //o centro é a latitude e a longitude
        center: {
            lat: 40.7413549, lbg: -73.9980244},
            zoom: 13
    });
  
}
