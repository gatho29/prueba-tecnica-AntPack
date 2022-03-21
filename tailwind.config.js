module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'lnd-blue': 'rgb(59 130 246)',
        'lnd-gray': 'rgb(107 114 128)',
        'lnd-red': 'rgb(239 68 68)'
      }
    },
  },
  plugins: [],
}
