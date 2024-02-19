
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

