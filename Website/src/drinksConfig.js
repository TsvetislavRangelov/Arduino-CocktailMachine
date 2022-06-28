/**
 * @typedef DrinkConfig
 * @property {string} name
 * @property {string} cssColor
 * @property {(DrinkConfigIngredient | DrinkConfigAction)[]} actions
 */

/**
 * @typedef DrinkConfigIngredient
 * @property {Ingredients} ingredient The ingredient to use.
 * @property {number} amount The amount in ml.
 */

/**
 * @typedef DrinkConfigAction
 * @property {Actions} action
 */

/** @typedef {"VODKA" | "PEACH_TREE" | "ORANGE_JUICE" | "CRANBERRY_JUICE" | "TRIPLE_SEC" | "LIME_JUICE" | "PINEAPPLE_JUICE" | "GIN" | "LEMONADE" | "LEMON_JUICE" | "WHITE_RUM" | "RUM" | "TEQUILA" | "SIMPLE_SYRUP" | "TONIC_WATER" | "GINGER_ALE" | "GRENADINE_SYRUP" | "COLA" | "WATERMELON_VODKA" | "MILK" | "SPRITE" | "LEMON_SODA"} Ingredients */

/** @typedef {"ice" | "shake" | "stir" | "crushed ice" | "blend" | "strain" | "2 thee spoons of sugar" | "6 leaves of mind"} Actions */

/** @type {DrinkConfig[]} */
export const drinksConfig = [
	{
		name: "Sex on the Beach",
		cssColor: "#bab34",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 45},
			{ingredient: "PEACH_TREE", amount: 45},
			{ingredient: "ORANGE_JUICE", amount: 135},
			{action: "shake"},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
		],
	}, {
		name: "Screwdriver",
		cssColor: "#e8d86d",
		actions: [
			{ingredient: "VODKA", amount: 45},
			{ingredient: "ORANGE_JUICE", amount: 120},
			{action: "stir"},
		],
	}, {
		name: "Cosmopolitan Classic",
		cssColor: "#e81058",
		actions: [
			{ingredient: "VODKA", amount: 23},
			{ingredient: "TRIPLE_SEC", amount: 15},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
			{ingredient: "LIME_JUICE", amount: 15},
			{action: "shake"},
		],
	}, {
		name: "Bay Breeze",
		cssColor: "#ff8400",
		actions: [
			{ingredient: "VODKA", amount: 45},
			{ingredient: "PINEAPPLE_JUICE", amount: 30},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
			{action: "stir"},
		],
	}, {
		name: "Hole in One",
		cssColor: "#e3c532",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 45},
			{ingredient: "CRANBERRY_JUICE", amount: 90},
			{action: "stir"},
			{ingredient: "ORANGE_JUICE", amount: 30},
		],
	}, {
		name: "Gimlet",
		cssColor: "#d5f5dd",
		actions: [
			{action: "crushed ice"},
			{ingredient: "GIN", amount: 90},
			{ingredient: "LIME_JUICE", amount: 30},
			{action: "shake"},
		],
	}, {
		name: "Black widow",
		cssColor: "#800101",
		actions: [
			{ingredient: "VODKA", amount: 30},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
			{ingredient: "LEMONADE", amount: 30},
			{action: "stir"},
		],
	}, {
		name: "Gin Sidecar",
		cssColor: "#ced190",
		actions: [
			{action: "crushed ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "TRIPLE_SEC", amount: 30},
			{ingredient: "LEMON_JUICE", amount: 30},
			{action: "shake"},
		],
	}, {
		name: "Little Devil",
		cssColor: "#db4f40",
		actions: [
			{action: "crushed ice"},
			{ingredient: "WHITE_RUM", amount: 45},
			{ingredient: "TRIPLE_SEC", amount: 30},
			{ingredient: "LEMON_JUICE", amount: 30},
			{action: "shake"},
		],
	}, {
		name: "Hoola Hoop",
		cssColor: "#e3bc5b",
		actions: [
			{ingredient: "GIN", amount: 45},
			{ingredient: "ORANGE_JUICE", amount: 30},
			{ingredient: "PINEAPPLE_JUICE", amount: 30},
			{action: "stir"},
		],
	}, {
		name: "Hawaiian Cocktail",
		cssColor: "#edc766",
		actions: [
			{ingredient: "GIN", amount: 60},
			{ingredient: "TRIPLE_SEC", amount: 15},
			{ingredient: "PINEAPPLE_JUICE", amount: 15},
			{action: "shake"},
		],
	}, {
		name: "Alpine Lemonade",
		cssColor: "#f5e4bc",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 30},
			{ingredient: "GIN", amount: 30},
			{ingredient: "RUM", amount: 30},
			{ingredient: "LEMONADE", amount: 60},
			{ingredient: "CRANBERRY_JUICE", amount: 60},
			{action: "blend"},
		],
	}, {
		name: "Hula Hula",
		cssColor: "#baa165",
		actions: [
			{action: "crushed ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "ORANGE_JUICE", amount: 30},
			{ingredient: "TRIPLE_SEC", amount: 5},
			{action: "stir"},
			{action: "strain"},
		],
	}, {
		name: "Judge J Cocktail",
		cssColor: "#ed775f",
		actions: [
			{action: "crushed ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "WHITE_RUM", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "CRANBERRY_JUICE", amount: 10},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Rock Bottom",
		cssColor: "#f27157",
		actions: [
			{ingredient: "VODKA", amount: 60},
			{ingredient: "PINEAPPLE_JUICE", amount: 10},
			{ingredient: "GIN", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 10},
			{ingredient: "LIME_JUICE", amount: 10},
			{action: "shake"},
			{ingredient: "TEQUILA", amount: 60},
		],
	}, {
		name: "Derby Daiquiri",
		cssColor: "#f7dd59",
		actions: [
			{action: "crushed ice"},
			{ingredient: "WHITE_RUM", amount: 90},
			{ingredient: "ORANGE_JUICE", amount: 90},
			{ingredient: "LIME_JUICE", amount: 60},
			{ingredient: "SIMPLE_SYRUP", amount: 30},
			{action: "blend"},
		],
	}, {
		name: "The Huntsman",
		cssColor: "#c9f097",
		actions: [
			{ingredient: "VODKA", amount: 45},
			{ingredient: "RUM", amount: 15},
			{ingredient: "LIME_JUICE", amount: 23},
			{ingredient: "SIMPLE_SYRUP", amount: 8},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Vodka Tonic",
		cssColor: "#f4f5f2",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 60},
			{ingredient: "TONIC_WATER", amount: 120},
			{action: "stir"},
		],
	}, {
		name: "Beach Bum Shake",
		cssColor: "#e3a452",
		actions: [
			{action: "crushed ice"},
			{ingredient: "TEQUILA", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{ingredient: "VODKA", amount: 8},
			{ingredient: "TRIPLE_SEC", amount: 5},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Gin Buck",
		cssColor: "#f0ede9",
		actions: [
			{action: "ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "GINGER_ALE", amount: 30},
			{action: "stir"},
		],
	}, {
		name: "Pussy popper",
		cssColor: "#db5740",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 90},
			{ingredient: "TRIPLE_SEC", amount: 60},
			{ingredient: "CRANBERRY_JUICE", amount: 60},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{ingredient: "GRENADINE_SYRUP", amount: 5},
			{action: "shake"},
		],
	}, {
		name: "Brass Monkey",
		cssColor: "#f5b922",
		actions: [
			{ingredient: "RUM", amount: 15},
			{ingredient: "VODKA", amount: 15},
			{action: "stir"},
			{ingredient: "ORANGE_JUICE", amount: 120},
			{action: "shake"},
		],
	}, {
		name: "Legspreader",
		cssColor: "#f0ecd5",
		actions: [
			{ingredient: "TEQUILA", amount: 30},
			{ingredient: "VODKA", amount: 30},
			{ingredient: "GIN", amount: 30},
			{ingredient: "RUM", amount: 30},
			{action: "shake"},
		],
	}, {
		name: "Leap Frog Highball",
		cssColor: "#f0ebd1",
		actions: [
			{action: "ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 45},
			{ingredient: "GINGER_ALE", amount: 60},
			{action: "stir"},
		],
	}, {
		name: "Vodka Sour",
		cssColor: "#edeadd",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 45},
			{ingredient: "LEMON_JUICE", amount: 23},
			{ingredient: "SIMPLE_SYRUP", amount: 13},
			{action: "shake"},
		],
	}, {
		name: "Orange Buck",
		cssColor: "#e8d997",
		actions: [
			{action: "ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{ingredient: "LIME_JUICE", amount: 30},
			{action: "shake"},
			{ingredient: "GINGER_ALE", amount: 60},
			{action: "stir"},
		],
	}, {
		name: "Liquid Bubble Gum",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "VODKA", amount: 60},
			{ingredient: "PEACH_TREE", amount: 60},
			{ingredient: "COLA", amount: 120},
			{action: "stir"},
		],
	}, {
		name: "Desert Sunrise",
		cssColor: "#FFFFFF",
		actions: [
			{action: "crushed ice"},
			{ingredient: "VODKA", amount: 38},
			{ingredient: "ORANGE_JUICE", amount: 45},
			{ingredient: "PINEAPPLE_JUICE", amount: 45},
			{ingredient: "GRENADINE_SYRUP", amount: 5},
			{action: "stir"},
		],
	}, {
		name: "Absolute Vacation",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 30},
			{ingredient: "PINEAPPLE_JUICE", amount: 30},
			{ingredient: "VODKA", amount: 30},
			{action: "shake"},
		],
	}, {
		name: "Hawaiian Seduction",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "TEQUILA", amount: 30},
			{ingredient: "LIME_JUICE", amount: 180},
			{ingredient: "VODKA", amount: 30},
			{action: "stir"},
		],
	}, {
		name: "Hawaiian Sea Breeze",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 45},
			{ingredient: "PINEAPPLE_JUICE", amount: 135},
			{ingredient: "CRANBERRY_JUICE", amount: 10},
			{action: "stir"},
		],
	}, {
		name: "Asian Cum Shot",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "WATERMELON_VODKA", amount: 90},
			{ingredient: "ORANGE_JUICE", amount: 180},
			{action: "stir"},
		],
	}, {
		name: "Island Punch",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "WHITE_RUM", amount: 30},
			{ingredient: "GRENADINE_SYRUP", amount: 5},
			{ingredient: "ORANGE_JUICE", amount: 120},
			{ingredient: "PINEAPPLE_JUICE", amount: 120},
			{action: "stir"},
		],
	}, {
		name: "Jamaican Sunrise",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "ORANGE_JUICE", amount: 135},
			{ingredient: "VODKA", amount: 60},
			{ingredient: "PEACH_TREE", amount: 60},
			{action: "shake"},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
		],
	}, {
		name: "Montana Sunrise",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "GRENADINE_SYRUP", amount: 23},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{ingredient: "VODKA", amount: 120},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Pimp Daddy",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "TEQUILA", amount: 60},
			{ingredient: "VODKA", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "CRANBERRY_JUICE", amount: 90},
			{action: "stir"},
		],
	}, {
		name: "Adam Cocktail",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "RUM", amount: 60},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "GRENADINE_SYRUP", amount: 30},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Long Island Taxi",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 60},
			{ingredient: "GIN", amount: 30},
			{ingredient: "TEQUILA", amount: 30},
			{ingredient: "RUM", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{action: "shake"},
			{action: "strain"},
		],
	}, {
		name: "Caribe Cosmopolitan",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "RUM", amount: 45},
			{ingredient: "CRANBERRY_JUICE", amount: 30},
			{ingredient: "TRIPLE_SEC", amount: 30},
			{ingredient: "LIME_JUICE", amount: 15},
			{action: "shake"},
		],
	}, {
		name: "Key West Screwdriver",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "VODKA", amount: 60},
			{ingredient: "LIME_JUICE", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 150},
			{action: "stir"},
		],
	}, {
		name: "Shark Tank",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "LEMONADE", amount: 120},
			{ingredient: "VODKA", amount: 120},
			{ingredient: "GRENADINE_SYRUP", amount: 60},
		],
	}, {
		name: "A Gilligans Island",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "VODKA", amount: 30},
			{ingredient: "PEACH_TREE", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 90},
			{ingredient: "CRANBERRY_JUICE", amount: 90},
			{action: "shake"},
		],
	}, {
		name: "Blind Bat",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "VODKA", amount: 120},
			{ingredient: "COLA", amount: 120},
			{ingredient: "WHITE_RUM", amount: 10},
			{action: "stir"},
		],
	}, {
		name: "Hot Sex Cocktail",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "TRIPLE_SEC", amount: 75},
			{ingredient: "ORANGE_JUICE", amount: 120},
			{action: "stir"},
			{ingredient: "GRENADINE_SYRUP", amount: 10},
		],
	}, {
		name: "Bloody Nightmare",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 30},
			{ingredient: "LIME_JUICE", amount: 60},
			{ingredient: "CRANBERRY_JUICE", amount: 210},
			{action: "stir"},
		],
	}, {
		name: "Snoop Dogg",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "GIN", amount: 60},
			{ingredient: "ORANGE_JUICE", amount: 90},
			{action: "stir"},
		],
	}, {
		name: "Gin Citric",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "GIN", amount: 60},
			{ingredient: "GRENADINE_SYRUP", amount: 5},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "LIME_JUICE", amount: 30},
			{ingredient: "ORANGE_JUICE", amount: 60},
			{action: "stir"},
		],
	}, {
		name: "Cat Cocktail",
		cssColor: "#FFFFFF",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 45},
			{ingredient: "TRIPLE_SEC", amount: 15},
			{ingredient: "CRANBERRY_JUICE", amount: 120},
			{action: "stir"},
		],
	}, {
		name: "Hard Dick",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "VODKA", amount: 30},
			{ingredient: "GIN", amount: 30},
			{ingredient: "WHITE_RUM", amount: 30},
			{action: "stir"},
			{ingredient: "SPRITE", amount: 90},
		],
	}, {
		name: "Vodka soda",
		cssColor: "#964B00",
		actions: [
			{action: "ice"},
			{ingredient: "VODKA", amount: 60},
			{ingredient: "COLA", amount: 240},
		],
	}, {
		name: "Rum and coke",
		cssColor: "#964B00",
		actions: [
			{ingredient: "COLA", amount: 120},
			{ingredient: "WHITE_RUM", amount: 50},
			{ingredient: "LIME_JUICE", amount: 10},
		],
	}, {
		name: "Long island iced tea",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "SIMPLE_SYRUP", amount: 30},
			{ingredient: "TEQUILA", amount: 15},
			{ingredient: "WHITE_RUM", amount: 15},
			{ingredient: "LEMON_JUICE", amount: 30},
			{ingredient: "TRIPLE_SEC", amount: 15},
			{ingredient: "COLA", amount: 45},
			{ingredient: "GIN", amount: 15},
			{ingredient: "VODKA", amount: 15},
		],
	}, {
		name: "Daiquiri",
		cssColor: "#FFFFFF",
		actions: [
			{ingredient: "WHITE_RUM", amount: 45},
			{ingredient: "LIME_JUICE", amount: 30},
			{ingredient: "SIMPLE_SYRUP", amount: 15},
		],
	}, {
		name: "Margarita",
		cssColor: "#42F595",
		actions: [
			{ingredient: "TRIPLE_SEC", amount: 30},
			{ingredient: "LIME_JUICE", amount: 30},
			{ingredient: "TEQUILA", amount: 60},
		],
	}, {
		name: "Mojito",
		cssColor: "#9DFF85",
		actions: [
			{ingredient: "WHITE_RUM", amount: 45},
			{ingredient: "LIME_JUICE", amount: 30},
			{action: "2 thee spoons of sugar"},
			{action: "6 leaves of mind"},
			{ingredient: "LEMON_SODA", amount: 105},
		],
	}, {
		name: "Gin and tonic",
		cssColor: "#D4D2D2",
		actions: [
			{ingredient: "GIN", amount: 30},
			{ingredient: "TONIC_WATER", amount: 90},
		],
	}
];