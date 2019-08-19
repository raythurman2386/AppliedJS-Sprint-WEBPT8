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
const cardsContainer = document.querySelector('.cards-container');

axios
		.get(`https://lambda-times-backend.herokuapp.com/articles`)
		.then((res) => {
      // set the array to a var
      // main article variable
      const data = res.data.articles;
      console.log(data);

      // temp variables testing data
      const javascript = res.data.articles.javascript.forEach(element => {
        let article = Articles(element);

        cardsContainer.appendChild(article);
      });
      const bootstrap = res.data.articles.bootstrap.forEach(element => {
        let article = Articles(element);

        cardsContainer.appendChild(article);
      });
      const technology = res.data.articles.technology.forEach(element => {
        let article = Articles(element);

        cardsContainer.appendChild(article);
      });
      const jquery = res.data.articles.jquery.forEach(element => {
        let article = Articles(element);

        cardsContainer.appendChild(article);
      });
      const node = res.data.articles.node.forEach(element => {
        let article = Articles(element);

        cardsContainer.appendChild(article);
      });
    })
		.catch((error) => {
      // console log any errors
			console.log(error);
    });

// Create a function to return article components
function Articles(articleData){
  const card = document.createElement('div');
  card.classList.add('card')

  // headline div appended to the card
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = articleData.headline;// TODO Add the textcontent for this div
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
  imgSrc.src = articleData.authorPhoto; // TODO Add the img source from the article
  imgContainer.appendChild(imgSrc);

  // Span appended to the author container
  const authorSpan = document.createElement('span');
  authorSpan.textContent = articleData.authorName; // TODO Add the text content for the author
  author.appendChild(authorSpan);

  return card;
}