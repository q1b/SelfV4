const { colors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

// const colors = require("colors")
module.exports = {
	experimental: {
		optimizeUniversalDefaults: true,
	},
	darkMode: "class",
	content: ["./src/**/*.{html,astro,md,ts,js}"],
	theme: {
		screens: {
			xxs: "360px",
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
			"2xl": "1920px",
		},
		borderRadius: {
			none: "0px",
			sm: "0.125rem",
			DEFAULT: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "1e5px",
			"blob-sm": "30% 70% 70% 30% / 53% 30% 70% 47%",
			"blob-md": "53% 47% 34% 66% / 63% 46% 54% 37%",
			"blob-lg": "37% 63% 56% 44% / 49% 56% 44% 51%",
			"blob-xl": "63% 37% 37% 63% / 43% 37% 63% 57%",
			"blob-2xl": "49% 51% 48% 52% / 57% 44% 56% 43%",
			"conditional-sm": "clamp(0px, calc(100vw - 100%) * 1e5,  2px)",
			"conditional-md": "clamp(0px, calc(100vw - 100%) * 1e5,  5px)",
			"conditional-lg": "clamp(0px, calc(100vw - 100%) * 1e5, 1rem)",
			"conditional-xl": "clamp(0px, calc(100vw - 100%) * 1e5, 2rem)",
			"conditional-2xl": "clamp(0px, calc(100vw - 100%) * 1e5, 4rem)",
			"conditional-3xl": "clamp(0px, calc(100vw - 100%) * 1e5, 8rem)",
		},
		boxShadow: (theme) => ({
			"dark-underline": `inset 0 -0.125em #030E1C, inset 0 -0.375em rgb(165,243,252,0.44)`,
			"light-underline": `inset 0 -0.125em #fff, inset 0 -0.375em rgb(165,243,252,0.44)`,
			sm: "0 1px 2px -1px rgba(0,0,0,0.3)",
			lg: ` 0 3px 5px -2px rgba(0,0,0,0.3), 0 7px 14px -5px rgba(0,0,0,0.3)`,
			md: ` 0 -1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -5px rgba(0,0,0,0.3), 0 2px 5px -5px rgba(0,0,0,0.3), 0 4px 12px -5px rgba(0,0,0,0.3), 0 12px 15px -5px rgba(0,0,0,0.3)`,
			"spread-lg": `
				inset 0px 0px 50px 10px rgba(0,0,0,0.3),
				0px 4px 16px 5px rgba(0,0,0,0.3)
			`,
			lg: `
				0 -2px 5px 0 rgba(0,0,0,0.3),
				0 1px 1px -2px rgba(0,0,0,0.3),
				0 2px 2px -2px rgba(0,0,0,0.3),
				0 5px 5px -2px rgba(0,0,0,0.3),
				0 9px 9px -2px rgba(0,0,0,0.3),
				0 16px 16px -2px rgba(0,0,0,0.3)
			`,
			xl: `
				0 -1px 2px 0 rgba(0,0,0,0.3),
				0 2px 1px -2px rgba(0,0,0,0.3),
				0 5px 5px -2px rgba(0,0,0,0.3),
				0 10px 10px -2px rgba(0,0,0,0.3),
				0 20px 20px -2px rgba(0,0,0,0.3),
				0 40px 40px -2px rgba(0,0,0,0.3)
			`,
			"2xl": `
				0 -1px 2px 0 rgba(0,0,0,0.3),
				0 3px 2px -2px rgba(0,0,0,0.3),
				0 7px 5px -2px rgba(0,0,0,0.3),
				0 12px 10px -2px rgba(0,0,0,0.3),
				0 22px 18px -2px rgba(0,0,0,0.3),
				0 41px 33px -2px rgba(0,0,0,0.3),
				0 100px 80px -2px rgba(0,0,0,0.3)
			`,
			glow: `
				0 0px 2px 0 rgba(0,0,0,0.3),
				0 0px 2px -2px rgba(0,0,0,0.3),
				0 0px 5px -2px rgba(0,0,0,0.3),
				0 0px 10px -2px rgba(0,0,0,0.3),
				0 0px 18px -2px rgba(0,0,0,0.3),
				0 0px 33px -2px rgba(0,0,0,0.3),
				0 0px 80px -2px rgba(0,0,0,0.3)
			`,
			"elevation-low": `
				0px 1px 0.9px rgba(0,0,0,0.46),
				0px 1.4px 1.3px -1.8px rgba(0,0,0,0.36),
				0px 3.6px 3.4px -3.7px rgba(0,0,0,0.26)
			`,
			"elevation-medium": `
				0px 1px 0.9px rgba(0,0,0, 0.48),
				0px 2.3px 2.2px -1.2px rgba(0,0,0, 0.4),
				0px 6.8px 6.4px -2.5px rgba(0,0,0, 0.32),
				0px 18.2px 17.2px -3.7px rgba(0,0,0, 0.25)
			`,
			"elevation-high": `
				0px 1px 0.9px rgba(0,0,0, 0.44),
				0px 3.2px 3px -0.5px rgba(0,0,0, 0.41),
				0px 6.4px 6px -1.1px rgba(0,0,0, 0.37),
				0px 11.8px 11.2px -1.6px rgba(0,0,0, 0.34),
				0px 21px 19.8px -2.1px rgba(0,0,0, 0.3),
				-0.1px 35.5px 33.5px -2.6px rgba(0,0,0, 0.26),
				-0.1px 56.8px 53.7px -3.2px rgba(0,0,0, 0.23),
				-0.2px 86.4px 81.6px -3.7px rgba(0,0,0, 0.19)
			`,
			spread:
				"inset 0px 0px 10px 1px #ffffff, inset 0px 0px 50px 10px rgba(0,0,0,0.3), 0px 0px 10px 3px rgba(0,0,0,0.3)",
				"inner-shadow-0": "inset 0 0 0 1px rgba(0,0,0,0.3)",
				"inner-shadow-1": "inset 0 1px 2px 0 rgba(0,0,0,0.3)",
				"inner-shadow-2": "inset 0 1px 4px 0 rgba(0,0,0,0.3)",
				"inner-shadow-3": "inset 0 2px 8px 0 rgba(0,0,0,0.3)",
				"inner-shadow-4": "inset 0 2px 14px 0 rgba(0,0,0,0.3)",
			glass:
				"inset 0px 1px 6px 0px rgba(0,0,0,0.3),inset 0px 1px 36px 6px rgba(0,0,0,0.3),inset 17px -2px 72px 12px rgba(0,0,0,0.3)",
		}),
		extend: {
			colors: ({ theme }) => ({
				slate: {
					1000: "#030E1C",
				},
				alpine: "#77C1D2",
			}),
			fontFamily: {
				cascadia: "Cascadia Code PL",
				sans: ["Manrope", ...defaultTheme.fontFamily.sans],
			},
			transitionProperty: {
				"shadow-colors": "shadow,color",
				spacing: "margin, padding",
				"transform-colors": "transform,color",
			},
			transitionTimingFunction: {
				snappy: "cubic-bezier(.2,.8,.4,1)",
				swift: "cubic-bezier(0.175,0.885,0.32,1.275)",
			},
			aspectRatio: {
				auto: "auto",
				square: "1 / 1",
				video: "16 / 9",
				landscape: "4 / 3",
				portrait: "3 / 4",
				widescreen: "16 / 9",
				ultrawide: "18 / 5",
				golden: "1.6180 / 1",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: "none",
						color: theme("colors.slate.700"),
						hr: {
							borderColor: theme("colors.slate.100"),
							marginTop: "3em",
							marginBottom: "3em",
						},
						"h1, h2, h3": {
							letterSpacing: "-0.025em",
						},
						h2: {
							marginBottom: `${16 / 24}em`,
						},
						h3: {
							marginTop: "2.4em",
							lineHeight: "1.4",
						},
						h4: {
							marginTop: "2em",
							fontSize: "1.125em",
						},
						"h2 small, h3 small, h4 small": {
							fontFamily: theme("fontFamily.mono").join(", "),
							color: theme("colors.slate.500"),
							fontWeight: 500,
						},
						"h2 small": {
							fontSize: theme("fontSize.lg")[0],
							...theme("fontSize.lg")[1],
						},
						"h3 small": {
							fontSize: theme("fontSize.base")[0],
							...theme("fontSize.base")[1],
						},
						"h4 small": {
							fontSize: theme("fontSize.sm")[0],
							...theme("fontSize.sm")[1],
						},
						"h2, h3, h4": {
							"scroll-margin-top": "var(--scroll-mt)",
						},
						"ul > li": {
							paddingLeft: "1.75em",
						},
						"ul > li::before": {
							width: "0.75em",
							height: "0.125em",
							top: "calc(0.875em - 0.0625em)",
							left: 0,
							borderRadius: "999px",
							backgroundColor: theme("colors.slate.300"),
						},
						a: {
							fontWeight: theme("fontWeight.semibold"),
							textDecoration: "none",
							borderBottom: `1px solid ${theme("colors.sky.300")}`,
						},
						"a:hover": {
							borderBottomWidth: "2px",
						},
						"a code": {
							color: "inherit",
							fontWeight: "inherit",
						},
						strong: {
							color: theme("colors.slate.900"),
							fontWeight: theme("fontWeight.semibold"),
						},
						"a strong": {
							color: "inherit",
							fontWeight: "inherit",
						},
						code: {
							fontWeight: theme("fontWeight.medium"),
							fontVariantLigatures: "none",
						},
						pre: {
							color: theme("colors.slate.50"),
							borderRadius: theme("borderRadius.xl"),
							padding: theme("padding.5"),
							boxShadow: theme("boxShadow.md"),
							textShadow: "0 0.6px 20px #FFF2, 0 0.2px 20px #FFF2",
							display: "flex",
							marginTop: `${20 / 14}em`,
							marginBottom: `${32 / 14}em`,
						},
						"p + pre": {
							marginTop: `${-4 / 14}em`,
						},
						"pre + pre": {
							marginTop: `${-16 / 14}em`,
						},
						"pre code": {
							flex: "none",
							minWidth: "100%",
						},
						table: {
							fontSize: theme("fontSize.sm")[0],
							lineHeight: theme("fontSize.sm")[1].lineHeight,
						},
						thead: {
							color: theme("colors.slate.700"),
							borderBottomColor: theme("colors.slate.200"),
						},
						"thead th": {
							paddingTop: 0,
							fontWeight: theme("fontWeight.semibold"),
						},
						"tbody tr": {
							borderBottomColor: theme("colors.slate.100"),
						},
						"tbody tr:last-child": {
							borderBottomWidth: "1px",
						},
						"tbody code": {
							fontSize: theme("fontSize.xs")[0],
						},
						"figure figcaption": {
							textAlign: "center",
							fontStyle: "italic",
						},
						"figure > figcaption": {
							marginTop: `${12 / 14}em`,
						},
					},
				},
				dark: {
					css: {
						color: theme("colors.slate.400"),
						// textShadow: `0 1px 3px ${theme("colors.slate.400")}, 0 1px 2px ${theme("colors.slate.400")}`,
						textShadow:
							"0 1px 3px rgba(0,17,43,0.6), 0 1px 2px rgba(0,17,43,0.4)",

						// textShadow: "0 0.6px 20px currentColor, 0 0.2px 20px currentColor",
						"h2, h3, h4, thead th": {
							color: theme("colors.slate.200"),
						},
						"h2 small, h3 small, h4 small": {
							color: theme("colors.slate.400"),
						},
						code: {
							color: theme("colors.slate.200"),
						},
						hr: {
							borderColor: theme("colors.slate.200"),
							opacity: "0.05",
						},
						pre: {
							backgroundColor: theme("colors.slate.900"),
							boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
						},
						a: {
							color: theme("colors.white"),
							borderBottomColor: theme("colors.sky.400"),
						},
						strong: {
							color: theme("colors.slate.200"),
						},
						thead: {
							color: theme("colors.slate.300"),
							borderBottomColor: "rgb(148 163 184 / 0.2)",
						},
						"tbody tr": {
							borderBottomColor: "rgb(148 163 184 / 0.1)",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
	],
};
