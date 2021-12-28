/*const activeClass = {
	levelone: ['text-white', 'translate-x-2'],
	leveltwo: ['text-white', 'translate-x-2'],
	levelthree: ['active-link-color'],
};

// Classes to be applied when H2,H3,H4 are not in viewport
const inActiveClass = {
	levelone: ['text-slate-400'],
	leveltwo: ['text-slate-400'],
	levelthree: ['text-slate-400'],
};

// Utility functions
function removeClass(element: Element, Classes) {
	element.classList.remove(...Classes);
}

function addClass(element: Element, Classes) {
	element.classList.add(...Classes);
}

function applyActiveClass(element: Element) {
	if (element.classList.contains('levelone')) {
		removeClass(element, inActiveClass['levelone']);
		addClass(element, activeClass['levelone']);
	} else if (element.classList.contains('leveltwo')) {
		removeClass(element, inActiveClass['leveltwo']);
		addClass(element, activeClass['leveltwo']);
	} else {
		removeClass(element, inActiveClass['levelthree']);
		addClass(element, activeClass['levelthree']);
	}
}

function applyInactiveClass(element: Element) {
	if (element.classList.contains('levelone')) {
		removeClass(element, activeClass['levelone']);
		addClass(element, inActiveClass['levelone']);
	} else if (element.classList.contains('leveltwo')) {
		removeClass(element, activeClass['leveltwo']);
		addClass(element, inActiveClass['leveltwo']);
	} else {
		removeClass(element, activeClass['levelthree']);
		addClass(element, inActiveClass['levelthree']);
	}
}
*/

const cards = document.querySelectorAll('.card');
const cardsContainer = document.getElementById('cardsContainer');
const maskRef = document.getElementById('mask');

const obv = new IntersectionObserver(
	(entries) => {
		entries.forEach((e) => {
			if (!e.isIntersecting) {
				maskRef.animate(
					{
						opacity: [1, 0],
					},
					{
						duration: 620,
						fill: 'both',
						easing: 'ease-out',
					}
				).onfinish = () => maskRef.classList.add('hidden');
			} else {
				maskRef.classList.remove('hidden');
				maskRef.animate(
					{
						opacity: [0, 1],
					},
					{
						duration: 620,
						fill: 'both',
						easing: 'ease-in',
					}
				);
			}
		});
	},
	{
		threshold: 0.1,
		rootMargin: '-200px 0px -200px 0px',
	}
);

obv.observe(cardsContainer);

const averageCardHeight = (): number => {
	let avg_height: number = 0;
	cards.forEach((card) => {
		avg_height += card.clientHeight;
	});
	avg_height = avg_height / cards.length;
	return avg_height;
};

const windowInnerHeight: number = window.innerHeight;
const visibleArea = -1 * (windowInnerHeight / 2 - averageCardHeight());

let intersectedEntry: Element;

const observer: IntersectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				entry.target.classList.add('dark:text-slate-400', 'text-slate-200');
				entry.target.classList.remove('dark:text-white', 'translate-x-2', 'text-slate-900');
			} else {
				entry.target.classList.add('dark:text-white', 'translate-x-2', 'text-slate-900');
				entry.target.classList.remove('dark:text-slate-400', 'text-slate-200');
			}
		});
	},
	{
		rootMargin: `${visibleArea}px 0px ${visibleArea}px 0px`,
		threshold: 0.2,
	}
);

cards.forEach((card) => {
	observer.observe(card);
});
