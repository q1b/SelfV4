const DurOfContainerToAppear = 500;
const itsDur = 50;
const itsDelay = 50;

const navDialogContainer = document.getElementById('nav-dialog-container');

const navDialogContainerAle = navDialogContainer.animate(
	[
		{
			transform: `translate${window.innerWidth < 624 ? 'X' : 'Y'}(-120%) scale(0.9)`,
			opacity: 0,
		},
		{
			transform: 'translate(0px) scale(1)',
			opacity: 1,
		},
	],
	{
		duration: DurOfContainerToAppear,
		fill: 'both',
		easing: 'cubic-bezier( 0.23, 0.4, 0.32,1.33)',
	}
);

let navItems = {};

let navItemsEnterAle = {};

document.querySelectorAll('.NavItem').forEach((element: HTMLElement, i: number) => {
	navItems[i] = element;
	navItemsEnterAle[i] = element.animate(
		{
			transform: ['translateY(-10%)', 'translateY(0%)'],
			opacity: ['0', '1'],
		},
		{
			duration: itsDur * (i + 1),
			delay: itsDelay * (i + 1),
			endDelay: 5 * (i + 1),
			fill: 'both',
			easing: 'cubic-bezier(.2,.8,.4,1)',
		}
	);
});
