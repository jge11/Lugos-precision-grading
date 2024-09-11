let subTitleUpdate = [
  "HELLO, MY NAME IS JOHN DOE ------",
  "Physiotherapy & Chiropractor Clinic",
];
let titleUpdate = ["Ditch the pain", "Move freely again"];

let descriptionUpdate = [
  "I access to high levels of care that bring about real and long lasting improvements to your spinal health and well-being.",
  "Chiropractic care is the practice of to of physical ailments, including muscle strain back pain, and more. ",
];

let currentIndex = 0;

let newSubtitle = document.getElementById("subTitle");
let newTitle = document.getElementById("title");

setInterval(() => {
  newSubtitle.innerHTML = subTitleUpdate[currentIndex];
  newTitle.innerHTML = titleUpdate[currentIndex];
  currentIndex++;
  //   debugger;
  if (currentIndex === 2) currentIndex = 0;
}, 8000);
