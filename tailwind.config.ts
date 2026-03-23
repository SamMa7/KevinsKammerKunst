import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: { 
                dark: '#030912',
                primary: '#0E2444',
                secondary: '#3E89E0',
                teritiary: '#CAE9FF',
                grey: '#C9D7E3',
                light: '#FAFBFF',
                yellow: '#F7FF58',
                orange: '#EB5E28',
                red: '#FF0000',
            }
        },
        fontFamily: {
            sans: ['Lato', 'sans'],
            serif: ['Lato', 'sans-serif'],
            headline: ['Caveat', 'cursive'],
        },
    }
};
