const loadNavbar = () => {
  const navbarContainer = document.getElementById("navbar-container");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      navbarContainer.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "navbar.html", true);
  xhr.send();
};

loadNavbar();
