import postData from "../services/requests";

export default class Forms {
	constructor({ triggerForm, databaseName, spinnerSrc }) {
		this.forms = document.querySelectorAll(triggerForm);
		this.database = databaseName;
		this.spinner = spinnerSrc;
		this.sendDataBtn = document.querySelector(".modal__modal-forms__btn__send-data-btn");
	}

	init() {
		this.forms.forEach(form => {
			this.bindPostData(form, this.database);
		});
	}

	bindPostData(form, database) {
		form.addEventListener("submit", e => {
			e.preventDefault();
			this.displayLoader(form);
			this.switchButtonText(".modal__modal-forms__btn__send-data-btn");

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData(`http://localhost:3000/${database}`, json)
				.then(data => {
					console.log(data);
					this.sendDataBtn.insertAdjacentHTML(
						"beforebegin",
						"<p style='color:#00960a; padding-bottom: 6px; font-size: 10px;'>Успех</p>"
					);
					console.log(this.sendDataBtn);
					document.querySelector(".loader").remove();
				})
				.catch(err => {
					console.log(err);
					this.sendDataBtn.insertAdjacentHTML(
						"beforebegin",
						// eslint-disable-next-line max-len
						"<p style='color:#a10000; padding-bottom: 6px; font-size: 10px;'>Ошибка сервера</p>"
					);
					document.querySelector(".loader").remove();
				})
				.finally(() => {
					this.switchButtonText(".modal__modal-forms__btn__send-data-btn");
					form.reset();
				});
		});
	}

	displayLoader(form) {
		const loaderImg = document.createElement("img");
		loaderImg.classList.add("loader");
		loaderImg.src = this.spinner;
		loaderImg.style.cssText = `
        position: absolute;
        height: 52px;
        top: 331px;
        left: 305px;
      `;
		form.insertAdjacentElement("afterend", loaderImg);
	}

	switchButtonText(selector) {
		const button = document.querySelector(selector);
		// eslint-disable-next-line no-unused-expressions
		button.style.color === "transparent"
			? (button.style.color = "white")
			: (button.style.color = "transparent");
	}
}
