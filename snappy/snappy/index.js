// makes the navbar close on scroll when on mobile

// close nav on scoll------------
$(document).scroll(function (e) {
  var container = $("#navbarNav");

  // if the target of the scroll isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.collapse("hide");
  }
});

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 60);
});

// setting the nav bar to change

const header = document.querySelector(".myNav");
// ^^ here we are setting the thing we want to change
const sectionOne = document.querySelector(".banner-img");
// here we are setting thr thing we want to keep an eye of for the intersection to fire

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};
// here we are setting how much of the target is in the viewport for the interstor to fire

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
