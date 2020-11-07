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
            screens: {
                'll': '1750px',
            },
            colors: {
                'secondary': '#E9ECF5',
                'svg': '#3E50F3',
                'on-hover': '#5263F4',
                'non-active': '#AEB1B9',
            },
            fontFamily: {
                "carstyle-logo": ['"Secular One"'],
                "carstyle-text": ['Inter'],
            },
            minWidth: {
                'screen': '100vw',
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
                '-2': '-0.5rem',
                '-3': '-0.75rem',
                '-4': '-1rem',
                '-5': '-1.25rem',
                '-6': '-1.5rem',
                '-7': '-1.75rem',
                '-8': '-2rem',
                '-12': '-3rem',
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
            },
            fontSize: {
                'xs': '0.7rem',
            },
            boxShadow: {
                'advantage': '0px 15px 33px -6px #D4D7E1',
            },
        },
    },

    variants: {
        translate: ['hover', 'group-hover', 'responsive'],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [require('@tailwindcss/ui')],
};
