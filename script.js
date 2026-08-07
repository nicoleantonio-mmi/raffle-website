document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("active");
    item.nextElementSibling.classList.toggle("active");
  });
});
