import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import Alpine from "alpinejs";
import Tooltip from "@ryangjchandler/alpine-tooltip";
import { ripple } from "./ripple";
import { scroll } from "./scroll";
import { intersect as intersectV2 } from "./plugins/intersect";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";

import trap from "@alpinejs/trap";
import { riveAction, iconAction } from "./rive";
import { annotate } from "rough-notation";
import type { RoughAnnotationConfig } from "rough-notation/lib/model";

Alpine.plugin(trap);
Alpine.plugin(intersect);
Alpine.plugin(collapse);
Alpine.plugin(Tooltip);

const getObj = (array: string[], property: string): string => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === property) {
			if (array[i + 1] === undefined) return;
			const value = array[i + 1];
			return value;
		}
	}
};

Alpine.directive(
	"annotate",
	(
		el: HTMLElement,
		{ value, modifiers, expression },
		{ Alpine, effect, cleanup }
	) => {
		if (modifiers) {
			const delay = +getObj(modifiers, "delay");
			const config: RoughAnnotationConfig = {
				type: value,
				color: getObj(modifiers, "color") ?? "currentColor",
				animationDuration: +getObj(modifiers, "duration") ?? 400,
			};
			if (expression) {
				config.color = expression;
			}
			const annotation = annotate(el, config);
			if (delay) {
				setTimeout(() => {
					annotation.show();
				}, delay);
			} else {
				annotation.show();
			}
		}
	}
);

Alpine.directive("rive", riveAction);
Alpine.directive("icon", iconAction);
Alpine.directive("ripple", ripple);
Alpine.directive("scroll", scroll);
Alpine.directive("inview", intersectV2);

window.Alpine = Alpine;

Alpine.start();
