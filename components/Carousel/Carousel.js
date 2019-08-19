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

let i = 0;

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
    // img.style.display = 'inline-block';
    carousel.appendChild(img);
  })

  // // Image 1
  // let img1 = document.createElement('img');
  // img1.src = "./assets/carousel/mountains.jpeg";
  // img1.style.display = 'inline-block';
  // carousel.appendChild(img1);

  // // Image 2
  // let img2 = document.createElement('img');
  // img2.src = "./assets/carousel/computer.jpeg";
  // carousel.appendChild(img2);

  // // Image 3
  // let img3 = document.createElement('img');
  // img3.src = "./assets/carousel/trees.jpeg";
  // carousel.appendChild(img3);

  // // Image 4
  // let img4 = document.createElement('img');
  // img4.src = "./assets/carousel/turntable.jpeg";
  // carousel.appendChild(img4);

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
console.log(images);

function moveLeft(){
  console.log('clicked left')
}

function moveRight(){
  console.log('moved right')
}