module.exports = {
    content: [
      "./index.html", 
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0a1123',
          secondary: '#8fd1bf',
          accent: '#ba2c94',
          button: '#ba2c94',
        },
        borderRadius: {
          'none': '0px',
          'sm': '4px',
          DEFAULT: '8px',
          'md': '12px',
          'lg': '16px',
          'xl': '20px',
          '2xl': '24px',
          '3xl': '32px',
          'full': '9999px',
          'button': '8px'
        },
      },
    },
    plugins: [],
  };
  