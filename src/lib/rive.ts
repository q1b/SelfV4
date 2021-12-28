import { Rive } from 'rive-js';

const readRiveFile = (buffer: Blob) => {
	const reader = new FileReader();
	return new Promise((resolve, reject) => {
		reader.onerror = () => {
			reader.abort();
			reject(new DOMException('Problem parsing input file.'));
		};
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.readAsArrayBuffer(buffer);
	});
};

export async function getBuffer(filePath = '/animations/main.riv'): Promise<Blob> {
	const req: Request = new Request(filePath);
	const response: Response = await fetch(req);
	const buffer: Blob = await response.blob();
	return buffer;
}

let buffer: Blob;
let riveArrayBuffer;
let iconsBuf: Blob;
let iconsArrayBuf;

export const riveAction = async (el: HTMLElement, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {
	// params can be three, artboart, stateMachine,
	let event;
	let temp: {
		artboard?: string;
		stateMachine?: string;
	} = {};
	if (!buffer) {
		buffer = await getBuffer('/assets/main.riv');
	}
	if (!riveArrayBuffer) {
		riveArrayBuffer = await readRiveFile(buffer);
	}
	for (let i = 0; i < modifiers.length; i++) {
		const e = modifiers[i];
		switch (e) {
			case 'artboard':
				temp['artboard'] = modifiers[i + 1];
				break;
			case 'stateMachine':
				temp['stateMachine'] = modifiers[i + 1];
				break;
			case 'event':
				event = modifiers[i + 1];
		}
	}
	const dimensions = {
		width: 0,
		height: 0,
	};
	function getCanvasDimensions() {
		const { width, height } = el.parentElement?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0);
		return { width, height };
	}
	const rive = new Rive({
		canvas: el,
		buffer: <ArrayBuffer>riveArrayBuffer,
		artboard: temp.artboard,
		stateMachines: temp.stateMachine ?? 'switch',
		autoplay: false,
	});
	function updateBounds() {
		if (!el.parentElement) {
			return;
		}
		const { width, height } = getCanvasDimensions();
		const boundsChanged = width !== dimensions.width || height !== dimensions.height;
		if (el && rive && boundsChanged) {
			const dpr = window.devicePixelRatio || 1;
			el.width = dpr * width;
			el.height = dpr * height;
			el.style.width = width + 'px';
			el.style.height = height + 'px';
			dimensions.width = width;
			dimensions.height = height;
			// Updating the canvas width or height will clear the canvas, so call
			// startRendering() to redraw the current frame as the animation might
			// be paused and not advancing.
			rive.startRendering();
		}
		// Always resize to Canvas
		if (rive) {
			rive.resizeToCanvas();
		}
	}
	updateBounds();
	rive.play();
	let containerRef;
	switch (event) {
		case 'hover':
			containerRef = el.parentElement.parentElement;
			containerRef.onmouseenter = () => {
				rive.stateMachineInputs('switch')[0].fire();
			};
			containerRef.onmouseleave = () => {
				rive.stateMachineInputs('switch')[0].fire();
			};
			break;
		case 'click':
			containerRef = el.parentElement;
			containerRef.onclick = () => {
				rive.stateMachineInputs('switch')[0].fire();
			};
			break;
		case 'theme_change':
			setTimeout(() => {
				if (localStorage.theme === 'dark') {
					document.documentElement.classList.add('dark');
					rive.stateMachineInputs('switch')[0].value = true;
				} else {
					rive.stateMachineInputs('switch')[0].value = false;
				}
			}, 420);
			el.parentElement.onclick = () => {
				if (!rive.stateMachineInputs('switch')[0].value) {
					document.documentElement.classList.add('dark');
					localStorage.theme = 'dark';
					rive.stateMachineInputs('switch')[0].value = !rive.stateMachineInputs('switch')[0].value;
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.theme = 'light';
					rive.stateMachineInputs('switch')[0].value = !rive.stateMachineInputs('switch')[0].value;
				}
			};
			break;
		default:
			containerRef = el.parentElement.parentElement;
			containerRef.onmouseenter = () => {
				rive.stateMachineInputs('switch')[0].fire();
			};
			containerRef.onmouseleave = () => {
				rive.stateMachineInputs('switch')[0].fire();
			};
			break;
	}
};

export const iconAction = async (el: HTMLElement, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {
	if (!iconsBuf) {
		iconsBuf = await getBuffer('/assets/icons.riv');
	}
	if (!iconsArrayBuf) {
		iconsArrayBuf = await readRiveFile(iconsBuf);
	}
	const artboard = modifiers[0];

	const stateMachine = 'switch';
	const dimensions = {
		width: 0,
		height: 0,
	};
	function getCanvasDimensions() {
		const { width, height } = el.parentElement?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0);
		return { width, height };
	}
	const rive = new Rive({
		canvas: el,
		buffer: <ArrayBuffer>iconsArrayBuf,
		artboard,
		stateMachines: stateMachine ?? 'switch',
		autoplay: false,
	});
	function updateBounds() {
		if (!el.parentElement) {
			return;
		}
		const { width, height } = getCanvasDimensions();
		const boundsChanged = width !== dimensions.width || height !== dimensions.height;
		if (el && rive && boundsChanged) {
			const dpr = window.devicePixelRatio || 1;
			el.width = dpr * width;
			el.height = dpr * height;
			el.style.width = width + 'px';
			el.style.height = height + 'px';
			dimensions.width = width;
			dimensions.height = height;
			// Updating the canvas width or height will clear the canvas, so call
			// startRendering() to redraw the current frame as the animation might
			// be paused and not advancing.
			rive.startRendering();
		}
		// Always resize to Canvas
		if (rive) {
			rive.resizeToCanvas();
		}
	}
	updateBounds();
	rive.play();
	let containerRef: HTMLButtonElement | HTMLElement = el.parentElement;
	if (window.innerWidth >= 600) {
		containerRef.onmouseenter = () => {
			rive.stateMachineInputs('switch')[0].fire();
		};
		containerRef.onmouseleave = () => {
			rive.stateMachineInputs('switch')[0].fire();
		};
	} else {
		containerRef.onclick = () => {
			rive.stateMachineInputs('switch')[0].fire();
		};
		containerRef.onpointerenter = () => {
			rive.stateMachineInputs('switch')[0].fire();
		};
	}
};
