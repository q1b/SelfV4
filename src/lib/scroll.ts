// 28 => 112px
// let simpleNav = '';
let activeNav =
	"bg-pink-500/50 dark:bg-sky-500/5 shadow-glass shadow-sky-400/5 backdrop-blur-xl -translate-y-28 opacity-100";
// let unActiveNav = 'bg-sky-500/0 -translate-y-28';

function applyAnimation(el: HTMLElement, direction: PlaybackDirection) {
	let easing = "cubic-bezier(.2,.8,.4,1)";
	if (direction === "reverse") {
		easing = "ease-out";
	}
	return el.animate(
		{
			transform: [
				"translateY(-112px)",
				"translateY(-132px)",
				"translateY(0px)",
			],
			opacity: [0, 0.2, 1],
			offset: [0, 0.5, 1],
		},
		{
			duration: 200,
			direction,
			easing,
			fill: "both",
		}
	);
}

const throttle = (fn, delay) => {
	let lastTime = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - lastTime < delay) return;
		lastTime = now;
		fn(...args);
	};
};

export const scroll = async (
	el: HTMLElement,
	{ value, modifiers, expression },
	{ Alpine, effect, cleanup }
) => {
	// Initial state
	let scrollPos = 0;
	let scrollingUpward = true;
	if (document.body.getBoundingClientRect().top < -36) {
		el.classList.add(...activeNav.split(" ").slice(0, 4));
	}
	// adding scroll event
	window.addEventListener(
		"scroll",
		throttle(() => {
			if (document.body.getBoundingClientRect().top > -36) {
				el.classList.remove(...activeNav.split(" "));
			}
			if (document.body.getBoundingClientRect().top < -36) {
				if (
					document.body.getBoundingClientRect().top > scrollPos &&
					!scrollingUpward
				) {
					// Up direction
					el.classList.add(...activeNav.split(" "));
					applyAnimation(el, "normal");
					scrollingUpward = true;
				} else if (
					!(document.body.getBoundingClientRect().top > scrollPos) &&
					scrollingUpward
				) {
					scrollingUpward = false;
					applyAnimation(el, "reverse").onfinish = () => {
						el.classList.remove(...activeNav.split(" "));
					};
				}
			}
			scrollPos = document.body.getBoundingClientRect().top;
		}, 100)
	);
	console.log(modifiers);
	console.log(expression);
};
