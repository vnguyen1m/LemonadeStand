$(function() {
	$('.create-lemonade-form').on('submit', function(e) {
		e.preventDefault();
		let newLemonade = {
			product_name: $('#newLemonade').val(),
			price: $('#lemonade-price').val(),
			image: $('#lemonade-img').val(),
			description: $('#lemonade-desc').val()
		};

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
	});

});