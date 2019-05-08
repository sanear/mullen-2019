// First step: replace static cards with dynamic cards

// Each card should pull its image, name, and button text from the JSON object
// Loop over each card and generate the corresponding html.
// Function that, given a restaurant, produces the html:

// <div class="col-3">
//    <div class="card card-block" style="width: 18rem;">
//      <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Chick-fil-A_Logo.svg" class="card-img-top" alt="...">
//      <div class="card-body">
//        <h5 class="card-title">Card title</h5>
//        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//        <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" dataplacement="top" data-content="Address, how far from Mullen?">Chick-fil-A</button>
//      </div>
//    </div>
//  </div>

function makeRestaurantCard(restaurant) {
	var imageUrl = restaurant.image;
	var restaurantName = restaurant.name;
	var result = '<div class="col-3">';
	result += '<div class="card card-block" style="width: 18rem;">';
	result += '<img src="' + imageUrl + '" class="card-img-top" alt="...">';
	result += '<div class="card-body">';
	result += '<h5 class="card-title">' + restaurantName + '</h5>';
	result += '<p class="card-text">' + restaurant.description + '</p>';
	result += '<button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" dataplacement="top" data-content="Address, how far from Mullen?">' + restaurantName + '</button>';
	result += '</div></div></div>';
	return result;
};

$(document).ready(function(){
	for (i = 0; i < restaurants.length; i++) {
		$("div.cards-list").append(makeRestaurantCard(restaurants[i]));
	};
});
