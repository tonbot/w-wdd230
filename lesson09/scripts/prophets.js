const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let death = document.createElement('h5');
      let birthdate = document.createElement('h5');
      let birthplace = document.createElement('h5');
      let numofchildren = document.createElement('h5');

      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name}  ${prophet.lastname} `;
      birthplace.textContent = ` Place of Birth : ${prophet.birthplace}`;
      birthdate.textContent = ` Date of Birth : ${prophet.birthdate}`;
      numofchildren.textContent = ` No of Chidren : ${prophet.numofchildren}`;
      death.textContent = ` Died On: ${prophet.death}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(birthplace);
      card.appendChild(birthdate);
      card.appendChild(numofchildren);
      card.appendChild(death);

      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression