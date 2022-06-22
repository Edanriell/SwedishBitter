export default class SymptomsMap {
	constructor({ triggerBtns, dotParent }) {
		this.trigger = document.querySelectorAll(triggerBtns);
		this.parent = document.querySelector(dotParent);
	}

	init() {
		this.parent.style.position = "relative";
		this.trigger.forEach((trigger, index) => {
			trigger.addEventListener("click", () => this.showDots(index));
		});
	}

	showDots(index) {
		switch (index) {
			case 0:
				this.createDot("200px", "170px", index);
				break;
			case 1:
				this.createDot("80px", "220px", index);
				break;
			case 2:
				this.createDot("60px", "237px", index);
				break;
			case 3:
				this.createDot("170px", "237px", index);
				break;
			case 4:
				this.createDot("30px", "237px", index);
				break;
			case 5:
				this.createDot("290px", "270px", index);
				break;
			case 6:
				this.createDot("120px", "237px", index);
				break;
			default:
				break;
		}
	}

	createDot(topCoordinates, leftCoordinates, index) {
		const dot = document.createElement("div");
		const dotText = document.createElement("p");
		const elementIndex = `0${index + 1}`;
		dot.append(dotText);
		dotText.innerText = elementIndex;
		dot.classList.add("fade-in-fwd");
		if (this.parent.querySelector(".fade-in-fwd")) {
			const point = this.parent.querySelector(".fade-in-fwd");
			point.remove();
		}
		dotText.style.cssText = `
    text-align: center;
    margin: 0 auto;
    width: 26px;
    height: 26px;
    font-family: 'Montserrat-Bold', sans-serif;
    color: #FFF;
    font-size: 12px;
    line-height: 26px;
    `;
		dot.style.cssText = `
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 8px rgba(255,255,255,0.8);
    top: ${topCoordinates};
    left: ${leftCoordinates};
    width: 26px;
    height: 26px;
    background: #a5c98a;
    `;
		this.parent.append(dot);
	}
}
