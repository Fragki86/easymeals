const searchIcon = document.querySelector(".search-icon");
const searchArea = document.querySelector(".search-div");

searchIcon.addEventListener ("click", comeDown);

function comeDown() {
    searchArea.classList.toggle("search-visible");
    console.log("DDD")
}