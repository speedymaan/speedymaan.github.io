window.onscroll = function() {
  makeHeaderSticky();
};

var header = document.querySelector("header");
var headerOffset = header.offsetTop;

function makeHeaderSticky() {
  if (window.pageYOffset > headerOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}