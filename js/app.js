/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// All Sections
const sections = document.querySelectorAll("section");

// Target for nav items
const navBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav, listen for click events
function buildNavBar() {
  for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    const tag = document.createElement("a");
    const sectionName = sections[i].getAttribute("data-nav");
    const sectionNamePart = sectionName.replace(/\s/g, "").toLocaleLowerCase();
    tag.setAttribute("href", "#" + sectionNamePart);
    tag.setAttribute("id", "sec-" + [i + 1]);
    tag.setAttribute("class", "menu__link");
    tag.innerText = sectionName;
    tag.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById(sectionNamePart).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
    li.appendChild(tag);
    navBar.appendChild(li);
  }
}

// Add class 'your-active-class' to section and corresponding nav item when near top of viewport, listen to scroll events
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= el.clientHeight / -2 &&
    rect.left >= 0 &&
    rect.bottom <= el.clientHeight * 1.5 &&
    rect.right >= 0
  );
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu when content loaded
window.addEventListener("load", buildNavBar());

// Scroll to section on link click
/* The event listener creation is included in buildNavBar() */

// Set sections as active
document.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    if (isInViewport(sections[i])) {
      sections[i].classList.add("your-active-class");
      document
        .querySelector("#sec-" + (i + 1))
        .classList.add("your-active-class");
    } else {
      sections[i].classList.remove("your-active-class");
      document
        .querySelector("#sec-" + (i + 1))
        .classList.remove("your-active-class");
    }
  }
});
