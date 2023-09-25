const loadNavbar = () => {
  const navbarContainer = document.getElementById("navbar-container");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      navbarContainer.innerHTML = xhr.responseText;
      loadFooter();
    }
  };

  xhr.open("GET", "navbar.html", true);
  xhr.send();
};

const loadFooter = () => {
  const footerContainer = document.getElementById("footer-container");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      footerContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "footer.html", true);
  xhr.send();
};

loadNavbar();
