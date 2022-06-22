import "../sass/main.sass";
import SymptomsMap from "./modules/symptomsMap";
import Modal from "./modules/modal";
import Scroll from "./modules/scroll";

window.addEventListener("DOMContentLoaded", () => {
	const symptomsMap = new SymptomsMap({
		triggerBtns: ".symptoms__symptoms-list__item",
		dotParent: ".symptoms__symptoms-map__image"
	});

	const modal = new Modal({
		triggerBtns: ".btn",
		modalParent: "body"
	});

	const scroll = new Scroll({
		scrollParent: "main"
	});

	symptomsMap.init();
	modal.init();
	scroll.init();
});
