// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        animation : {
            slide : 'slide 4s infinite'
        },
        keyframes : {
            slide : {
                from :  {
                    color : 'yellow'
                },
                to : {
                    color : 'green'
                }
            }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
