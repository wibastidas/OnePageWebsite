if(navigator.serviceWorker){
	navigator.serviceWorker.register("/sw.js")
}

;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "wibastidas77@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))

		return false 
	})

	checkScroll()

	isOpen()

	$("#menu-opened").on("click",toggleNav)

	$(".menu-link").on("click",toggleNav)

	setInterval(()=>{
		
		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0
		}

		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})

	},4000)

	$(window).scroll(checkScroll)

	function checkScroll(){
		const inBotton = isInBotton()

		if(inBotton && !sticky){
			//Mostrar la navegacion sticky
			sticky = true
			stickNavigation()
		} else if(!inBotton && sticky){
			//Ocultar la navegacion sticky
			sticky = false
			unStickNavigation()
		}
	}

	function isOpen(){
		//reloj de 24 horas

		let date = new Date()
		const current_hour = date.getHours()

		console.log("isOpen",current_hour)

		if(current_hour < 17 ||  current_hour > 22){
			$("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm")
		}
	}

	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opened").toggleClass("glyphicon-menu-hamburger")
	}

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").addClass("hidden")
		$("#sticky-navigation").removeClass("hidden")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").removeClass("hidden")
		$("#sticky-navigation").addClass("hidden")
	}

	function isInBotton(){

		const $description = $('#description')
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

})()