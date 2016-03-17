// JavaScript Document
	var icon = new google.maps.MarkerImage("resources/images/icon.png",
    new google.maps.Size(100, 100), new google.maps.Point(0, 0),
    new google.maps.Point(16, 32));
    var center = null;
    var map = null;
    var currentPopup;
    var bounds = new google.maps.LatLngBounds();
    function addMarker(lat, lng, info) {
    var pt = new google.maps.LatLng(lat, lng);
    bounds.extend(pt);
	var marker = new google.maps.Marker({
	position: pt,
	icon: icon,
	map: map
	});
	var popup = new google.maps.InfoWindow({
	content: '<div class="info">'+info+'</div>',
	maxWidth: 500
	});
	google.maps.event.addListener(marker, "click", function() {
	if (currentPopup != null) {
	currentPopup.close();
	currentPopup = null;
	}
	popup.open(map, marker);
	currentPopup = popup;
	});
	google.maps.event.addListener(popup, "closeclick", function() {
	map.panTo(center);
	currentPopup = null;
	});
	}
	function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
	center: new google.maps.LatLng(0, 0),
	zoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	mapTypeControl: false,
	mapTypeControlOptions: {
	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
	},
	navigationControl: true,
	navigationControlOptions: {
	style: google.maps.NavigationControlStyle.SMALL
	}
     });
     var name = new Array("Place where tweet will be placed", "Place where tweet will be placed", "Place where tweet will be placed", "Place where tweet will be placed", "Place where tweet will be placed");
     var lat = new Array("51.514980", "51.521710", "51.511010","51.511012","51.511013");
     var lon = new Array("-0.144328", "-0.071737", "-0.120140","-0.120141","-0.120142");
     
    var i = 0;
    var text = "";
    while (name[i]) {
        addMarker(lat[i],lon[i],name[i]);
        i++;
    }
     
	center = bounds.getCenter();
	map.fitBounds(bounds);    
     }
	 
jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});
});