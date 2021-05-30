const recipeContainer = document.querySelector(".recipes-list");
const callAPI = "https://easy-meals-recipes.georgiosf.no/wp-json/wp/v2/wprm_recipe?per_page=100";
const changeCat = document.querySelector(".all-categories");
const showMoreBtn = document.querySelector("#showMoreBtn");


async function getRecipes() {
    try {
        const response = await fetch(callAPI);
        const recipes = await response.json();
        // console.log(recipes)

        // TESTING
        // console.log(recipes[0].recipe.tags.keyword[0].name);

        // for (let q = 0; q < recipes.length; q++) {
        //     console.log(recipes[q].recipe.tags.keyword[0].name)
        // }








        //----------------------------------------------------------


        recipeContainer.innerHTML = "";

        for (let i = 0; i < recipes.length; i++) {
            
            if (i===6) {
                break
            } 

            recipeContainer.innerHTML += `
            <a href="recipe-details.html?id=${recipes[i].id}">
            <div class="individual-container">
             <div class="ind-img">
                 <img class="rendered-img" src=${recipes[i].recipe.image_url} alt="${recipes[i].recipe.name}">
             </div>
                <div class="ind-h2">
                    <h2>${recipes[i].recipe.name}</h2>
                </div>

                <div class="cooking-info">
                    <div class="cook-time">
                        <img src="images/Icon-stopwatch.png" alt="stopwatch"><p>${recipes[i].recipe.total_time}'<p>
                    </div>
                    <div class="difficulty">
                        <img src="images/Icon-chef.png" alt="chefs-hat"><p>${recipes[i].recipe.custom_time_label}</p>
                    </div>
                    <div class="portions">
                        <img src="images/Icon-spoon-fork.png" alt="spoon and fork"><p>${recipes[i].recipe.servings}</p>
                    </div>
                </div>
            </div>
            </a>` 



            function showMoreRecipes() {
                for (let i = 6; i < recipes.length; i++)
                
                recipeContainer.innerHTML += `
                <a href="recipe-details.html?id=${recipes[i].id}">
                <div class="individual-container">
                 <div class="ind-img">
                     <img class="rendered-img" src=${recipes[i].recipe.image_url} alt="${recipes[i].recipe.name}">
                 </div>
                    <div class="ind-h2">
                        <h2>${recipes[i].recipe.name}</h2>
                    </div>

                    <div class="cooking-info">
                        <div class="cook-time">
                            <img src="images/Icon-stopwatch.png" alt="stopwatch"><p>${recipes[i].recipe.total_time}'<p>
                        </div>
                        <div class="difficulty">
                            <img src="images/Icon-chef.png" alt="chefs-hat"><p>${recipes[i].recipe.custom_time_label}</p>
                        </div>
                        <div class="portions">
                            <img src="images/Icon-spoon-fork.png" alt="spoon and fork"><p>${recipes[i].recipe.servings}</p>
                        </div>
                    </div>
                </div>
                </a>` 
                showMoreBtn.disabled = true;
                showMoreBtn.innerText = "No more recipes to show"
                showMoreBtn.style.width = "50%";
            }


            
            function filterByCategory() {
                let categorySelector = document.querySelector(".all-categories").value;
                console.log(categorySelector);

                // for (let i = 0; i < recipes.length; i++) {
                //     console.log(recipes);


                    if (categorySelector === "all_recipes") {
                        console.log(recipes[i].recipe.name);
                    } else if (categorySelector === "meat") {
                        console.log(recipes[i].recipe.tags.keyword[0].name);
                    }
                
            }



        }
    } catch(error) {
        console.log("Error");
    }
    
    changeCat.addEventListener("change", filterByCategory);
    showMoreBtn.addEventListener("click", showMoreRecipes);
}
getRecipes();


