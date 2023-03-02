function myFunction() {
    const x = document.getElementById("myTopnav");
    const y = document.getElementById("h1")
    const z = document.getElementById("header")
    if (x.className === "nav-links") {
      x.className += " responsive";
      y.className += " responsive";
      z.className += " responsive"
    } else {
      x.className = "nav-links";
      y.className = "header";
      z.className = "h1";
    }
  }