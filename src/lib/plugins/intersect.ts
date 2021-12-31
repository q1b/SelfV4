export const intersect = async (
	el: HTMLElement,
	{ type, value, modifiers, original, expression },
	{ Alpine, effect, cleanup, evaluate }
) => {
	const { selector, enterAction, leaveAction } = evaluate(expression);
	const elements = document.querySelectorAll(selector);
	const observer = new IntersectionObserver((entities, oberser) => {
		entities.forEach((entry) => {
			if (entry.isIntersecting) {
				enterAction(entry.target);
			} else {
				leaveAction(entry.target);
			}
		});
	});
	elements.forEach((e) => observer.observe(e));
};

/*
    entering means comming into view
    leaving means going away of view

    x-inview.element.entering.from.top.leaving.to.top.threshold.5.rootMarginY.400px=""
*/
