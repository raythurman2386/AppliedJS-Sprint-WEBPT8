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

const itemCreator = (element, parent, name, content) => {
	let item = document.createElement(element);
	parent.appendChild(item);
	item.classList.add(name);
	item.textContent = content;

	return item;
}

function Header() {
  // main header container
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  // Date span
  const dateSpan = itemCreator('span', headerDiv, 'date', 'MARCH 28, 2019');
  // Title h1
  const title = itemCreator('h1', headerDiv, 'title', 'Lambda Times');
  // Temp Span
  const tempSpan = itemCreator('span', headerDiv, 'temp', '98°');
  return headerDiv;
}

const headerContainer = document.querySelector('.header-container').appendChild(Header())