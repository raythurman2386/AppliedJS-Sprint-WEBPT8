/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');

let imageSources = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];

const Carousel = () => {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  //left button
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  leftButton.addEventListener('click', moveLeft);
  carousel.appendChild(leftButton);

  imageSources.forEach(image => {
    let img = document.createElement('img');
    img.src = image;
    carousel.appendChild(img);
  });

  // Right button
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click', moveRight);
  carousel.appendChild(rightButton);

  return carousel;
}

carouselContainer.appendChild(Carousel());

const images = document.querySelectorAll('.carousel img');

let index = 0;

function moveLeft(e){
  console.log('clicked left', index);
  e.preventDefault();

  if(index === 0){
    index = images.length;
    showImage(index);
  } else {
    index--;
    showImage(index);
  }
}

function moveRight(e){
  console.log('moved right');
  e.preventDefault();

  if(index === images.length){
    index = 0;
    showImage(index);
  } else {
    index++;
    showImage(index);
  }
}

function showImage(){
  images[index].style.display = 'inline-block';
}

showImage();
