var typed = new Typed(".typing", {
  strings: [
    "",
    "Software Engineer",
    "Web Designer",
    "Web Developer",
    "UI / Ux",
  ],
  typeSpeed: 100,
  loop: true,
  backDelay: 900,
  backSpeed: 60,
});

// Aside Responsive Style
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", () => {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
    showSection(a);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

const removeBackSection = () => {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("back-section");
  }
};

const addBackSection = (num) => {
  allSections[num].classList.add("back-section");
};

const showSection = (e) => {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");
  }
  const target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
};

const updateNav = (e) => {
  for (let i = 0; i < totalNavList.length; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = e.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
};

document.querySelector(".hire-me").addEventListener("click", () => {
  const sectionIndex = document
    .querySelector(".hire-me")
    .getAttribute("data-section-index");
  showSection(document.querySelector(".hire-me"));
  updateNav(document.querySelector(".hire-me"));
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
const asideSectionTogglerBtn = () => {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.toggle("open");
  }
};
