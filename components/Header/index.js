// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  // main header container
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  // Date span
  const dateSpan = document.createElement('span')
  dateSpan.classList.add('date');
  dateSpan.textContent = 'MARCH 28, 2019';
  headerDiv.appendChild(dateSpan);

  // Title h1
  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';
  headerDiv.appendChild(title);

  // Temp Span
  const tempSpan = document.createElement('span')
  tempSpan.classList.add('temp');
  tempSpan.textContent = '98°';
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerContainer = document.querySelector('.header-container').appendChild(Header())