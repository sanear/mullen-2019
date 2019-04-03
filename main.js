// First step: replace static cards with dynamic cards

// Each card should pull its image, name, and button text from the JSON object
// Loop over each card and generate the corresponding html.
// Function that, given a restaurant, produces the html:

// <div class="row flex-row flex-nowrap">
//     <div class="card card-block" style="width: 18rem;">
//         <img src="{{IMAGE URL}}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">{{RESTAURANT NAME}}</h5>
//             <p class="card-text">{{RESTAURANT DESCRIPTION}}</p>
//             <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" dataplacement="top" data-content="Address, how far from Mullen?">{{RESTAURANT NAME}}</button>
//         </div>
//     </div>
// </div>

function makeRestaurantCard(restaurant) {
	var imageUrl = restaurant.image;
	var restaurantName = restaurant.name;
	var result = '<div class="row flex-row flex-nowrap">';
	result += '<div class="card card-block" style="width: 18rem;">';
	result += '<img src="' + imageUrl + '" class="card-img-top" alt="...">';
	result +=  '<div class="card-body">';
	result += '<h5 class="card-title"> "' + restaurantName + '"</h5>';
	result += '<p class="card-text"> "' + restaurant.description + '"</p>';
	result += '<button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" dataplacement="top" data-content="Address, how far from Mullen?">"' + restaurantName + '"</button>';
	result += '</div></div></div>';
	return result;
};

for (i = 0; i < restaurants.length; i++) {
	console.log(makeRestaurantCard(restaurants[i]));
};