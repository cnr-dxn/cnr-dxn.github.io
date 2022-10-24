const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['./images/ls1.jpg', './images/ls3.jpg', './images/ls4.jpg', './images/ls5.jpg']

/* Declaring the alternative text for each image file */
const images_alt = ['IllustratedRiver.jpeg', 'Fjord.jpeg', 'Simple.jpeg', 'Snow.jpeg']

/* Looping through images */
for (let i = 0; i < images.length; i++) { 
    // text += cars[i] + "<br>";
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', images_alt[i]);
    newImage.setAttribute('id', i);
    newImage.setAttribute('onclick', `calcRectArea(${i})`);
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

toggle_darken()

function calcRectArea(id) {
    const new_image = document.getElementById(id);
    const new_image_src = new_image.src;
    displayedImage.src = new_image_src;
    console.log(id);
}

function toggle_darken() {
    if (overlay.style.visibility == 'hidden') {
        overlay.style.visibility = 'visible';
        btn.textContent = "Lighten";
    }
    else {
        overlay.style.visibility = 'hidden';
        btn.textContent = "Darken";
    }
}