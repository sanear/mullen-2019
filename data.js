console.log('Loading restaurants...');

var restaurants = [
  {
    "name": "Chick Fil-A",
    "image": "https://upload.wikimedia.org/wikipedia/en/0/02/Chick-fil-A_Logo.svg",
    "description": "A healthier option, has mostly chicken related food items. Has lemonade and smoothies." +
    "Runs relatively cheap. This is the cows, we know what you are up to so eat more chicken and leave us alone please.",
    "locationName": "River Point",
    "address": "4090 River Point Pkwy, Sheridan, CO 80110",
    "rating": 5,
    "priceLevel": 2
  },
  {
    "name": "Panera Bread",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Panera_Bread_logo.svg/1200px-Panera_Bread_logo.svg.png",
    "description":"Slightly more expensive. Has an array (haha, get it?, no?..... moving on) of items to choose from. Soups and sandwiches." +
    "Has many dessert options. Also if you go there please look at the bread on the field with a single slice of butter, its magical *star eyes*.",
    "locationName": "River Point",
    "address": "3702 River Point Pkwy, Englewood, CO 80110",
    "rating": 3.7,
    "priceLevel": 2
  },
  {
    "name": "Costco",
    "image": "https://i.ytimg.com/vi/PbIu4lAE3XI/maxresdefault.jpg",
    "description":"WAIT, is it called costco because it COSTS and its in COlorado. This is a great place to get food, 10/10 recommend." +
    "Trust me, my mom and dad love it here. Its cheap and get the job of eating lunch done, also get some free samples.",
    "locationName": "River Point",
    "address": "4000 River Point Pkwy, Sheridan, CO 80110",
    "rating": 4.5,
    "priceLevel": 2
  },
  {
    "name": "Noodles & Co.",
    "image": "https://jsmliving.com/uploads/images/JSM%20VIP/Noodles_Company.png",
    "description":"Some cheesy noodly bois. Quite the specimen for this event you call lunch. Overall this place is relatively cheap with good " +
    "proportions. You can sit outside, oh how I remember being a computer with a dream, I wanted nothing but to stuff this moniter with food. ",
    "locationName": "Hampden",
    "address": "697 W Hampden Ave, Englewood, CO 80110",
    "rating": 4,
    "priceLevel": 1
  },
  {
    "name": "Chipotle",
	"image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png",
    "description":"OHoho u thought I was done. Here we have some chubby burrito bois. This place has everything, tacos, burritos, burrito bowls " +
    "and a collection of overpriced guac. Ode to Chipotle I would say, pray to our lord and savior the Chips. Now these chips are something else. "+ 
    "Come one. Come all and try these chips that are the only things that a computer can actually have (GET IT CHIPS, GET IT).",
    "locationName": "Hampden",
    "address": "333 W Hampden Ave Ste 110, Englewood, CO 80110",
    "rating": 4,
    "priceLevel": 1
  },
  {	
    "name": "Panda Express",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Panda_Express_logo.svg/220px-Panda_Express_logo.svg.png",
    "description":"Nothing like some fake chinese food to hold you over for the afternoon. Make sure you buy some plushie pandas and eat "+
    "some weird eggrolls. Make sure you think of the panda's here. Pandas are endangered, there is only about 700-1000 pandas in the world. " +
    "Remember baby pandas look like pink sticks of butter and then they get cute. THINK OF THE PANDAS.",
    "locationName": "Englewood",
    "address": "2990 S Broadway, Englewood, CO 80113",
    "rating": 2,
    "priceLevel": 3
  },
  {
    "name": "Tokyo Joe's",
	"image": "https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/18529.png",
    "description": "Joe, an old friend. We met on the shady streets of tokyo, this man had a dream. To make food and start an empire." + 
    "This man traveled over mountains and through the security at airports. His dream was made a reality, and little do you know. He stole " +
      "my idea and I want revenge. If you see this man tell him this moniter is looking for him and out for the copyright. I'm onto you Joe.",
    "locationName": "Hampton",
    "address": "901 W Hampden Ave, Englewood, CO 80110",
    "rating": 2,
    "priceLevel": 3
  },
  {
	"name": "Starbucks",
	"image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
	"locationName": "River Point",
	"address": "3500 A River Point Pkwy, Denver, CO 80110",
	"rating": 3.9, 
	"priceLevel": 3, 
  },
  {
	"name": "McDonald's",
	"image": "https://missionmarketplaceoceanside.com/wp-content/uploads/2018/06/mcdonalds-logo.jpg",
	"locationName": "Federal",
	"address": "3601 S Federal Blvd, Englewood, CO 80110",
	"rating": 3.3,
	"priceLevel": 1,
  },
  {
	"name": "Taco Bell",
	"image": "https://brandstruck.co/wp-content/uploads/2018/05/taco-bell-brand-strategy.png",
	"locationName": "South Sheradin",
	"address": "3110 South Sheridan, Denver, CO 80227",
	"rating": 3.2,
	"priceLevel": 1,
  },
  {
	"name": "Steak and Shake",
	"image": "https://vignette.wikia.nocookie.net/logopedia/images/a/a9/Shake.jpg/revision/latest?cb=20110921154140",
	"locationName": "River Point",
	"address": "3502 River Point Pkwy, Sheridan, CO 80110",
	"rating": 3.5,
	"priceLevel": 2,
  }
];
