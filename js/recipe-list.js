const recipeContainer = document.querySelector(".recipes-list");
const callAPI = "https://easy-meals-recipes.georgiosf.no/wp-json/wp/v2/wprm_recipe?per_page=100";
const changeCat = document.querySelector(".all-categories");
const showMoreBtn = document.querySelector("#showMoreBtn");
 
/*---------------------------- Fetch API -------------------------- */
async function getRecipes() {
    try {
        const response = await fetch(callAPI);
        const recipes = await response.json();
 
        recipeContainer.innerHTML = "";
        renderRecipes(recipes, 0, 6);
 
        return recipes;
    } catch (error) {
        console.log("Error");
    }
}
 

/*---------------------------- Event Listeners -------------------------- */
getRecipes().then((recipes) => {
    changeCat.addEventListener("change", () => filterByCategory(recipes));
    showMoreBtn.addEventListener("click", () => showMoreRecipes(recipes));
});



/*---------------------------- Loop & Inner HTML -------------------------- */
function renderRecipes(recipes, start = 0, stop = 6) {
    recipeContainer.innerHTML = "";
 
    for (let i = start; i < recipes.length; i++) {
 
        if (i === stop) {
            break;
        }
 
        recipeContainer.innerHTML += `
            <a" href="recipe-details.html?id=${recipes[i].id}">
            <div class="individual-container">
             <div class="ind-img">
                 <img class="rendered-img" src=${recipes[i].recipe.image_url} alt="${recipes[i].recipe.name}">
             </div>
                <div class="ind-h2">
                    <h2>${recipes[i].recipe.name}</h2>
                </div>
 
                <div class="cooking-info">
                    <div class="cook-time">
                        <img src="images/stopwatch-last.svg" alt="stopwatch" class="icons-info"><p>${recipes[i].recipe.total_time}'<p>
                    </div>
                    <div class="difficulty">
                        <img src="images/chef-last.svg" alt="chefs-hat" class="icons-info"><p>${recipes[i].recipe.custom_time_label}</p>
                    </div>
                    <div class="portions">
                        <img src="images/cutlery-last.svg" alt="spoon and fork" class="icons-info"><p>${recipes[i].recipe.servings}</p>
                    </div>
                </div>
            </div>
            </a>`
    }
}
 

/*---------------------------- Show More Button -------------------------- */
function showMoreRecipes(recipes) {
    renderRecipes(recipes, 0, recipes.length);
 
 
    showMoreBtn.disabled = true;
    showMoreBtn.innerText = "No more recipes to show"
    showMoreBtn.style.width = "50%";
}
 

/*---------------------------- Filter by category -------------------------- */
function filterByCategory(recipes) {
    let categorySelector = document.querySelector(".all-categories").value;
 
    if (categorySelector === "all_recipes") {
        renderRecipes(recipes);
    } else {
        const filteredRecipes = recipes.filter(rec => rec.recipe.tags.keyword[0].name === categorySelector);
        renderRecipes(filteredRecipes);
    }
}





