const loadResource = async (url, containerId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }
    const content = await response.text();
    const container = document.getElementById(containerId);
    container.innerHTML = content;
  } catch (error) {
    console.error(error);
  }
};

const loadAllResources = async () => {
  await loadResource("../../views/navbar.html", "navbar-container");
  await loadResource("../../views/footer.html", "footer-container");
};

loadAllResources();
