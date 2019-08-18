// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
		.get(`https://lambda-times-backend.herokuapp.com/articles`)
		.then((res) => {
      // set the array to a var
      // main article variable
      const articles = res.data.articles;
      console.log(articles);

      // temp variables testing data
      const javascript = res.data.articles.javascript;
      const bootstrap = res.data.articles.bootstrap;
      const technology = res.data.articles.technology;
      const jquery = res.data.articles.jquery;
      const node = res.data.articles.node;
      console.log(javascript);  
      console.log(bootstrap); 
      console.log(technology); 
      console.log(jquery); 
      console.log(node);   
    })
		.catch((error) => {
      // console log any errors
			console.log(error);
    });

// Create a function to return article components
function Articles(articleData){
  const card = document.createElement('div');
  card.classList.add('card')

  // headline div
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent.add = 'Change me please';// TODO Add the textcontent for this div
  card.appendChild(headline);

  // Author div that is appended to the card
  const author = document.createElement('div');
  author.classList.add('author');
  card.appendChild(author);

  // img container appended to the author
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);

  // Img src appended to img container
  const imgSrc = document.createElement('img');
  imgSrc.src = 'Fill this out still please' // TODO Add the img source from the article
  imgContainer.appendChild(imgSrc);

  // Span appended to the author container
  const authorSpan = document.createElement('span');
  authorSpan.textContent = 'Fill me in please' // TODO Add the text content for the author
  author.appendChild(authorSpan);

  return card;
}