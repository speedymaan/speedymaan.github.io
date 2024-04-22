// Initialize the map
var map = L.map("map").setView([51.505, -0.09], 13); // Adjust center and zoom as needed

// Add the TinyWorld layer
new L.GridLayer.TinyWorld().addTo(map);
