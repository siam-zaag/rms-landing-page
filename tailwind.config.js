/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'custom-gradient':
					'linear-gradient(90deg, #00B09B 0%, #4FF68E 100%)',
			},
			colors: {
				'brand-black': '#111111',
				'brand-gray': '#F8F9FA',
				'brand-primary': '#1CB066',
				'brand-blue-100': '#B3BCC6',
				'brand-blue-300': '#5C6F84',
				'brand-blue-400': '#3C536D',
				'brand-blue-500': '#0B2848',
				'brand-blue-800': '#061628',
				'brand-blue-800-80%': 'rgba(6, 22, 40, 0.80)',
				'stroke-new': '#EBEDF0',
				'stroke-new-10': 'rgba(231, 234, 237, 0.50)',
				'light-gray': 'rgba(235, 237, 240, 0.15)',
				'stroke-white': '#E7EAED',
				'brand-green-200': '#D7E6B9',
				'brand-green-500': '#A8C866',
				'neutral-10': '#FAFBFB',
				'neutral-20': '#F5F6F7',
				'neutral-30': '#EBEDF0',
				'neutral-40': '#DFE2E6',
				'neutral-50': '#C2C7D0',
				'neutral-90': '#8993A4',
				'neutral-100': '#7A8699',
				'neutral-200': '#6B788E',
				'neutral-300': '#5D6B82',
				'neutral-400': '#505F79',
				'neutral-500': '#42526D',
				'neutral-700': '#243757',
				'neutral-800': '#15294B',
				'error-500': '#EF4444',
				'brand-green-50': '#E8F7F0',
				'brand-linear-gradient': `linear-gradient(90deg, #00B09B 0%, #4FF68E 100%)`,
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
				montserrat: ['var(--font-montserrat)'],
			},
			screens: {
				xs: '480px',
				// => @media (min-width: 480px) { ... }

				sm: '767px',
				// => @media (min-width: 767px) { ... }

				md: '1024px',
				// => @media (min-width: 1024px) { ... }

				lg: '1280px',
				// => @media (min-width: 1280px) { ... }

				xl: '1536px',
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.text-gradient': {
					'background-clip': 'text',
					'-webkit-background-clip': 'text',
					color: 'transparent',
					'background-image':
						'linear-gradient(90deg, #00B09B 0%, #4FF68E 100%)',
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		}),
		require('tailwind-scrollbar-hide'),
	],
};
