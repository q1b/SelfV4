import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import trap from '@alpinejs/trap';
import { riveAction, iconAction } from './rive';
import { annotate } from 'rough-notation';
import type { RoughAnnotationConfig } from 'rough-notation/lib/model';

Alpine.plugin(trap);
Alpine.plugin(intersect);

const getObj = (array: string[], property: string): string => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === property) {
			if (array[i + 1] === undefined) return;
			const value = array[i + 1];
			return value;
		}
	}
};

Alpine.directive('annotate', (el: HTMLElement, { value, modifiers, expression }, { Alpine, effect, cleanup }) => {
	if (modifiers) {
		const delay = +getObj(modifiers, 'delay');
		const config: RoughAnnotationConfig = {
			type: value,
			color: getObj(modifiers, 'color') ?? 'white',
			animationDuration: +getObj(modifiers, 'duration') ?? 400,
		};
		const annotation = annotate(el, config);
		if (delay) {
			setTimeout(() => {
				annotation.show();
			}, delay);
		} else {
			annotation.show();
		}
	}
});

Alpine.directive('rive', riveAction);
Alpine.directive('icon', iconAction);

window.Alpine = Alpine;

Alpine.start();
