
const form = document.getElementById('searchForm');
const recipesDiv = document.getElementById('recipes');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    // const apiKey = '4d7e6f9ed2bd4d0c81bda2978d6838da';
    // const apiUrl = `https://spoonacular.com/food-api?query=${query}&apiKey=${apiKey}`;
    // let url =`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&apiKey=${apiKey}`;
        try {
        const response = await fetch(Url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch recipes. Please try again later.');
    }
});

function displayRecipes(recipes) {
    recipesDiv.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe">
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                <p>Instructions: ${recipe.instructions}</p>
            </div>
        `;
        recipesDiv.innerHTML += recipeCard;
    });
}
 