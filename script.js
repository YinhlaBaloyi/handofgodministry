const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> { 
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  }); 
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }
  
  window.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }
  
  document.getElementById("year").textContent = new Date().getFullYear();




  function adjustFooter() {
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector('footer');

    const contentHeight = body.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (contentHeight < viewportHeight) {
      footer.style.position = 'absolute';
      footer.style.bottom = '0';
      footer.style.left = '0';
      footer.style.right = '0';
    } else {
      footer.style.position = 'relative';
    }
  }

  // Run on load and on resize
  window.addEventListener('load', adjustFooter);
  window.addEventListener('resize', adjustFooter);



