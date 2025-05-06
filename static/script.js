// const slides = document.querySelector(".slides");
// const dots = document.querySelectorAll(".dot");
// const playButton = document.querySelector(".play-button");

// let currentIndex = 0;
// let hasPlayedOnce = false;
// let interval;
// let scrollThreshold = 600;

// function updateSlide(index) {
//     slides.style.transform = `translateX(-${index * 100}vw)`;
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }
//  // Trigger slider after scrolling 300px
//  window.addEventListener("scroll", function () {
//     let scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     if (scrollPosition > scrollThreshold && !hasStarted) {
//         startAutoSlide();
//     }
// });

// function playSlides() {
//     if (hasPlayedOnce) return; // Prevents autoplay after first time
//     interval = setInterval(() => {
//         if (currentIndex < 4) {
//             currentIndex++;
//             updateSlide(currentIndex);
//         } else {
//             clearInterval(interval);
//             hasPlayedOnce = true;
//             playButton.textContent = "⟳"; // Change to restart icon
//         }
//     }, 2000);
// }

// function restartSlides() {
//     if (hasPlayedOnce) {
//         currentIndex = 0;
//         updateSlide(currentIndex);
//         hasPlayedOnce = false;
//         playButton.textContent = "▶";
//         playSlides();
//     }
// }

// dots.forEach(dot => {
//     dot.addEventListener("click", () => {
//         clearInterval(interval);
//         currentIndex = parseInt(dot.dataset.slide);
//         updateSlide(currentIndex);
//     });
// });

// playButton.addEventListener("click", restartSlides);

// // Auto-play once when page loads
// window.onload = playSlides;
// function toggleContent() {
//     let content = document.querySelector(".toggle-content");
//     let arrow = document.querySelector(".arrow i"); // Select the <i> inside .arrow

//     if (content.style.display === "block") {
//         content.style.display = "none";
//         arrow.classList.remove("fa-angle-double-down");
//         arrow.classList.add("fa-angle-double-up"); // Show upward arrow when closed
//     } else {
//         content.style.display = "block";
//         arrow.classList.remove("fa-angle-double-up");
//         arrow.classList.add("fa-angle-double-down"); // Show downward arrow when open
//     }
// }



// const slides = document.querySelector(".slides");
//         const dots = document.querySelectorAll(".dot");
//         const playButton = document.querySelector(".play-button");

//         let currentIndex = 0;
//         let hasPlayedOnce = false;
//         let interval;

        
//         function toggleContent() {
//             const content = document.querySelector('.toggle-content');
//             const arrow = document.querySelector('.arrow i');
            
//             if (content.style.display === "none" || content.style.display === "") {
//                 content.style.display = "block";
//                 arrow.classList.add('up');
//             } else {
//                 content.style.display = "none";
//                 arrow.classList.remove('up');
//             }
//         }

//         function updateSlide(index) {
//             slides.style.transform = `translateX(-${index * 100}vw)`;
//             dots.forEach(dot => dot.classList.remove("active"));
//             dots[index].classList.add("active");
//         }

//         function playSlides() {
//             if (hasPlayedOnce) return; // Prevents autoplay after first time
//             interval = setInterval(() => {
//                 if (currentIndex < 4) {
//                     currentIndex++;
//                     updateSlide(currentIndex);
//                 } else {
//                     clearInterval(interval);
//                     hasPlayedOnce = true;
//                     playButton.textContent = "⟳"; // Change to restart icon
//                 }
//             }, 2000);
//         }
       
        

//         function restartSlides() {
//             if (hasPlayedOnce) {
//                 currentIndex = 0;
//                 updateSlide(currentIndex);
//                 hasPlayedOnce = false;
//                 playButton.textContent = "▶";
//                 playSlides();
//             }
//         }

//         dots.forEach(dot => {
//             dot.addEventListener("click", () => {
//                 clearInterval(interval);
//                 currentIndex = parseInt(dot.dataset.slide);
//                 updateSlide(currentIndex);
//             });
//         });

//         playButton.addEventListener("click", restartSlides);

//         // Auto-play once when page loads
//         window.onload = playSlides;
   

// const slides = document.querySelectorAll(".slide"); 
// const dots = document.querySelectorAll(".dot");
// const playButton = document.querySelector(".play-button");

// let currentIndex = 0;
// let hasPlayedOnce = false;
// let interval;

// function updateSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove("active");
//         if (i === index) {
//             setTimeout(() => {
//                 slide.classList.add("active");
//             }, 2000); // Delay to allow fade-out effect
//         }
//     });

//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }

// function playSlides() {
//     if (hasPlayedOnce) return;
    
//     interval = setInterval(() => {
//         slides[currentIndex].classList.remove("active"); // Fade out current slide
        
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
//             updateSlide(currentIndex);
//         }, 500); // Wait for fade-out before switching
//     }, 2000);
// }

// function restartSlides() {
//     if (hasPlayedOnce) {
//         currentIndex = 0;
//         updateSlide(currentIndex);
//         hasPlayedOnce = false;
//         playButton.textContent = "▶";
//         playSlides();
//     }
// }

// dots.forEach(dot => {
//     dot.addEventListener("click", () => {
//         clearInterval(interval);
//         currentIndex = parseInt(dot.dataset.slide);
//         updateSlide(currentIndex);
//     });
// });

// playButton.addEventListener("click", restartSlides);

// window.onload = playSlides;





// const slides = document.querySelector(".slides");
// const dots = document.querySelectorAll(".dot");
// const playButton = document.querySelector(".play-button");

// let currentIndex = 0;
// let hasPlayedOnce = false;
// let interval;

// function toggleContent() {
//     const content = document.querySelector('.toggle-content');
//     const arrow = document.querySelector('.arrow i');
    
//     if (content.style.display === "none" || content.style.display === "") {
//         content.style.display = "block";
//         arrow.classList.add('up');
//     } else {
//         content.style.display = "none";
//         arrow.classList.remove('up');
//     }
// }

// function updateSlide(index) {
//     slides.style.transform = `translateX(-${index * 100}vw)`;
//     slides.style.transition = "opacity 1s ease-out"; // Add opacity transition
//     slides.style.opacity = 0; // Set initial opacity to 0
//     setTimeout(() => {
//         slides.style.opacity = 1; // Fade in next slide
//     }, 500); // Delay to create smooth transition effect
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }

// function playSlides() {
//     if (hasPlayedOnce) return; // Prevents autoplay after first time
//     interval = setInterval(() => {
//         if (currentIndex < 4) {
//             currentIndex++;
//             updateSlide(currentIndex);
//         } else {
//             clearInterval(interval);
//             hasPlayedOnce = true;
//             playButton.textContent = "⟳"; // Change to restart icon
//         }
//     }, 2000);
// }

// function restartSlides() {
//     if (hasPlayedOnce) {
//         currentIndex = 0;
//         updateSlide(currentIndex);
//         hasPlayedOnce = false;
//         playButton.textContent = "▶";
//         playSlides();
//     }
// }

// dots.forEach(dot => {
//     dot.addEventListener("click", () => {
//         clearInterval(interval);
//         currentIndex = parseInt(dot.dataset.slide);
//         updateSlide(currentIndex);
//     });
// });

// playButton.addEventListener("click", restartSlides);

// // Auto-play once when page loads
// window.onload = playSlides;
// // Remove global constants (except where needed for initial setup)



















// document.addEventListener("DOMContentLoaded", () => {
//     if (!document.getElementById("ingredientInput")) return;

//     const searchForm = document.getElementById("searchForm");
//     const closeBtn = document.querySelector(".close-btn");

//     if (searchForm) {
//         searchForm.addEventListener("submit", (e) => {
//             e.preventDefault();
//             fetchRecipes();
//         });
//     }

//     if (closeBtn) {
//         closeBtn.addEventListener("click", () => {
//             document.getElementById("recipeModal").classList.remove("show");
//         });
//     }

//     setupImageClickListeners();
// });

// function setupImageClickListeners() {
//     document.querySelectorAll(".box img").forEach((img) => {
//         img.addEventListener("click", () => {
//             const input = document.getElementById("ingredientInput");
//             if (input) {
//                 input.value = img.alt;
//                 fetchRecipes();
//             }
//         });
//     });
// }

// async function fetchRecipes() {
//     const ingredientInput = document.getElementById("ingredientInput");
//     const recipeResults = document.getElementById("recipeResults");
//     const mainContent = document.getElementById("mainContent");
//     const recipeContainer = document.getElementById("recipeContainer");

//     if (!ingredientInput || !recipeResults || !mainContent || !recipeContainer) {
//         console.error("Missing elements at start:", {
//             ingredientInput: ingredientInput ? "Found" : "Missing",
//             recipeResults: recipeResults ? "Found" : "Missing",
//             mainContent: mainContent ? "Found" : "Missing",
//             recipeContainer: recipeContainer ? "Found" : "Missing"
//         });
//         if (recipeResults) recipeResults.innerHTML = "<p>Error: Page structure is incomplete.</p>";
//         return;
//     }

//     const searchQuery = ingredientInput.value.trim();
//     if (!searchQuery) {
//         recipeResults.innerHTML = "<p>Please enter some ingredients or a recipe name.</p>";
//         return;
//     }

//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();

//         if (!data.meals || data.meals.length === 0) {
//             recipeResults.innerHTML = `<p>No recipes found for "${searchQuery}". Try different terms.</p>`;
//             return;
//         }

//         mainContent.style.display = "none";
//         recipeContainer.style.display = "block";
//         recipeResults.style.display = "block";
//         displayRecipes(data.meals);
//     } catch (error) {
//         console.error("Fetch error:", error.message);
//         recipeResults.innerHTML = `<p>Failed to load recipes: ${error.message}. Please try again.</p>`;
//     }
// }

// function displayRecipes(meals) {
//     const recipeResults = document.getElementById("recipeResults");
//     if (!recipeResults) return;

//     recipeResults.innerHTML = `<button id="goBackButton">Go Back</button>`;
//     meals.forEach((meal) => {
//         const recipeCard = document.createElement("div");
//         recipeCard.classList.add("recipe-card");
//         recipeCard.innerHTML = `
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//             <h3>${meal.strMeal}</h3>
//             <button class="view-recipe-btn" data-meal-id="${meal.idMeal}">View Recipe</button>
//         `;
//         recipeResults.appendChild(recipeCard);
//     });

//     const goBackBtn = document.getElementById("goBackButton");
//     if (goBackBtn) goBackBtn.addEventListener("click", goBackToMain);

//     document.querySelectorAll(".view-recipe-btn").forEach((btn) => {
//         btn.addEventListener("click", () => fetchRecipeDetails(btn.dataset.mealId));
//     });
// }

// async function fetchRecipeDetails(mealId) {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         if (!data.meals || data.meals.length === 0) throw new Error("No meal details found.");

//         const meal = data.meals[0];
//         document.getElementById("recipeTitle").textContent = meal.strMeal;
//         document.getElementById("recipeImage").src = meal.strMealThumb;
//         document.getElementById("recipeIngredients").innerHTML = Object.keys(meal)
//             .filter((key) => key.startsWith("strIngredient") && meal[key])
//             .map((key) => `<li>${meal[key]} - ${meal[`strMeasure${key.slice(13)}`]}</li>`)
//             .join("");
//         document.getElementById("recipeInstructions").textContent = meal.strInstructions;

//         document.getElementById("recipeModal").classList.add("show");
//     } catch (error) {
//         console.error("Recipe details error:", error.message);
//     }
// }

// function goBackToMain() {
//     const mainContent = document.getElementById("mainContent");
//     const recipeContainer = document.getElementById("recipeContainer");
//     const recipeResults = document.getElementById("recipeResults");

//     if (mainContent) mainContent.style.display = "block";
//     if (recipeContainer) recipeContainer.style.display = "none";
//     if (recipeResults) recipeResults.innerHTML = "";
// }










document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("#countrySelect");
    let btn = document.getElementById("searchBtn");
    let mealsDiv = document.querySelector("#meals");
    let countryHeading = document.querySelector("#country-heading");

    if (!mealsDiv) {
        console.error("❌ Error: #meals div not found.");
        return;
    }

    const getMeals = async () => {
        let country = select.value;
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
        if (countryHeading) {
            countryHeading.innerText = `Recipes from ${country}`;
        }

        try {
            let res = await fetch(url);
            let data = await res.json();

            mealsDiv.innerHTML = ""; // Clear previous results

            if (data.meals) {
                data.meals.forEach(meal => {
                    let mealCard = document.createElement("div");
                    mealCard.classList.add("meal-card");

                    mealCard.innerHTML = `
                        <h3>${meal.strMeal}</h3>
                        <img src="${meal.strMealThumb}" width="200" class="meal-img" data-id="${meal.idMeal}">
                    `;

                    mealsDiv.appendChild(mealCard);
                });

                document.querySelectorAll(".meal-img").forEach(img => {
                    img.addEventListener("click", showMealDetails);
                });

            } else {
                mealsDiv.innerText = `No recipes found for ${country}!`;
            }
        } catch (error) {
            console.error("Error fetching meals:", error);
            mealsDiv.innerText = "An error occurred while fetching meals.";
        }
    };

    const showMealDetails = async (event) => {
        let mealId = event.target.dataset.id;
        let mealDetailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

        try {
            let res = await fetch(mealDetailsUrl);
            let mealData = await res.json();

            if (!mealData.meals || mealData.meals.length === 0) {
                console.error("❌ Error: No meal details found.");
                return;
            }

            let mealDetails = mealData.meals[0];

            let ingredients = "";
            for (let i = 1; i <= 20; i++) {
                let ingredient = mealDetails[`strIngredient${i}`];
                let measure = mealDetails[`strMeasure${i}`];
                if (ingredient && ingredient.trim() !== "") {
                    ingredients += `<li>${measure} ${ingredient}</li>`;
                }
            }

            // Remove existing popups
            document.querySelectorAll(".meal-popup").forEach(popup => popup.remove());

            let mealPopup = document.createElement("div");
            mealPopup.classList.add("meal-popup");
            mealPopup.innerHTML = `
                <div class="meal-popup-content">
                    <span class="close-btn">×</span>
                    <h2>${mealDetails.strMeal}</h2>
                    <img src="${mealDetails.strMealThumb}" width="300">
                    <div class="meal-detail"> 
                        <h4>Ingredients:</h4>
                        <ul>${ingredients}</ul>
                        <h4>Instructions:</h4>
                        <p>${mealDetails.strInstructions}</p>
                        <button class="favorite-btn" data-id="${mealDetails.idMeal}">Add to Favorites</button>
                    </div>
                </div>
            `;

            document.body.appendChild(mealPopup);

            // Close button
            mealPopup.querySelector(".close-btn").addEventListener("click", () => {
                mealPopup.remove();
            });

            // Add to favorites button
            mealPopup.querySelector(".favorite-btn").addEventListener("click", (e) => {
                let recipeId = e.target.dataset.id;
                addToFavorites(recipeId);
            });

        } catch (error) {
            console.error("Error fetching meal details:", error);
        }
    };

    btn.addEventListener("click", getMeals);
});

function addToFavorites(recipeId) {
    fetch('/add_favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipe_id: recipeId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Recipe added to favorites!");
            // Optionally redirect: window.location.href = '/favorites';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while adding to favorites.");
    });
}




// document.addEventListener("DOMContentLoaded", () => {
//     let select = document.querySelector("#countrySelect");
//     let btn = document.getElementById("searchBtn");
//     let mealsDiv = document.querySelector("#meals");
//     const ingredientEmojis = {
//         "Chicken": "🍗",
//         "Beef": "🥩",
//         "Pork": "🐖",
//         "Fish": "🐟",
//         "Shrimp": "🍤",
//         "Rice": "🍚",
//         "Cheese": "🧀",
//         "Tomato": "🍅",
//         "Onion": "🧅",
//         "Garlic": "🧄",
//         "Salt": "🧂",
//         "Pepper": "🌶️",
//         "Mushroom": "🍄",
//         "Egg": "🥚",
//         "Milk": "🥛",
//         "Bread": "🍞",
//         "Lemon": "🍋",
//         "Butter": "🧈",
//         "Carrot": "🥕",
//         "Potato": "🥔",
//         "Lettuce": "🥬",
//         "Avocado": "🥑",
//         "Cucumber": "🥒",
//         "Coconut": "🥥",
//         "Peanut": "🥜",
//         "Honey": "🍯",
//         "Chocolate": "🍫",
//         "Strawberry": "🍓",
//         "Apple": "🍏",
//         "Banana": "🍌",
//         "Pineapple": "🍍",
//         "Corn": "🌽",
//         "Chili": "🌶️"
//     };
    

//     if (!select || !btn || !mealsDiv) {
//         console.error("❌ Error: One or more required elements (#countrySelect, #searchBtn, #meals) not found.");
//         return;
//     }

//     const getMeals = async () => {
//         let country = select.value.trim();
//         if (!country) {
//             console.warn("⚠️ Please select a country.");
//             return;
//         }
    
//         let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
    
//         try {
//             let res = await fetch(url);
//             if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//             let data = await res.json();
            

//             // ✅ Properly clear previous meals
//             while (mealsDiv.firstChild) {
//                 mealsDiv.removeChild(mealsDiv.firstChild);
//             }

//             if (data.meals && data.meals.length > 0) {
//                 data.meals.forEach(meal => {
//                     let mealCard = document.createElement("div");
//                     mealCard.classList.add("meal-card");

//                     mealCard.innerHTML = `
                       
//                         <img src="${meal.strMealThumb}" width="200" class="meal-img" data-id="${meal.idMeal}">
//                          <h3>${meal.strMeal}</h3>
//                     `;

//                     mealsDiv.appendChild(mealCard);
//                 });

//             } else {
//                 console.warn(`⚠️ No recipes found for ${country}!`);
//                 mealsDiv.innerText = `No recipes found for ${country}!`;
//             }
//         } catch (error) {
//             console.error("❌ Error fetching meals:", error);
//             mealsDiv.innerText = "An error occurred while fetching meals.";
//         }
//     };

//     const showMealDetails = async (event) => {
//         let clickedImage = event.target;
//         if (!clickedImage.classList.contains("meal-img")) return;

//         let mealId = clickedImage.dataset.id;
//         let mealDetailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

//         try {
//             let res = await fetch(mealDetailsUrl);
//             if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//             let mealData = await res.json();
//             if (!mealData.meals || mealData.meals.length === 0) {
//                 console.error("❌ Error: No meal details found.");
//                 return;
//             }

//             let mealDetails = mealData.meals[0];

//             let ingredients = "";
//             for (let i = 1; i <= 20; i++) {
//                 let ingredient = mealDetails[`strIngredient${i}`];
//                 let measure = mealDetails[`strMeasure${i}`];
            
//                 if (ingredient && ingredient.trim() !== "") {
//                     let cleanedIngredient = ingredient.trim().toLowerCase(); // ✅ Convert to lowercase
            
//                     // ✅ Find an emoji for the ingredient (Handle partial matches)
//                     let matchedEmoji = Object.keys(ingredientEmojis).find(key => cleanedIngredient.includes(key.toLowerCase()));
//                     let emoji = matchedEmoji ? ingredientEmojis[matchedEmoji] : "🍽️"; // Default plate emoji if no match
            
//                     // ✅ Append ingredient with emoji
//                     ingredients += `<li>${emoji} ${measure} ${ingredient}</li>`;
//                 }
//             }
            
            

//             // ✅ Remove existing popups
//             document.querySelectorAll(".meal-popup").forEach(popup => popup.remove());

//             let mealPopup = document.createElement("div");
//             mealPopup.classList.add("meal-popup");
//             mealPopup.innerHTML = `
//                 <div class="meal-popup-content">
//                     <span class="close-btn">&times;</span>
//                     <h2>${mealDetails.strMeal}</h2>
//                     <img src="${mealDetails.strMealThumb}" width="300">
//                     <div class="meal-detail"> 
//                         <h4>Ingredients:</h4>
//                         <ul>${ingredients}</ul>
//                         <h4>Instructions:</h4>
//                         <p>${mealDetails.strInstructions}</p>
//                     </div>
//                 </div>
//             `;

//             document.body.appendChild(mealPopup);

//             mealPopup.querySelector(".close-btn").addEventListener("click", () => {
//                 mealPopup.remove();
//             });

//         } catch (error) {
//             console.error("❌ Error fetching meal details:", error);
//         }
//     };

//     // ✅ Ensure button exists before adding event listener
//     if (btn) {
//         btn.addEventListener("click", getMeals);
//     }

//     // ✅ Use event delegation to handle dynamically added elements
//     mealsDiv.addEventListener("click", showMealDetails);
// });

