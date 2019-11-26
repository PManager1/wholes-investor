function initialize() {
    var input = document.getElementById('searchTextField');
    new google.maps.places.Autocomplete(input);
  }
  
google.maps.event.addDomListener(window, 'load', initialize);

console.log('another-file.js file loaded');

