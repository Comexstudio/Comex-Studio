function iniciarMap(){
    var coord = {lat: 10.1637385,lng: -85.4673743};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}