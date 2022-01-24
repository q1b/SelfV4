// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check

// import { defineConfig } from 'vite'
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default /** @type {import('astro').AstroUserConfig} */ ({
	devOptions: {},
	buildOptions: {
		site: "http://selfv4.netlify.app", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
		sitemap: true, // Generate sitemap (set to "false" to disable)
	},
	vite:{
  		// resolve:{
  		//   alias:{
  		//     '@' : path.resolve(__dirname, './src')
  		//   },
		// },
 	 	ssr: {
    	  external: ["svgo"],
    	},		
  	},
	// Enable the Svelte renderer to support Svelte components.
	renderers: ["@astrojs/renderer-svelte"],
});
