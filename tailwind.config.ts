import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            // https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa
            blue: {
                110: '#0F4C75',
                '100b': '#007bff',
                100: '#3282B8',
            },
            grey: {
                120: '#2F3337',
                110: '#5F666D',
                100: '#778088',
                90: '#F2F2F2',
                20: '#F0F0F0',
            },
            red: '#D80032',
            black: '#000000',
            white: '#FFFFFF',
            amber: {
                500: '#f59e0b',
            },
        },
        extend: {},
    },
    plugins: [],
};
export default config;
