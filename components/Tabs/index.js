// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

axios
		.get(`https://lambda-times-backend.herokuapp.com/topics`)
		.then((res) => {
      // set the array to a var
      console.log(res.data.topics);
      const data = res.data.topics;

      // loop over items and make a tab component
      data.forEach(element => {
        console.log(element)
        let tab = Tabs(element);

        // Attach to the dom
        topics.appendChild(tab);
      });
      
		})
		.catch((error) => {
      // console log any errors
			console.log(error);
    });
    
// Create a function to return the individual tab components
function Tabs(tabData) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = tabData;

  return tab;
}