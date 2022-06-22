export default class Scroll {
	constructor({ scrollParent }) {
		this.container = document.querySelector(scrollParent);
	}

	init() {
		this.createBtn();
		const trigger = document.querySelector(".pageup");
		this.toggleClass(trigger);
		trigger.addEventListener("click", event => {
			this.scrollTo(event);
		});
	}

	createBtn() {
		const btn = document.createElement("a");
		btn.setAttribute("href", "#up");
		btn.classList.add("pageup");
		this.container.append(btn);
	}

	scrollTo(event) {
		event.preventDefault();
		const widthTop = document.documentElement.scrollTop;
		const { hash } = document.querySelector("header");
		const toBlock = document.querySelector("header", "#up").getBoundingClientRect().top;
		let start = null;
		const speed = 0.01;
		requestAnimationFrame(step);
		function step(time) {
			if (start === null) {
				start = time;
			}
			const progress = time - start;
			const r =
				toBlock < 0
					? Math.max(widthTop - progress / speed, widthTop + toBlock)
					: Math.min(widthTop + progress / speed, widthTop + toBlock);
			document.documentElement.scrollTo(0, r);
			if (r !== widthTop + toBlock) {
				requestAnimationFrame(step);
			} else {
				// eslint-disable-next-line no-restricted-globals
				location.hash = hash;
			}
		}
	}

	toggleClass(trigger) {
		window.addEventListener("scroll", () => {
			if (
				document.documentElement.scrollTop > 600 &&
				!trigger.classList.contains("button-fade-in")
			) {
				trigger.classList.add("button-fade-in");
				trigger.classList.remove("button-fade-out");
			} else if (
				document.documentElement.scrollTop < 600 &&
				trigger.classList.contains("button-fade-in")
			) {
				trigger.classList.remove("button-fade-in");
				trigger.classList.add("button-fade-out");
			}
		});
	}
}
