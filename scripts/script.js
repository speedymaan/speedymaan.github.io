let timeoutId;

window.onscroll = function () {
  clearTimeout(timeoutId); // Clear any pending executions

  timeoutId = setTimeout(() => {
    makeHeaderSticky();
  }, 50); // Adjust the delay (in milliseconds) as needed
};

window.onscroll = function () {
  makeHeaderSticky();
};

var header = document.querySelector("header");
var headerOffset = header.offsetTop;

function makeHeaderSticky() {
  if (window.scrollY > headerOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
