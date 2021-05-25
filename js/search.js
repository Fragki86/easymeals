const searchAPI = "https://easy-meals-recipes.georgiosf.no/wp-json/wp/v2/wprm_recipe?per_page=100";
const searchIcon = document.querySelector(".search-icon");
const searchArea = document.querySelector(".search-div");
const searchBar = document.querySelector("#search");
const searchResults = document.querySelector(".search-results");

searchIcon.addEventListener ("click", comeDown);
searchBar.addEventListener("input", () => searchRecipes(searchBar.value));

function comeDown() {
    searchArea.classList.toggle("search-visible");
}

searchResults.innerHTML = "";

const searchRecipes = async (checkAll) => {
        try {
            const response = await fetch(searchAPI);
            const results = await response.json();
    
            let recCheck = results.filter((recs) => {
                const regex = new RegExp(`${checkAll}`, "gi");
                return (
                    recs.recipe.name.match(regex)
                );
        
            });
    
            if (checkAll.length === 0) {
                recCheck = [];
                searchResults.innerHTML = "";
            }
            deliverHTML(recCheck);

        } catch(error) {
            console.log("ERROR!!!!!!!!!!!!!!!!!!")
        }
    }


const deliverHTML = (recCheck) => {
    if (recCheck.length > 0) {
        const finalResult = recCheck
        .map(
            (match) => `
            <a href="recipe-details.html?id=${match.recipe.id}">
                <li>${match.recipe.name} <img class="search-res-img" src="${match.recipe.image_url}"></li>
            </a>`
                // <img class="search-res-img" src="${match.recipe.image_url}"
        )
        .join("");
        console.log(finalResult);
        searchResults.innerHTML = finalResult;
    }
}


