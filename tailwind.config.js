const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                //Add your own color
                //https://tailwindcss.com/docs/customizing-colors
            },
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}