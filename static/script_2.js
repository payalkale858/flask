// DOM Elements
const ingredientInput = document.getElementById("ingredientInput");
const recipeResults = document.querySelector(".recipe-results");
const searchButton = document.getElementById("searchButton");
const recipeModal = document.getElementById("recipeModal");
const closeBtn = document.querySelector(".close-btn");
const recipeContainer = document.querySelector(".recipeContainer");
const mainContent = document.querySelector(".main");

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("ingredients");

    if (searchQuery) {
        fetchRecipes(searchQuery);  // Pass value directly
    }
    // Show the modal
    recipeModal.classList.add("show");

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            recipeModal.classList.remove("show");
        });
    }





    setupImageClickListeners();
});




// Fetch Recipes
async function fetchRecipes(query) {
    const searchQuery = query?.trim();

    if (!searchQuery) {
        recipeResults.innerHTML = "<p>Please enter some ingredients or a recipe name.</p>";
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.meals || data.meals.length === 0) {
            recipeResults.innerHTML = `<p>No recipes found for "${searchQuery}".</p>`;
            return;
        }

        mainContent?.style && (mainContent.style.display = "none");
        recipeContainer.style.display = "block";
        // recipeResults.style.display = "block";

        displayRecipes(data.meals);
    } catch (error) {
        recipeResults.innerHTML = `<p>Failed to load recipes: ${error.message}.</p>`;
    }
}


// Display Recipes
function displayRecipes(meals) {
    recipeResults.innerHTML = `<button id="goBackButton">Go Back</button>`;

    meals.forEach((meal) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <button class="view-recipe-btn" data-meal-id="${meal.idMeal}">View Recipe</button>
        `;
        recipeResults.appendChild(recipeCard);
    });

    const goBackBtn = document.getElementById("goBackButton");
    if (goBackBtn) {
        goBackBtn.addEventListener("click", goBackToMain);
    } else {
        console.error("Go Back button not found after creation.");
    }

    document.querySelectorAll(".view-recipe-btn").forEach((btn) => {
        btn.addEventListener("click", () => fetchRecipeDetails(btn.dataset.mealId));
    });
}

// Fetch Recipe Details
async function fetchRecipeDetails(mealId) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.meals || data.meals.length === 0) {
            throw new Error("No meal details found.");
        }

        const meal = data.meals[0];
        document.getElementById("recipeTitle").textContent = meal.strMeal;
        document.getElementById("recipeImage").src = meal.strMealThumb;
        document.getElementById("recipeIngredients").innerHTML = Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key) => `<li>${meal[key]} - ${meal[`strMeasure${key.slice(13)}`]}</li>`)
            .join("");
        document.getElementById("recipeInstructions").textContent = meal.strInstructions;

        recipeModal.classList.add("show");
    } catch (error) {
        console.error("Recipe details error:", error.message);
    }
}

// Go Back to Main
// function goBackToMain() {
//     if (mainContent) mainContent.style.display = "block";
//     if (recipeContainer) recipeContainer.style.display = "none";
//     recipeResults.innerHTML = "";
// }

// Go Back to Main
function goBackToMain() {
    // Show the main/home content
    if (mainContent) {
        mainContent.style.display = "block"; // Ensure this is the home content container
    }

    // Hide the recipe results container
    if (recipeContainer) {
        recipeContainer.style.display = "none"; // Ensure this is the recipe results container
    }

    // Clear the recipe results content
    recipeResults.innerHTML = "";

    // Optionally clear the search input
    if (ingredientInput) {
        ingredientInput.value = ""; // Clear the ingredient input field
    }
}



// Setup Image Click Listeners
function setupImageClickListeners() {
    document.querySelectorAll(".box img").forEach((img) => {
        img.addEventListener("click", () => {
            ingredientInput.value = img.alt;
            fetchRecipes();
        });
    });
}
