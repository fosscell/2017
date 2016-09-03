(function mapConfig($, undefined) {
    'use strict';
    var map = L.map('map').setView([11.32144, 75.93503], 17);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'spechide.p43f3690',
        accessToken: 'pk.eyJ1Ijoic3BlY2hpZGUiLCJhIjoiY2lqbG5oNGV6MDAzbnZhbHgyZ2o1YWQ4dyJ9.agGZWcjZlV_5GH0EmVS4qw'
    }).addTo(map);
    
    var marker = L.marker([11.319972, 75.932684]).addTo(map);
    
    marker.bindPopup("<b>National Institute of Technology</b><br>Calicut, Kerala");
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
    marker.on('mouseout', function (e) {
        this.closePopup();
    });
}(jQuery));