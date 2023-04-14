// toggle menu
let btn = document.querySelector(".toggle-menu i");
let links = document.querySelector(".links");
btn.onclick = () => {
  links.classList.toggle("open");
};

// dark mode
let body = document.body;
let darkBtn = document.querySelector(".mode i");
darkBtn.addEventListener("click", (e) => {
  body.classList.toggle("dark");
});

//  scroll to top
window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    document.querySelector("#up").classList.add("open");
  } else {
    document.querySelector("#up").classList.remove("open");
  }
});
document.querySelector("#up").addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
