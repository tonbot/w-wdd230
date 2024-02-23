
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

        if (typeof(Storage) !== "undefined") {
   
            if (localStorage.getItem("pageVisitCount")) {
                let count = parseInt(localStorage.getItem("pageVisitCount")) + 1;
                localStorage.setItem("pageVisitCount", count);
                document.getElementById("time-visited").textContent = count;
            } else {
                localStorage.setItem("pageVisitCount", 1);
                document.getElementById("time-visited").textContent = 1;
            }
        } else {
            document.getElementById("time-visited").textContent = "Sorry, your browser does not support Web Storage.";
        }
 