$(function() {

	$('.create-lemonade-form').on('submit', function(e) {
		e.preventDefault();
		let newLemonade = {
			email: $('#newEmail').val(),
			product_name: $('#newLemonade').val(),
			price: $('#lemonade-price').val(),
			seller_id: $('#lemonade-seller').val(),
			image: $('#lemonade-img').val(),
			description: $('#lemonade-desc').val()
		};
		
		// let newUser = {
		// 	seller_id: $('#lemonade-seller').val(),
		// 	username: $('#username').val(),
		// 	email: $('#email').val()
		// }
  

		console.log("newLemonade ", newLemonade);

		$.ajax('/order', {
			type: "POST",
			data: newLemonade
		}).then(
			function() {
				console.log("created new lemonade");
				// reload the page to get the updated list
				//location.reload();
			}
		);

	// 	$.ajax('/adduser', {
	// 		type: "POST",
	// 		data: newUser
	// 	}).then(
	// 		function() {
	// 			console.log("created new user");
	// 		}
	// 	);
	// });
});