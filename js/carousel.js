const carouselAPI = "https://easy-meals-recipes.georgiosf.no/wp-json/wp/v2/wprm_recipe?per_page=3&offset=12";
const carousel = document.querySelector(".carousel-container");
const dots = document.querySelector(".dots-container");
const activeDot = document.querySelector(".active-dot");


let offset = 12;

/* ----------------- Fetch Api and create innerHTML ----------------- */
async function getCarousel() {
    try {
        const response = await fetch(carouselAPI);
        const carouselRecipe = await response.json();
        carousel.innerHTML = "";

        carouselRecipes(carouselRecipe);

        return carouselRecipe;

        // const prevBtn = document.querySelector("#prev-slide");
        // const nextBtn = document.querySelector("#next-slide");

        // nextBtn.addEventListener("click", () => {
        //     if (offset >= 12 && offset < 14) {
        //         offset++
        //     } else if (offset === 14) {
        //         offset === 12
        //     }  
        //     getCarousel();
        // });
        
        // prevBtn.addEventListener("click", () => {
        //     if (offset > 12 && offset <= 14) {
        //         offset--
        //     }
        //     getCarousel();
        // });

        // if (offset === 12) {
        //     prevBtn.style.opacity = "0";
        // }

        // if (offset === 14) {
        //     nextBtn.style.display = "none";
        // }
        /* ----------------- Button functionality ----------------- */
        

    } catch(error) {
            console.log("Error");
    }
}

getCarousel();

function carouselRecipes(carouselRecipe) {
    for (let i = 0; i < carouselRecipe.length; i++) {
        carousel.innerHTML += `
                <div class="carousel-buttons">
                    <button id="prev-slide"><i class="fas fa-angle-left" aria-label="previous slide"></i></button>
                    <button id="next-slide"><i class="fas fa-angle-right" aria-label="previous slide"></i></button>
                </div>
                <div class="par">
                    
                <a href="recipe-details.html?id=${carouselRecipe[i].id}"><img src="${carouselRecipe[i].recipe.image_url}" alt="${carouselRecipe[i].recipe.name}" class="carousel-main-img"></a>
                    
                        <div class="sub">
                            <div class="info">
                                <a href="recipe-details.html?id=${carouselRecipe[i].id}">
                                <h2>${carouselRecipe[i].recipe.name}</h2>
                                </a>
                                ${carouselRecipe[i].recipe.summary}
                            </div>
                            <div class="cooking-info-carousel">
                                <div class="cook-time-car">
                                    <img src="images/Icon-stopwatch.png" alt="stopwatch"><p>${carouselRecipe[i].recipe.total_time}'<p>
                                </div>
                                <div class="difficulty-car">
                                    <img src="images/Icon-chef.png" alt="chefs-hat"><p>${carouselRecipe[i].recipe.custom_time_label}</p>
                                </div>
                                <div class="portions-car">
                                    <img src="images/Icon-spoon-fork.png" alt="spoon and fork"><p>${carouselRecipe[i].recipe.servings}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </a>`
    }
}