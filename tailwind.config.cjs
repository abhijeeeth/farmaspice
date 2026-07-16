module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1B4332',
                    light: '#2D6A4F',
                    dark: '#081C15',
                },
                secondary: {
                    DEFAULT: '#3E2723',
                    light: '#5D4037',
                    dark: '#1B0E0A',
                },
                accent: {
                    DEFAULT: '#C8A97E',
                    gold: '#D4AF37',
                    light: '#F4E3C1',
                },
                bg: '#FAF9F6',
                darkbg: '#121212'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Playfair Display', 'serif'],
                display: ['Syne', 'sans-serif']
            }
        }
    },
    plugins: []
}
