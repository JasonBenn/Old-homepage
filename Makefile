buildCSS: index.css
	postcss index.css --use autoprefixer -d public/

resizeThumbnails:
	echo "resizing"
