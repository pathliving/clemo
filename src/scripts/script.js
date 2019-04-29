// fixed menu
window.onscroll = function () {
  scrollNav()
};

var header = document.getElementById("header");
var content = document.getElementById("content");
var fixed = content.offsetTop;

function scrollNav() {
  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

// scroll to item ID
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// smooth visible blocks when scroll
// window.onscroll = function () {
//   if (window.pageYOffset < 100) {
//     document.getElementById('services').style.display = "none";
//   } else {
//     document.getElementById('services').style.display = "block";
//   }
// }

var inputs = document.querySelectorAll(".form__input");
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.value = "";
  input.addEventListener("keyup", function (e) {
    var node = e.target;
    var eventUnFilled = new Event("unFilled");
    var eventFilled = new Event("filled");
    var label = document.querySelector("[for='" + node.getAttribute("id") + "']");
    if (node.value.trim() == "")
      label.dispatchEvent(eventUnFilled);
    else
      label.dispatchEvent(eventFilled);
  });
}
