const btn = document.getElementById('color_button');
const title = document.getElementById('title');

btn.addEventListener('click', function onClick(event) {
    title.style.color = 'blue';
});

const img = document.getElementById('ica8_headshot');

img.addEventListener('click', function onClick(event) {
    img.style.visibility='hidden';
});
