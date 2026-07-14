module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2E7D32',
                secondary: '#5D4037',
                accent: '#C8A97E',
                bg: '#FAFAFA'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Playfair Display', 'serif']
            }
        }
    },
    plugins: []
}
