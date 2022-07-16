import { getConfig } from "../configLoader.js";
import { DispenserSettingsItem } from "./DispenserSettingsItem.js";

const dispensersDialog = /** @type {HTMLDialogElement} */ (document.getElementById("dispensersDialog"));
const dispensersList = /** @type {HTMLUListElement} */ (document.getElementById("dispensersList"));

export function showModal() {
	dispensersDialog.showModal();
	updateDispensersList();
}

async function updateDispensersList() {
	const config = await getConfig();

	while (dispensersList.firstChild) {
		dispensersList.removeChild(dispensersList.firstChild);
	}

	for (const [i, dispenser] of config.dispensers.entries()) {
		const settingsItem = new DispenserSettingsItem(i, dispenser, config.ingredients);
		dispensersList.appendChild(settingsItem.el);
		settingsItem.onDispenserChange(async dispenserConfig => {
			const url = new URL("/set", window.location.href);
			url.searchParams.set("di", String(i));
			url.searchParams.set("dt", String(dispenserConfig.typeId));
			url.searchParams.set("dx", String(dispenserConfig.x));
			url.searchParams.set("dy", String(dispenserConfig.y));
			url.searchParams.set("dz", String(dispenserConfig.z));
			url.searchParams.set("dl", String(dispenserConfig.msMl));
			url.searchParams.set("do", String(dispenserConfig.msOff));
			let ingredientId = config.ingredients.indexOf(dispenserConfig.ingredient);
			if (ingredientId < 0) ingredientId = 0;
			url.searchParams.set("dn", String(ingredientId));
			const response = await fetch(url);
			if (!response.ok) {
				// TODO: Show error notification
			}
		});
	}
}