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

                recipes.forEach(function(rec) {
                    const category = rec.recipe.tags.keyword[0].name;
                    
                    // if (categorySelector === "meat") {
                        
                    //     console.log(category.value === "Meat")
                    // } else if (categorySelector === "seafood") {
                    //     console.log(category === "Seafood")
                    // } else if (categorySelector === "pies") {
                    //     console.log(category === "Pies")
                    // }

                    // for (let i = 0; i < recipes.length; i++) {

                    //     let category = recipes[i].recipe.tags.keyword[0].name;

                    //     if (categorySelector === "meat") {
                    //         console.log(category === "Meat");
                    //     }
                    // }

                    // if (categorySelector === "all_recipes") {
                    //     console.log(recipes[i].recipe.name);
                    // } 
                    // else if (categorySelector === "meat") {
                    //     console.log(category.name);
                    // }
                // });                
            });

            function checkCategory(rec) {
                return category === "Meat";
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


// const peopleContainer = document.querySelector(".people-container");
// const filterButton = document.querySelector(".filter-button");
// const filterInput = document.querySelector(".filter-input");

// const peopleList = [
//     {
//         name: "Bob",
//         age: 35
//     },
//     {
//         name: "Sally",
//         age: 29
//     },
//     {
//         name: "Mark",
//         age: 45
//     },
//     {
//         name: "Bob",
//         age: 12
//     }    
// ];

// function addPeople(people){
//     peopleContainer.innerHTML = "";
//     people.forEach(function(person){
//         peopleContainer.innerHTML += `<div><h2>${person.name}</h2><p>They are ${person.age} years old</div>`;
//     });
// }

// addPeople(peopleList);

// function checkName(person){
//     return person.age <= filterInput.value;
// }

// filterButton.onclick = function filterPeople(){
//     const filteredPeople = peopleList.filter(checkName);
//     addPeople(filteredPeople);
// }
