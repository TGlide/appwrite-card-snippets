import type { SvelteComponent } from 'svelte';
import Structure from './Structure.svelte';
import StructureCode from './Structure.svelte?raw';
import Popup from './Popup.svelte';
import PopupCode from './Popup.svelte?raw';
import Rotate from './Rotate.svelte';
import RotateCode from './Rotate.svelte?raw';

type Example = {
	component: typeof SvelteComponent;
	code: string;
};

export const examples = {
	structure: {
		component: Structure,
		code: StructureCode,
	},
	popup: {
		component: Popup,
		code: PopupCode,
	},
	rotate: {
		component: Rotate,
		code: RotateCode,
	},
} satisfies Record<string, Example>;
