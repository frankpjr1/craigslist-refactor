#My steps for setting up Tailwindcss:

1. Install live server **"yarn add -D live-server"**
2. Install development dependencies **"yarn add -D tailwindcss@2.2.19 postcss@latest autoprefixer@latest"**
3. Create **postcss.config.js** file and copy code from tailwindcss docs
4. Initialize tailwindcss **"npx tailwindcss init"**
5. Build tailwind file **npx tailwindcss -i css/style.css -o css/tailwind.css --w**
6. Add build to **script in the package.json file**
7. Link index file to **tailwind.css file**