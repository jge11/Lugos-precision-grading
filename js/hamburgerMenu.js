const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const bodyBg = document.querySelector("body");
const navSocials = document.querySelector("navSocialLinks");
const menuLinks = document.querySelectorAll(".navLink");
let nav = document.getElementById("navBar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bodyBg.classList.toggle("active");
  navSocials.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    bodyBg.classList.remove("active");
    navSocials.classList.remove("active");
  })
);

document.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  if (scrollPos > 40) {
    nav.style.backgroundColor = "rgba(25, 36, 54, .95)";
    menuLinks.forEach((link) => {
      link.style.color = "#ffffff";
    });
    // debugger;
  } else {
    nav.style.backgroundColor = "transparent";
    menuLinks.forEach((link) => {
      link.style.color = "#000000";
    });
  }
});

const customCount = document.querySelectorAll(".counter");

customCount.forEach((counter) => {
  counter.innerText = "0";

  const updateCount = () => {
    const target = counter.getAttribute("data-set");
    const c = +counter.innerHTML;
    const increment = target / 500;
    // debugger;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
