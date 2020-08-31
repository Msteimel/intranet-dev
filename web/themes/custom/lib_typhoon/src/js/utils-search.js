// TODO: Click on the search button and expand the input field, prevent default submit
// TODO:Once clicked, as 'js-active' class, change FA icon, and enable button default.-white

const searchBtn = document.querySelector(".lib-search__search-button");
const searchInput = document.querySelector(".lib-input--search");
const searchIcon = searchBtn.querySelector("span.fa");

function searchExpand(e) {
  if (searchIcon.classList.contains("fa-search")) {
    e.preventDefault();
    searchInput.classList.add("js-active");
    searchIcon.classList.remove("fa-search");
    searchIcon.classList.add("fa-arrow-right");
  }
}

searchBtn.addEventListener("click", searchExpand);
