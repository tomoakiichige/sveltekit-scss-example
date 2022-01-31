import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;',
					},
				},
			},
		},

		// paths: {
		// 	base: '/42',
		// },
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		importAssets(),
	],
};

export default config;
