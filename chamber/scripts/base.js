
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
    const cards = document.querySelectorAll('.card');
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#fff'; 
            document.body.classList.add('dark-mode');
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#222'; 
        }
    });
});

