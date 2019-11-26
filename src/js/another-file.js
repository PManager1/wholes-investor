function initialize() {
    var input = document.getElementById('searchTextField');
    new google.maps.places.Autocomplete(input);
  }
  
google.maps.event.addDomListener(window, 'load', initialize);

console.log('another-file.js file loaded');


$(document).on('click', '.toggle',function() {
  console.log("clicked!"); 
  // alert("HI");
  // $('.pac-container').remove();
});

