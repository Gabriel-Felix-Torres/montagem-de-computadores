window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {  
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });