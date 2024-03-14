/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bad': ['"Bad Script"'],
        'bebas': ['"Bebas Neue"'],
        'caveat': ['"Caveat"'],
        'kalnia': ['"Kalnia"'],
        'reenie': ['"Reenie Beanie"'],
        'josefin':['"Josefin Sans"']
      },
      backgroundImage: {
        'flowers': 'url("./sakura.png")',
        'shining': 'linear-gradient(to right, #A4133C 0%, #FF4D6D 20%, #FF8FA3 30%, #FFB3C1 40%, #FFCCD5 50%, #FFB3C1 60%, #FF8FA3 70%, #FF4D6D 80%, #A4133C 100%)'
      },
      animation: {
        tada: 'tada 1.5s ease-in-out',
        backInRight: 'backInRight 1.5s ease-in-out',
        bounceInLeft: 'bounceInLeft 1.5s ease-in-out',
        zoomIn: 'zoomIn 1.5s ease-in-out',
        jello: 'jello 1.5s ease-in-out 2s',
        bouncing: 'bouncing 1.2s ease-in-out',
        bounce: 'bounce 1s ease-in-out',
        textShine: 'textShine 1s ease-in-out infinite alternate'
      },
      keyframes: {
        tada: {
          '0%': {transform: 'scale3d(1, 1, 1)'},
        
          '10%, 20%': {transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'},
        
          '30%, 50%, 70%, 90%': {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'},
        
          '40%, 60%, 80%': {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'},
        
          '100%': {transform: 'scale3d(1, 1, 1)'},
        },
        backInRight: {
          '0%': {transform: 'translateX(2000px) scale(0.7)'},
        
          '80%': {transform: 'translateX(0px) scale(0.7)'},
        
          '100%': {transform: 'scale(1)'},
        },
        bounceInLeft: {
          '0%': {transform: 'translate3d(-3000px, 0, 0) scaleX(3)'},
        
          '60%': {transform: 'translate3d(25px, 0, 0) scaleX(1)'},
        
          '75%': {transform: 'translate3d(-10px, 0, 0) scaleX(0.98)'},
        
          '90%': {transform: 'translate3d(5px, 0, 0) scaleX(0.995)'},
        
          '100%': {transform: 'translate3d(0, 0, 0)'}
        },
        zoomIn: {
          '0%': {
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          },
        
          '50%': {
            opacity: 1
          },
        },
        bouncing: {
          'from, 20%, 53%, to': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
          },

          '40%, 43%': {
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -30px, 0) scaleY(1.1)'
          },

          '70%': {
            animationiTmingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -15px, 0) scaleY(1.05)'
          },

          '80%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0) scaleY(0.95)'
          },

          '90%': {
            transform: 'translate3d(0, -4px, 0) scaleY(1.02)'
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        jello: {
          'from, 11.1%, to': {
            transform: 'translate3d(0, 0, 0)'
          },

          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)'
          },

          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)'
          },

          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)'
          },

          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)'
          },

          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
          },

          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)'
          },

          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
          }
        },
        textShine: {
          '0%': {
              backgroundPosition: '0% 50%'
          },
          '100%': {
              backgroundPosition: '100% 50%'
          }
        },
      },
    },
  },
  plugins: [],
}

