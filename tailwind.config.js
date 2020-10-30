const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                "carstyle-logo": ['"Secular One"'],
                "carstyle-text": ['Inter'],
            },
            spacing: {
                '7': '1.75rem',
                '9': '2.25rem',
                '21': '5.25rem',
                '72': '18rem',
                '80': '20rem',
                '202': '35.5rem',
            },
            inset: {
                '-1': '-0.25rem',
                '-4': '-1rem',
                '-5': '-1.25rem',
                '1': '0.25rem',
                '4': '1rem',
                '5': '1.25rem',
                '7': '1.75rem',
                '1/2': '50%',
            },
            height: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            }
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [require('@tailwindcss/ui')],
};
