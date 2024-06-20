$(".tab").click(function () {
  $(".drop-list").slideToggle();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    $(".drop-list").slideUp();
  }
});

$(".section1 .left-side-content").css({
  transform: "translateY(0%)",
  opacity: "1",
});

$(".layer").css({
  scale: "1",
  opacity: "1",
});

setTimeout(() => {
  $(".images-field").css({
    scale: "1",
    opacity: "1",
  });
}, 300);

$(document).ready(function () {
  // Function to check if the center of an element is in the viewport
  function isCenterInViewport(element) {
    var rect = element[0].getBoundingClientRect();
    var windowHeight = $(window).height();
    var elementHeight = rect.top;
    var offset = windowHeight / 1 - elementHeight / 1;
    return rect.top <= offset;
  }

  // Function to trigger animations when a section is centered in the viewport
  function animateOnScroll() {
    // Loop through each section and check if its center is in the viewport
    $("section").each(function () {
      if (isCenterInViewport($(this))) {
        // Execute your animation code for this section
        if ($(this).hasClass("section4")) {
          $(".bt-card").css({ transform: "translateY(0%)", opacity: "1" });
        } else if ($(this).hasClass("section2")) {
          $(".section2 img").css({ transform: "translateX(0%)", opacity: "1" });
        } else if ($(this).hasClass("section3")) {
          $(".sec-card").css({ transform: "translateX(0%)", opacity: "1" });
        } else if ($(this).hasClass("section5")) {
          $(".girl-image").css({ transform: "translateX(0%)" });
        }
        // Add conditions for other sections if needed
      }
    });
  }

  // Trigger the 'animateOnScroll' function when the page is scrolled or loaded
  $(window).on("scroll load resize", function () {
    animateOnScroll();
  });
});
