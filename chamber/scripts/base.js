
  function openNav() {
    document.getElementById("closeNav").style.display="inline-block";
    document.getElementById("openNav").style.display="none";
    var nav = document.querySelector('nav');
    nav.style.display = 'block';
    nav.style.display = 'flex';
  }

  function closeNav() {
    document.getElementById("openNav").style.display="inline-block";
    document.getElementById("closeNav").style.display="none";
    var nav = document.querySelector('nav');
    nav.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.switch input[type="checkbox"]');
    const weather = document.querySelector('.weather-content');

    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.backgroundColor = '#e6e6ea';
            document.body.style.color = '#222'; 
            document.body.classList.add('light-mode');
        } else {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff'; 
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
    });
});




// Function to fetch data from members.json and display members
function showMembers() {
  fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
          const membersContainer = document.getElementById('member-container');
          membersContainer.innerHTML = ''; // Clear previous content
          data.forEach(member => {
              const memberElement = document.createElement('div');
              memberElement.classList.add('memberCard'); // Add class for member card styling
              memberElement.innerHTML = `
                  <h2>${member.name}</h2>
                  <p>Address: ${member.address}</p>
                  <p>Phone: ${member.phone}</p>
                  <p>Website: <a href="${member.website}">${member.website}</a></p>
                  <p>Membership Level: ${member.membershipLevel}</p>
                  <!-- Add other member information here -->
              `;
              membersContainer.appendChild(memberElement);
          });
      })
      .catch(error => console.error('Error fetching members:', error));
}

// Function to switch between grid and list views
function toggleView(view) {
  const membersContainer = document.getElementById('member-container');
  membersContainer.classList.remove('gridView', 'listView');
  membersContainer.classList.add(view);
}

// Event listener for grid view button
document.getElementById('gridView').addEventListener('click', () => {
  toggleView('gridView');
});

// Event listener for list view button
document.getElementById('listView').addEventListener('click', () => {
  toggleView('listView');
});

// Initial load: Fetch and display members in grid view
document.addEventListener('DOMContentLoaded', () => {
  showMembers();
  toggleView('gridView');
});

// document.addEventListener("DOMContentLoaded", function() {
//     var today = new Date();
//     var dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

//     // Check if it's Monday, Tuesday, or Wednesday
//     if (dayOfWeek >= 1 && dayOfWeek <= 3) {
//         var banner = document.getElementById("chamberBanner");
//         banner.style.display = "block";

//         // Add event listener to close the banner
//         var closeBtn = document.getElementById("closeBannerBtn");
//         closeBtn.addEventListener("click", function() {
//             banner.style.display = "none";
//         });
//     }
// });
