function findFurthestPoint(
	clickPointX,
	elementWidth,
	offsetX,
	clickPointY,
	elementHeight,
	offsetY
) {
	let x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
	let y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
	let z = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
	return z;
}
function appyStyles(element, color, rect, radius, event) {
	element.classList.add("ripple");
	element.style.backgroundColor =
		color === "dark" ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)";
	element.style.borderRadius = "50%";
	element.style.pointerEvents = "none";
	element.style.position = "absolute";
	element.style.left = event.clientX - rect.left - radius + "px";
	element.style.top = event.clientY - rect.top - radius + "px";
	element.style.width = element.style.height = radius * 2 + "px";
}

function applyAnimation(element) {
	element.animate(
		[
			{
				transform: "scale(0)",
				opacity: 1,
			},
			{
				transform: "scale(1.5)",
				opacity: 0,
			},
		],
		{
			duration: 500,
			easing: "linear",
		}
	);
}

function create(event, color) {
	const element = event.currentTarget;

	element.style.position = "relative";
	element.style.overflow = "hidden";

	const rect = element.getBoundingClientRect();

	const radius = findFurthestPoint(
		event.clientX,
		element.offsetWidth,
		rect.left,
		event.clientY,
		element.offsetHeight,
		rect.top
	);

	const circle = document.createElement("span");

	appyStyles(circle, color, rect, radius, event);
	applyAnimation(circle);

	element.appendChild(circle);

	setTimeout(() => circle.remove(), 500);
}

export const ripple = (
	el: HTMLElement,
	{ value, modifiers, expression },
	{ Alpine, effect, cleanup }
) => {
	el.addEventListener("mouseup", function (event) {
		create(event, "light");
	});
};
