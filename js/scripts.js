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

// const textArea = document.getElementById("messageText");
// if (textArea) {
//   textArea.addEventListener("input", function () {
//     this.style.height = "auto";
//     this.style.height = this.scrollHeight + "px";
//   });
// }

//create array to assign properties and values
const testimonial = [
  {
    name: "Will E.",
    review: `I have worked with Adrian on a few different jobs now. He does great quality work. Very reasonable, trustworthy & clean. When an issue comes about, he’s there to fix it, day or night. Ill continue to use Lugos Precision Grading and i recommend whoever else to give them a call. Him & his team will get the job done ⭐️ ⭐️ ⭐️ ⭐️ ⭐️`,
  },
  {
    name: "Clutter Bee Gone Junk Removal & Dumpsters Naples",
    review: `Thank you once again to Adrian Lugo with Lugo’s Precision Grading & Services L.LC called last minute to clear my property before closing and got it done the SAME DAY !!! Was only supposed to clear some rubbish around the property but went out of his way and graded the area for the new owner
5 star service !!! ⭐️ ⭐️ ⭐️ ⭐️ ⭐️`,
  },

  {
    name: "Naples All-Stars",
    review: `Gave Adrian a call to come out and give us a hand to finish up a tree job it was last minute notice and he came out and helped us get the job done! Very professional and reliable.⭐️ ⭐️ ⭐️ ⭐️ ⭐️`,
  },
];

const updatedName = document.querySelector(".userName");

const updatedReview = document.querySelector("#customerReview");

let slideInterval = 8000;
let idx = 0;

function testimonialSlider() {
  if (!updatedName || !updatedReview) {
    console.log("One or more elements missing");
    return;
  }
  const { name, imgUrl, review } = testimonial[idx];

  updatedName.innerText = name;

  updatedReview.innerText = review;
  idx++;

  idx = (idx + 1) % testimonial.length;

  setTimeout(testimonialSlider, slideInterval);
}

testimonialSlider();
