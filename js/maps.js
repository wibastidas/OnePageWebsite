;(function(){

	class UserLocation{
		static get(callback){

			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude ,
						lng: location.coords.longitude
					})
				})
			}else{
				aler("No pudimos detectar el lugar en el que te encuentras")
			}
		}
	}

	const my_place = {
		lat: -34.9145862,
		lng: -56.1851446
	}

	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: my_place,
				zoom: 15
			}
		)

		const marker = new google.maps.Marker({
			map: map,
			position:my_place,
			title:"Búfon taller gourmet",
			visible: true
		})

		UserLocation.get((coords)=>{
			//calcular distancia del restaurante al usuario

			let origen = new google.maps.LatLng(coords.lat,coords.lng)
			let destino = new google.maps.LatLng(my_place.lat,my_place.lng)
		
			let service = new google.maps.DistanceMatrixService()

			service.getDistanceMatrix({
				origins: [origen],
				destinations: [destino],
				travelMode: google.maps.TravelMode.DRIVING
			},(response,status)=>{
				if(status === google.maps.DistanceMatrixStatus.OK){
					const duration_element = response.rows[0].elements[0]
					const duration_viaje = duration_element.duration.text
					document.querySelector("#message")
							.innerHTML = `
								Estás a ${duration_viaje} de nuestro 
								<span class="dancing-script medium">
								Búfon taller gourmet
								</span>

							`

				}
			})
		})
	})
})()