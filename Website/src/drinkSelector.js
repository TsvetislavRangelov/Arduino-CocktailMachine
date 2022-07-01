import { DrinkDisplay } from "./DrinkDisplay.js";
import { getAvailableIngredients } from "./configLoader.js";
import { drinksConfig, ingredientNames } from "./drinksConfig.js";
import { drinkSelectorEl } from "./globalElements.js";

/**
 * @typedef DrinkData
 * @property {import("./drinksConfig.js").DrinkConfig} config
 * @property {boolean} allIngredientsAvailable
 * @property {DrinkDisplay} el
 */

/** @type {Map<DrinkDisplay, DrinkData>} */
const createdDrinks = new Map();

/** @type {Set<DrinkDisplay>} */
const visibleDrinks = new Set();

/** @type {string[]} */
const recentDrinks = [];
if (localStorage.recentDrinks) {
	try {
		recentDrinks.push(...JSON.parse(localStorage.recentDrinks));
	} catch (e) {
		console.error(e);
	}
}

const intersectionObserver = new IntersectionObserver(entries => {
	for (const entry of entries) {
		entry.target.classList.toggle("selected", entry.isIntersecting);
		if (!(entry.target instanceof DrinkDisplay)) throw new Error("Assertion failed");
		if (entry.isIntersecting) {
			visibleDrinks.add(entry.target);
		} else {
			visibleDrinks.delete(entry.target);
		}
	}
}, {
	threshold: 1,
	root: drinkSelectorEl,
});

export function initDrinkSelector() {
	for (const drinkConfig of drinksConfig) {
		const {name, cssColor} = drinkConfig;
		const drinkDisplayHtmlElement = document.createElement("drink-display");
		const drinkDisplay = /** @type {DrinkDisplay} */ (drinkDisplayHtmlElement);
		drinkDisplay.name = name;
		drinkDisplay.color = cssColor;
		drinkSelectorEl.appendChild(drinkDisplayHtmlElement);
		createdDrinks.set(drinkDisplay, {
			config: drinkConfig,
			allIngredientsAvailable: false,
			el: drinkDisplay,
		});
		intersectionObserver.observe(drinkDisplay);
	}

	updateDrinkIngredients();
}

async function updateDrinkIngredients() {
	const availableIngredients = await getAvailableIngredients();
	for (const [el, drinkData] of createdDrinks) {
		const ingredients = [];
		let allIngredientsAvailable = true;
		for (const action of drinkData.config.actions) {
			if ("ingredient" in action) {
				const available = availableIngredients.has(action.ingredient);
				const name = ingredientNames.get(action.ingredient) || action.ingredient;
				ingredients.push({
					name,
					available,
				});
				if (!available) allIngredientsAvailable = false;
			}
		}
		drinkData.allIngredientsAvailable = allIngredientsAvailable;
		el.available = allIngredientsAvailable;
		el.setIngredients(ingredients)
	}

	sortDrinkElements();
}

function sortDrinkElements() {
	while (drinkSelectorEl.firstChild) {
		drinkSelectorEl.removeChild(drinkSelectorEl.firstChild);
	}
	const sortedDrinks = Array.from(createdDrinks.values());
	sortedDrinks.sort((a, b) => {
		if (a.allIngredientsAvailable && !b.allIngredientsAvailable) return -1;
		if (!a.allIngredientsAvailable && b.allIngredientsAvailable) return 1;
		const aIndex = recentDrinks.indexOf(a.config.name);
		const bIndex = recentDrinks.indexOf(b.config.name);
		if (aIndex >= 0 && bIndex >= 0) {
			return bIndex - aIndex;
		} else if (aIndex >= 0 && bIndex < 0) {
			return -1;
		} else if (aIndex < 0 && bIndex >= 0) {
			return 1;
		}
		return a.config.name.localeCompare(b.config.name);
	});

	for (const drinkData of sortedDrinks) {
		drinkSelectorEl.appendChild(drinkData.el);
	}
}

export function getSelectedDrink() {
	const selectorBounds = drinkSelectorEl.getBoundingClientRect();
	const selectorCenter = selectorBounds.left + selectorBounds.width / 2;

	let centerDrink = null;
	let closestCenterDist = Infinity;
	for (const drink of visibleDrinks) {
		const bounds = drink.getBoundingClientRect();
		const center = bounds.left + bounds.width / 2;
		const centerDist = Math.abs(center - selectorCenter);
		if (centerDist < closestCenterDist) {
			closestCenterDist = centerDist;
			centerDrink = drink;
		}
	}

	if (!centerDrink) throw new Error("No drink selected");
	const data = createdDrinks.get(centerDrink);
	if (!data) throw new Error("No config for selected drink");
	return data;
}

/**
 * @param {string} filter
 */
export function setDrinkFilter(filter) {
	filter = filter.toLocaleLowerCase().trim();
	for (const drinkEl of createdDrinks.keys()) {
		let visible = true;
		if (filter) {
			visible = drinkEl.name.toLocaleLowerCase().includes(filter);
		}
		drinkEl.style.display = visible ? "" : "none";
	}
}

/**
 * Adds the drink to the end of the recent drink list and updates the order
 * of drinks.
 * @param {string} drinkName
 */
export function markRecentDrink(drinkName) {
	const existingIndex = recentDrinks.indexOf(drinkName);
	if (existingIndex !== -1) {
		recentDrinks.splice(existingIndex, 1);
	}
	recentDrinks.push(drinkName);
	localStorage.recentDrinks = JSON.stringify(recentDrinks);
	sortDrinkElements();
}
