$(document).ready(function() {

	$('#contact-form').on('submit', function(e) {
		e.preventDefault();
		
		//get the name field value
		var name = $('#name').val();
		//get the name field value
		var email = $('#email').val();
		//get the comments
		var comments = $('#comments').val();
					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/wibastidas77@gmail.com',
			method:'POST',
			data:{
				name:name,
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:'My Form Submission',
			},
			dataType:"json",
			success:function() {
				console.log('success');
			}   

		});     
		
	});

}); 