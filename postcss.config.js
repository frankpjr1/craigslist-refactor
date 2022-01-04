// postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    content: [
        './components/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './index.html',
    ],
    // ...

}