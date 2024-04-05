document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
        const rentalsContainer = document.querySelector('.rentals-container');
  
        data.forEach(rental => {
          const rentalDiv = document.createElement('div');
          rentalDiv.classList.add('rental');
  
          const rentalHeader = document.createElement('div');
          rentalHeader.classList.add('rental-header');
  
          const rentalName = document.createElement('h2');
          rentalName.classList.add('rental-name');
          rentalName.textContent = rental.name;
  
          const toggleButton = document.createElement('button');
          toggleButton.classList.add('toggle-button');
          toggleButton.textContent = '+';
  
          rentalHeader.appendChild(rentalName);
          rentalHeader.appendChild(toggleButton);
          rentalDiv.appendChild(rentalHeader);
  
          const rentalDetails = document.createElement('div');
          rentalDetails.classList.add('rental-details');
          rentalDetails.style.display = 'none'; // Initially hide details
  
          const rentalImage = document.createElement('div');
          rentalImage.classList.add('rental-image');
  
          const image = document.createElement('img');
          image.src = rental.image;
          image.alt = rental.name;
  
          rentalImage.appendChild(image);
          rentalDetails.appendChild(rentalImage);
  
          const rentalDescription = document.createElement('div');
          rentalDescription.classList.add('rental-description');
  
          const rentalTable = document.createElement('table');
          const tableBody = document.createElement('tbody');
  
          for (const key in rental) {
            if (key !== 'name' && key !== 'image') {
              const row = document.createElement('tr');
              const cell1 = document.createElement('td');
              const cell2 = document.createElement('td');
              cell1.textContent = key.replace(/_/g, ' ');
              cell2.textContent = rental[key];
              row.appendChild(cell1);
              row.appendChild(cell2);
              tableBody.appendChild(row);
            }
          }
  
          rentalTable.appendChild(tableBody);
          rentalDescription.appendChild(rentalTable);
          rentalDetails.appendChild(rentalDescription);
          rentalDiv.appendChild(rentalDetails);
  
          rentalsContainer.appendChild(rentalDiv);
  
          // Add event listener to toggle button
          toggleButton.addEventListener('click', function() {
            // Toggle display property
            rentalDetails.style.display = rentalDetails.style.display === 'none' ? 'block' : 'none';
          });
        });
      })
      .catch(error => console.error('Error fetching rental data:', error));
  });
  