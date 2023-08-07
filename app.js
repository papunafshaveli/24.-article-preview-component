let info1 = document.getElementById("bottominfo");
let info2 = document.getElementById("bottominfo2");
let button1 = document.getElementById("sharebutton1");
let facebook = document.getElementById("fb");
let twitter = document.getElementById("twitt");
let pinterest = document.getElementById("pint");

button1.addEventListener("click", () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    info1.style.display = "flex";
    info2.style.display = "flex";
  } else {
    info1.style.display = "none";
    info2.style.display = "flex";
  }
});

document.addEventListener("click", (event) => {
  if (!info1.contains(event.target) && !info2.contains(event.target)) {
    info1.style.display = "flex";
    info2.style.display = "none";
  }
});

facebook.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com";
});

twitter.addEventListener("click", () => {
  window.location.href = "https://www.twitter.com";
});

pinterest.addEventListener("click", () => {
  window.location.href = "https://www.pinterest.com";
});
