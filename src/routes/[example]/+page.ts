import { examples } from '$lib/examples';
import { error } from '@sveltejs/kit';

function isExample(param: string): param is keyof typeof examples {
	return Object.keys(examples).includes(param);
}

export async function load({ params }) {
	if (!isExample(params.example)) throw error(404, 'Not found');
	const example = examples[params.example];

	return {
		example,
	};
}
