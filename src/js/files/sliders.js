
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";


// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.services__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.services__slider', { // Вказуємо склас потрібного слайдера

			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 38,
			loop: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.btn-navigation-services-prev',
				nextEl: '.btn-navigation-services-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 1.05,
				},
				479.98: {
					slidesPerView: 1.3,
				},
				768: {
					slidesPerView: 2.3,
				},

				1200: {
					slidesPerView: 2,
					spaceBetween: 38,
				},
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.courses__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.courses__slider', { // Вказуємо склас потрібного слайдера

			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			loop: true,
			speed: 800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: true // Вимкнути автопрогравання при взаємодії користувача
			},


			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.navigation__courses-btn-prev',
				nextEl: '.navigation__courses-btn-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.05,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 2.3,

				},

				991: {
					slidesPerView: 3,
				},

			},

			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.team__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.team__slider', { // Вказуємо склас потрібного слайдера

			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 47,
			loop: true,
			speed: 800,
			autoHeight: true,
			navigation: {
				prevEl: '.team-btn-prev',
				nextEl: '.team-btn-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.05,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 2.3,

				},

				991: {
					slidesPerView: 3,
					spaceBetween: 47,
				},

			},

			// Події
			on: {

			}
		});
	}


	if (document.querySelectorAll('.slider-article').length > 0) {
		document.querySelectorAll('.slider-article').forEach(sliderBlock => {
			const mainSlider = sliderBlock.querySelector('.articles-section__slider')
			const prevButton = sliderBlock.querySelector('.navigation-articles__btn-prev')
			const nextButton = sliderBlock.querySelector('.navigation-articles__btn-next')

			// Картка з проєктами 
			if (mainSlider) {
				new Swiper(mainSlider, {
					modules: [Navigation, Autoplay],
					observer: true,
					observeParents: true,
					slidesPerView: 2,
					spaceBetween: 20,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
						disableOnInteraction: true // Вимкнути автопрогравання при взаємодії користувача
					},
					navigation: {
						prevEl: prevButton,
						nextEl: nextButton,
					},

					breakpoints: {
						320: {
							slidesPerView: 1.05,
							spaceBetween: 20,
						},
						600: {
							slidesPerView: 1.1,

						},

						767.98: {
							slidesPerView: 2,
						},

					},
				});
			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});