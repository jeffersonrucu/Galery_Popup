const MODAL = document.querySelector('.modal');
const PREVIEWS = document.querySelectorAll(".gallery img");
const ORIGINAL = document.querySelector(".full-img");
const CAPTION = document.querySelector(".caption");

PREVIEWS.forEach(PREVIEWS => {
  PREVIEWS.addEventListener('click', () =>{
    MODAL.classList.add("open");
    ORIGINAL.classList.add("open");

    //dynamix and image
    var originalSrc = PREVIEWS.getAttribute('data-original');
    ORIGINAL.src =  `../assets/images/${originalSrc}`;
    var altText = PREVIEWS.alt;
    CAPTION.textContent = altText;
  });
});

MODAL.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')){
    MODAL.classList.remove("open");
    ORIGINAL.classList.remove("open");
  }
});