const searchBar = document.querySelector(".search-bar");
const searchIcons = document.querySelectorAll(".search-bar i");

searchIcons.forEach((searchIcon) => {
  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("change");
  });
});
