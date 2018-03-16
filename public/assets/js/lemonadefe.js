$(function() {
	$('.change-sold').on('click', function(e) {
		let id = $(this).data('id');
		let newSold = $(this).data('newsold');

		let newSoldState = {
			sold: true
		};
	});

	$('.create-lemonade-form').on('submit', function(e) {
		e.preventDefault();
		let newLemonade = {
			product_name: $('#newLemonade').val(),
			price: $('#lemonade-price').val(),
			seller_id: $('#lemonade-seller').val(),
			image: $('#lemonade-img').val(),
			description: $('#lemonade-desc').val()
		};

		console.log("newLemaonde ", newLemonade);

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