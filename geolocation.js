const getlocation = document.getElmentByID("getlocation");

getlocation.addEventListener('click',evt=>{
	if('geolocation' in navigator){
		let watchID = navigator.geolocation.watchPosition(position=>{
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			
			let googleMapURL = 'https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400;
			const mapImage = document.getElementById("mapImage);
			mapImage.src = googleMapURL;
			
			print(latitude,longitude);
		},error=>{
			print(error.code);
		});
		print(watchID)
	}else{
		print("Not supported");
	}
});