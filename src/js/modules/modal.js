/* eslint-disable max-len */
import Spinner from "../../img/spinner.svg";
import Forms from "./forms";

export default class Modal {
	constructor({ triggerBtns, modalParent }) {
		this.trigger = document.querySelectorAll(triggerBtns);
		this.parent = document.querySelector(modalParent);
	}

	init() {
		this.trigger.forEach(btn => {
			btn.addEventListener("click", evt => this.showModal(evt));
		});
	}

	createModal(currentClientWidth) {
		const modal = document.createElement("div");
		const { clientWidth } = document.body;
		const modalWrapper = document.createElement("div");
		document.body.style.paddingRight = `${clientWidth - currentClientWidth}px`;
		modal.classList.add("modal", "fade-in");
		modalWrapper.classList.add("modal__modal-wrapper", "modal-fade-in");
		modalWrapper.innerHTML = `
            <form id="form" class="modal__modal-forms" action="#" method="post">
                <div class="modal__modal-forms__user-name">
                    <label class="visually-hidden" for="name">Ваше имя</label>
                    <input class="modal__modal-forms__user-name__input" id="name" name="name" type="text" placeholder="Ваше имя" required>
                </div>
                <div class="modal__modal-forms__user-surname">
                    <label class="visually-hidden" for="surname">Ваша фамилия</label>
                    <input class="modal__modal-forms__user-surname__input" id="surname" name="surname" type="text" placeholder="Ваша фамилия" required>
                </div>
                <div class="modal__modal-forms__user-phone">
                    <label class="visually-hidden" for="phone">Ваш номер телефона</label>
                    <input class="modal__modal-forms__user-phone__input" id="phone" name="phone" type="tel" placeholder="Ваш номер телефона" required>
                </div>
                <div class="modal__modal-forms__user-email">
                    <label class="visually-hidden" for="email">Ваш почтовый ящик</label>
                    <input class="modal__modal-forms__user-email__input" id="email" name="email" type="email" placeholder="Ваш почтовый ящик" required>
                </div>
                <div class="modal__modal-forms__btn">
                    <button class="modal__modal-forms__btn__send-data-btn" type="submit">Отправить</button>
                </div>
            </form> 
            <div class="modal__modal-text">
                <p>Мы с вами свяжемся !</p>
            </div>
            <div>
                <button class="modal__modal-btn-close" type="button">Закрыть окно</button>
            </div>
    `;
		modal.append(modalWrapper);
		this.parent.append(modal);
		const form = new Forms({
			triggerForm: "#form",
			databaseName: "requests",
			spinnerSrc: Spinner
		});
		form.init();
	}

	showModal() {
		const currentClientWidth = document.body.clientWidth;
		document.body.style.overflow = "hidden";
		this.createModal(currentClientWidth);
		this.removeModal();
	}

	removeModal() {
		const modal = document.querySelector(".modal");
		const closeBtn = document.querySelector(".modal__modal-btn-close");
		const modalWrapper = document.querySelector(".modal__modal-wrapper");
		modal.addEventListener("click", evt => {
			if (evt.target === modal) {
				modalWrapper.classList.add("modal-fade-out");
				setTimeout(() => {
					modal.classList.add("fade-out");
					modal.classList.remove("fade-in");
					setTimeout(() => {
						modal.remove();
						document.body.style.overflow = null;
						document.body.style.position = null;
						document.body.style.paddingRight = 0;
					}, 200);
				}, 250);
			}
			if (evt.target === closeBtn) {
				modalWrapper.classList.add("modal-fade-out");
				setTimeout(() => {
					modal.classList.add("fade-out");
					modal.classList.remove("fade-in");
					setTimeout(() => {
						modal.remove();
						document.body.style.overflow = null;
						document.body.style.position = null;
						document.body.style.paddingRight = 0;
					}, 200);
				}, 250);
			}
		});
	}
}
