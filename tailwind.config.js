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
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '7': '1.75rem',
                '9': '2.25rem',
                '21': '5.25rem',
            }
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [require('@tailwindcss/ui')],
};
