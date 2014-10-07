window.onload = function(){
	var mapstyle = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
	
	var mapOptions = {
		zoom: 12,
	    center: new google.maps.LatLng(-34.397, 150.644),
	    mapTypeID: google.maps.MapTypeId.ROADMAP,
	    styles:mapstyle
	};

	var map = new google.maps.Map(document.getElementById('map'),mapOptions);

	//get a center of the map using geo coding

	var mapAddress = {address:"Auckland Zoo, Motions Rd, Auckland 1022"};
	var geo = new google.maps.Geocoder();

	geo.geocode(mapAddress, function(results,status){
		//console.log(results);
		//console.log(status);
		if(status == "OK"){
			var destination = results[0].geometry.location;

			map.setCenter(destination);

			//marker

			var destinationMarker = new google.maps.Marker({map:map});
			destinationMarker.setPosition(destination);

			//info window
			var destinationInfo = new google.maps.InfoWindow({
				content: "<p>Auckland Zoo</p>"
			});
			destinationInfo.open(map,destinationMarker);

			//origin location

			if(geo_position_js.init()){
				 geo_position_js.getCurrentPosition(
				 	function(position){
					 	console.log(position);

					 	var origin = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

					 	var originMarker = new google.maps.Marker({map:map});
						originMarker.setPosition(origin);

						//info window

						var originInfo = new google.maps.InfoWindow({
							content:"You are here"
						});
						originInfo.open(map,originMarker);

						// set direction
						var directions = new google.maps.DirectionsService();

						var request = {
							"origin" : origin,
							"destination": destination,
							"travelMode": google.maps.TravelMode.DRIVING
						}

						directions.route(request, function(response,status){
							if(status == "OK"){
								var directionDisplay = new google.maps.DirectionsRenderer();
									directionDisplay.setMap(map);
									directionDisplay.setDirections(response);
							}

						});

					},
					function(error){
						console.log(error);
				 	});
			}

		}else {
        	alert("Geocode was not successful for the following reason: " + status);
      	}
	});


};