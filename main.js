// Main JavaScript for NutriGuide Website

// Mock Data (replace with actual data fetching later)
const mockFoodData = {
    1: {
        id: 1,
        name: 'Spinach',
        category: 'vegetables',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fat: 0.4,
        vitamins: ['Vitamin K', 'Vitamin A', 'Vitamin C', 'Folate'],
        minerals: ['Iron', 'Magnesium', 'Manganese'],
        healthBenefits: ['Rich in iron', 'High in vitamins A and C', 'Good source of antioxidants'],
        sideEffects: ['May interact with blood thinners due to vitamin K content']
    },
    2: {
        id: 2,
        name: 'Salmon',
        category: 'proteins',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 208,
        protein: 20.4,
        carbs: 0,
        fat: 13.4,
        vitamins: ['Vitamin D', 'Vitamin B12', 'Niacin', 'Vitamin B6'],
        minerals: ['Selenium', 'Phosphorus', 'Potassium'],
        healthBenefits: ['High in omega-3 fatty acids', 'Excellent source of protein', 'Rich in B vitamins'],
        sideEffects: ['May contain environmental contaminants if not sourced properly']
    },
    3: {
        id: 3,
        name: 'Quinoa',
        category: 'grains',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 120,
        protein: 4.4,
        carbs: 21.3,
        fat: 1.9,
        vitamins: ['Folate', 'Thiamin', 'Riboflavin'],
        minerals: ['Magnesium', 'Phosphorus', 'Manganese', 'Iron'],
        healthBenefits: ['Complete protein source', 'High in fiber', 'Rich in minerals'],
        sideEffects: ['May cause digestive issues for some people']
    },
    4: {
        id: 4,
        name: 'Blueberries',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 57,
        protein: 0.7,
        carbs: 14.5,
        fat: 0.3,
        vitamins: ['Vitamin C', 'Vitamin K'],
        minerals: ['Manganese'],
        healthBenefits: ['High in antioxidants', 'May improve brain function', 'Support heart health'],
        sideEffects: ['May lower blood sugar levels (monitor if diabetic)']
    },
    5: {
        id: 5,
        name: 'Greek Yogurt',
        category: 'dairy',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 59,
        protein: 10,
        carbs: 3.6,
        fat: 0.4,
        vitamins: ['Vitamin B12', 'Riboflavin'],
        minerals: ['Calcium', 'Phosphorus', 'Selenium'],
        healthBenefits: ['High in protein', 'Contains probiotics', 'Good source of calcium'],
        sideEffects: ['May cause digestive issues for lactose-intolerant individuals']
    },
    6: {
        id: 6,
        name: 'Avocado',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 160,
        protein: 2,
        carbs: 8.5,
        fat: 14.7,
        vitamins: ['Vitamin K', 'Folate', 'Vitamin C', 'Vitamin B5', 'Vitamin B6', 'Vitamin E'],
        minerals: ['Potassium', 'Magnesium'],
        healthBenefits: ['Rich in healthy fats', 'High in fiber', 'Contains potassium and magnesium'],
        sideEffects: ['High in calories, may contribute to weight gain if consumed in excess']
    },
    7: {
        id: 7,
        name: 'Sweet Potato',
        category: 'vegetables',
        image: 'https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 86,
        protein: 1.6,
        carbs: 20.1,
        fat: 0.1,
        vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin B6'],
        minerals: ['Manganese', 'Potassium'],
        healthBenefits: ['Rich in vitamin A', 'Good source of fiber', 'Contains antioxidants'],
        sideEffects: ['High glycemic index may affect blood sugar levels']
    },
    8: {
        id: 8,
        name: 'Almonds',
        category: 'proteins',
        image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        calories: 164,
        protein: 6,
        carbs: 6.1,
        fat: 14.2,
        vitamins: ['Vitamin E', 'Riboflavin'],
        minerals: ['Magnesium', 'Manganese', 'Phosphorus'],
        healthBenefits: ['Good source of vitamin E', 'Contains healthy fats', 'May lower cholesterol'],
        sideEffects: ['High in calories, may contribute to weight gain if consumed in excess']
    }
};

const mockRecipes = {
    1: {
        id: 1,
        title: 'Quinoa Salad with Roasted Vegetables',
        image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '15 mins',
        cookTime: '25 mins',
        servings: 4,
        calories: 320,
        mealType: 'lunch',
        diet: ['vegetarian', 'gluten-free'],
        description: 'A nutritious and filling salad with protein-rich quinoa and colorful roasted vegetables.',
        ingredients: ['1 cup quinoa', '2 cups vegetable broth', '1 bell pepper, chopped', '1 zucchini, chopped', '1 red onion, chopped', '1 tbsp olive oil', 'Salt and pepper to taste', 'Lemon vinaigrette'],
        instructions: ['Cook quinoa in vegetable broth.', 'Roast vegetables with olive oil, salt, and pepper.', 'Combine cooked quinoa and roasted vegetables.', 'Toss with lemon vinaigrette.']
    },
    2: {
        id: 2,
        title: 'Greek Yogurt Parfait',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '10 mins',
        cookTime: '0 mins',
        servings: 1,
        calories: 250,
        mealType: 'breakfast',
        diet: ['vegetarian', 'gluten-free'],
        description: 'A quick and protein-packed breakfast with layers of Greek yogurt, fresh berries, and granola.',
        ingredients: ['1 cup Greek yogurt', '1/2 cup mixed berries', '1/4 cup granola', '1 tsp honey (optional)'],
        instructions: ['Layer Greek yogurt, berries, and granola in a glass.', 'Drizzle with honey if desired.']
    },
    3: {
        id: 3,
        title: 'Grilled Salmon with Asparagus',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '10 mins',
        cookTime: '20 mins',
        servings: 2,
        calories: 380,
        mealType: 'dinner',
        diet: ['low-carb'],
        description: 'A simple yet elegant dinner with omega-3 rich salmon and fresh asparagus.',
        ingredients: ['2 salmon fillets', '1 bunch asparagus', '1 tbsp olive oil', 'Salt, pepper, lemon slices'],
        instructions: ['Toss asparagus with olive oil, salt, and pepper.', 'Grill salmon and asparagus until cooked through.', 'Serve with lemon slices.']
    },
    4: {
        id: 4,
        title: 'Vegan Buddha Bowl',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '20 mins',
        cookTime: '15 mins',
        servings: 2,
        calories: 420,
        mealType: 'lunch',
        diet: ['vegan', 'gluten-free'],
        description: 'A colorful and nutrient-dense bowl with a variety of vegetables, legumes, and grains.',
        ingredients: ['1 cup cooked quinoa', '1/2 cup chickpeas', '1/2 avocado, sliced', '1/4 cup shredded carrots', '1/4 cup chopped cucumber', 'Handful of spinach', 'Tahini dressing'],
        instructions: ['Arrange all ingredients in a bowl.', 'Drizzle with tahini dressing.']
    },
    5: {
        id: 5,
        title: 'Protein Energy Balls',
        image: 'https://images.unsplash.com/photo-1490567674331-72de84996cec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '15 mins',
        cookTime: '0 mins',
        servings: 12,
        calories: 120,
        mealType: 'snacks',
        diet: ['vegetarian', 'gluten-free'],
        description: 'No-bake energy balls packed with protein, fiber, and healthy fats for a perfect snack.',
        ingredients: ['1 cup rolled oats', '1/2 cup peanut butter', '1/3 cup honey', '1/4 cup protein powder', '1/4 cup chia seeds', '1/4 cup chocolate chips (optional)'],
        instructions: ['Mix all ingredients together.', 'Roll into small balls.', 'Refrigerate for 30 minutes.']
    },
    6: {
        id: 6,
        title: 'Avocado Toast with Poached Egg',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        prepTime: '5 mins',
        cookTime: '10 mins',
        servings: 1,
        calories: 350,
        mealType: 'breakfast',
        diet: ['vegetarian'],
        description: 'A trendy and nutritious breakfast with creamy avocado and protein-rich poached egg.',
        ingredients: ['1 slice whole-wheat bread', '1/2 avocado', '1 egg', 'Salt, pepper, red pepper flakes'],
        instructions: ['Toast the bread.', 'Mash avocado and spread on toast.', 'Poach the egg and place on top.', 'Season with salt, pepper, and red pepper flakes.']
    }
};

const mockArticles = {
    1: {
        id: 1,
        title: 'The Science Behind Intermittent Fasting',
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        author: {
            name: 'Dr. Sarah Johnson',
            image: 'https://randomuser.me/api/portraits/women/23.jpg'
        },
        date: 'May 15, 2025',
        excerpt: 'Explore the scientific evidence behind intermittent fasting and its potential health benefits.',
        content: '<p>Intermittent fasting (IF) is an eating pattern that cycles between periods of eating and voluntary fasting. It doesn\u2019t specify which foods you should eat but rather when you should eat them. Common intermittent fasting methods involve daily 16-hour fasts or fasting for 24 hours, twice per week.</p><p>Research suggests that IF can lead to weight loss, improve metabolic health, protect against disease, and perhaps help you live longer. Studies in animals suggest that IF may help prevent cancer and improve brain health. However, more research in humans is needed.</p><p>Potential benefits include weight loss, improved insulin sensitivity, cellular repair processes like autophagy, and potential brain health benefits. However, IF is not suitable for everyone, especially those with a history of eating disorders, pregnant or breastfeeding women, or individuals with certain medical conditions.</p>'
    },
    2: {
        id: 2,
        title: 'Understanding Macronutrients: Protein, Carbs, and Fats',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        author: {
            name: 'Michael Chen, RD',
            image: 'https://randomuser.me/api/portraits/men/42.jpg'
        },
        date: 'May 10, 2025',
        excerpt: 'Learn about the three main macronutrients and how they contribute to your overall health and fitness goals.',
        content: '<p>Macronutrients are the nutrients your body needs in large amounts: protein, carbohydrates, and fats. Each provides energy (calories) and has specific roles in maintaining health.</p><ul><li><strong>Protein:</strong> Essential for building and repairing tissues, making enzymes and hormones. Found in meat, poultry, fish, eggs, dairy, legumes, nuts, and seeds. Provides 4 calories per gram.</li><li><strong>Carbohydrates:</strong> The body\u2019s primary source of energy. Found in grains, fruits, vegetables, and dairy. Provides 4 calories per gram. Choose complex carbs (whole grains, vegetables) over simple carbs (sugary drinks, refined grains).</li><li><strong>Fats:</strong> Important for hormone production, nutrient absorption, and energy storage. Found in oils, nuts, seeds, avocados, and fatty fish. Provides 9 calories per gram. Focus on unsaturated fats (mono- and polyunsaturated) and limit saturated and trans fats.</li></ul><p>A balanced intake of all three macronutrients is crucial for optimal health and performance.</p>'
    },
    3: {
        id: 3,
        title: 'Gut Health: The Key to Overall Wellness',
        image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        author: {
            name: 'Dr. Emily Rodriguez',
            image: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        date: 'May 5, 2025',
        excerpt: 'Discover how your gut microbiome affects your physical and mental health, and how to improve it through diet.',
        content: '<p>The gut microbiome refers to the trillions of microorganisms living in your digestive tract. These bacteria, fungi, and viruses play a crucial role in digestion, immunity, and even mental health.</p><p>An imbalance in the gut microbiome (dysbiosis) has been linked to various health issues, including inflammatory bowel disease (IBD), obesity, type 2 diabetes, and mood disorders like anxiety and depression.</p><p>You can support a healthy gut microbiome by:</p><ul><li>Eating a diverse range of plant-based foods (fruits, vegetables, legumes, whole grains)</li><li>Consuming fermented foods like yogurt, kefir, sauerkraut, and kimchi</li><li>Limiting processed foods, sugar, and artificial sweeteners</li><li>Managing stress and getting enough sleep</li><li>Considering probiotic supplements if recommended by a healthcare professional</li></ul><p>Nurturing your gut health is an investment in your overall well-being.</p>'
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize food database display
    displayFoodItems(Object.values(mockFoodData));

    // Initialize recipes display
    displayRecipes(Object.values(mockRecipes));

    // Initialize articles display
    displayArticles(Object.values(mockArticles));

    // Initialize Bootstrap components (Tooltips, Popovers, Modals)
    initializeBootstrapComponents();

    // Add event listeners for interactive elements
    addEventListeners();
});

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize all popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Add event listeners to interactive elements
function addEventListeners() {
    // --- Header Search ---
    const headerSearchInput = document.getElementById('headerSearchInput');
    const headerSearchButton = document.getElementById('headerSearchButton');
    if (headerSearchInput && headerSearchButton) {
        headerSearchButton.addEventListener('click', performHeaderSearch);
        headerSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performHeaderSearch();
            }
        });
    }

    // --- Food Database Section ---
    const foodCategoryFilters = document.querySelectorAll('#foodCategories .list-group-item');
    foodCategoryFilters.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            foodCategoryFilters.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            filterFoods(this.dataset.category);
        });
    });

    const foodSearchInput = document.getElementById('foodDbSearchInput');
    const foodSearchButton = document.getElementById('foodDbSearchButton');
    if (foodSearchInput && foodSearchButton) {
        foodSearchButton.addEventListener('click', searchFoods);
        foodSearchInput.addEventListener('keyup', searchFoods); // Search as user types
    }

    // Event delegation for food detail modals
    const foodItemsContainer = document.getElementById('foodItems');
    if (foodItemsContainer) {
        foodItemsContainer.addEventListener('click', function(e) {
            const button = e.target.closest('.view-food-details-btn');
            if (button) {
                const foodId = button.dataset.foodId;
                showFoodDetailModal(foodId);
            }
        });
    }

    // --- Recipes Section ---
    const mealTypeFilter = document.getElementById('mealTypeFilter');
    const dietFilter = document.getElementById('dietFilter');
    const recipeSearchInput = document.getElementById('recipeSearchInput');
    const recipeSearchButton = document.getElementById('recipeSearchButton');

    if (mealTypeFilter) mealTypeFilter.addEventListener('change', filterRecipes);
    if (dietFilter) dietFilter.addEventListener('change', filterRecipes);
    if (recipeSearchInput && recipeSearchButton) {
        recipeSearchButton.addEventListener('click', filterRecipes);
        recipeSearchInput.addEventListener('keyup', filterRecipes); // Search as user types
    }

    // Event delegation for recipe detail modals
    const recipeItemsContainer = document.getElementById('recipeItems');
    if (recipeItemsContainer) {
        recipeItemsContainer.addEventListener('click', function(e) {
            const button = e.target.closest('.view-recipe-details-btn');
            if (button) {
                const recipeId = button.dataset.recipeId;
                showRecipeDetailModal(recipeId);
            }
        });
    }

    // --- Tools Section ---
    const openMealPlannerBtn = document.getElementById('openMealPlannerBtn');
    const openCalculatorBtn = document.getElementById('openCalculatorBtn');
    const openGroceryListBtn = document.getElementById('openGroceryListBtn');
    const openProgressTrackerBtn = document.getElementById('openProgressTrackerBtn');

    if (openMealPlannerBtn) openMealPlannerBtn.addEventListener('click', () => showModal('mealPlannerModal'));
    if (openCalculatorBtn) openCalculatorBtn.addEventListener('click', () => showModal('nutritionCalculatorModal'));
    if (openGroceryListBtn) openGroceryListBtn.addEventListener('click', () => showModal('groceryListModal'));
    if (openProgressTrackerBtn) openProgressTrackerBtn.addEventListener('click', () => showModal('progressTrackerModal'));

    // Add listeners for calculator buttons inside the modal
    const calculateCaloriesBtn = document.getElementById('calculateCaloriesBtn');
    const calculateMacrosBtn = document.getElementById('calculateMacrosBtn');
    if (calculateCaloriesBtn) calculateCaloriesBtn.addEventListener('click', calculateCalories);
    if (calculateMacrosBtn) calculateMacrosBtn.addEventListener('click', calculateMacros);

    // --- Articles Section ---
    // Event delegation for article detail modals
    const articleItemsContainer = document.getElementById('articleItems');
    if (articleItemsContainer) {
        articleItemsContainer.addEventListener('click', function(e) {
            const button = e.target.closest('.read-article-btn');
            if (button) {
                const articleId = button.dataset.articleId;
                showArticleDetailModal(articleId);
            }
        });
    }
}

// --- Search Functions ---
function performHeaderSearch() {
    const searchInput = document.getElementById('headerSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (!query) return;
    alert(`Simulating search for: "${query}"\nIn a real application, this would lead to a search results page or filter content.`);
    // In a real app, you'd filter food, recipes, articles or redirect to a search page
}

function searchFoods() {
    const searchInput = document.getElementById('foodDbSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const activeCategory = document.querySelector('#foodCategories .list-group-item.active')?.dataset.category || 'all';

    const filteredFoods = Object.values(mockFoodData).filter(food => {
        const categoryMatch = activeCategory === 'all' || food.category === activeCategory;
        const nameMatch = food.name.toLowerCase().includes(query);
        return categoryMatch && nameMatch;
    });
    displayFoodItems(filteredFoods);
}

// --- Display Functions ---
function displayFoodItems(foods) {
    const foodItemsContainer = document.getElementById('foodItems');
    if (!foodItemsContainer) return;
    foodItemsContainer.innerHTML = ''; // Clear existing items

    if (foods.length === 0) {
        foodItemsContainer.innerHTML = '<p class="text-center text-muted">No food items match your criteria.</p>';
        return;
    }

    foods.forEach(food => {
        const foodElement = `
            <div class="col-lg-4 col-md-6 mb-4 food-item-wrapper" data-category="${food.category}">
                <div class="food-item h-100 d-flex flex-column">
                    <div class="food-item-image flex-shrink-0" style="background-image: url('${food.image}'); height: 180px; background-size: cover; background-position: center;"></div>
                    <div class="food-item-content p-3 flex-grow-1 d-flex flex-column">
                        <h5 class="food-item-title mb-2">${food.name}</h5>
                        <div class="food-item-nutrients d-flex justify-content-around mb-3 text-center">
                            <div class="nutrient-item">
                                <small class="text-muted">Calories</small>
                                <div class="nutrient-value fw-bold">${food.calories}</div>
                            </div>
                            <div class="nutrient-item">
                                <small class="text-muted">Protein</small>
                                <div class="nutrient-value fw-bold">${food.protein}g</div>
                            </div>
                            <div class="nutrient-item">
                                <small class="text-muted">Carbs</small>
                                <div class="nutrient-value fw-bold">${food.carbs}g</div>
                            </div>
                            <div class="nutrient-item">
                                <small class="text-muted">Fat</small>
                                <div class="nutrient-value fw-bold">${food.fat}g</div>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-outline-primary w-100 mt-auto view-food-details-btn" data-food-id="${food.id}">View Details</button>
                    </div>
                </div>
            </div>
        `;
        foodItemsContainer.innerHTML += foodElement;
    });
}

function displayRecipes(recipes) {
    const recipeItemsContainer = document.getElementById('recipeItems');
    if (!recipeItemsContainer) return;
    recipeItemsContainer.innerHTML = ''; // Clear existing items

    if (recipes.length === 0) {
        recipeItemsContainer.innerHTML = '<p class="text-center text-muted">No recipes match your criteria.</p>';
        return;
    }

    recipes.forEach(recipe => {
        let dietLabels = '';
        recipe.diet.forEach(diet => {
            dietLabels += `<span class="badge bg-secondary me-1">${diet}</span>`;
        });

        const recipeElement = `
            <div class="col-lg-4 col-md-6 mb-4 recipe-item-wrapper" data-meal-type="${recipe.mealType}" data-diet="${recipe.diet.join(' ')}">
                <div class="recipe-card h-100 d-flex flex-column">
                    <div class="recipe-image flex-shrink-0" style="background-image: url('${recipe.image}'); height: 200px; background-size: cover; background-position: center;">
                        <span class="recipe-category position-absolute top-0 end-0 m-2 badge bg-primary">${recipe.mealType}</span>
                    </div>
                    <div class="recipe-content p-3 flex-grow-1 d-flex flex-column">
                        <h5 class="recipe-title mb-2">${recipe.title}</h5>
                        <div class="recipe-meta d-flex justify-content-between text-muted small mb-2">
                            <span><i class="far fa-clock me-1"></i> ${recipe.prepTime} prep</span>
                            <span><i class="fas fa-fire me-1"></i> ${recipe.calories} cal</span>
                        </div>
                        <p class="recipe-description small text-muted flex-grow-1">${recipe.description}</p>
                        <div class="recipe-diet mb-3">
                            ${dietLabels}
                        </div>
                        <button class="btn btn-sm btn-outline-primary w-100 mt-auto view-recipe-details-btn" data-recipe-id="${recipe.id}">View Recipe</button>
                    </div>
                </div>
            </div>
        `;
        recipeItemsContainer.innerHTML += recipeElement;
    });
}

function displayArticles(articles) {
    const articleItemsContainer = document.getElementById('articleItems');
    if (!articleItemsContainer) return;
    articleItemsContainer.innerHTML = ''; // Clear existing items

    if (articles.length === 0) {
        articleItemsContainer.innerHTML = '<p class="text-center text-muted">No articles found.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="article-card h-100 d-flex flex-column">
                    <div class="article-image flex-shrink-0" style="background-image: url('${article.image}'); height: 200px; background-size: cover; background-position: center;"></div>
                    <div class="article-content p-3 flex-grow-1 d-flex flex-column">
                        <h5 class="article-title mb-2">${article.title}</h5>
                        <div class="article-meta d-flex align-items-center text-muted small mb-2">
                            <img src="${article.author.image}" alt="${article.author.name}" class="author-image rounded-circle me-2" width="24" height="24">
                            <span>${article.author.name}</span>
                            <span class="ms-auto">${article.date}</span>
                        </div>
                        <p class="article-excerpt small text-muted flex-grow-1">${article.excerpt}</p>
                        <button class="btn btn-sm btn-outline-primary w-100 mt-auto read-article-btn" data-article-id="${article.id}">Read Article</button>
                    </div>
                </div>
            </div>
        `;
        articleItemsContainer.innerHTML += articleElement;
    });
}

// --- Filter Functions ---
function filterFoods(category) {
    const searchInput = document.getElementById('foodDbSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filteredFoods = Object.values(mockFoodData).filter(food => {
        const categoryMatch = category === 'all' || food.category === category;
        const nameMatch = food.name.toLowerCase().includes(query);
        return categoryMatch && nameMatch;
    });
    displayFoodItems(filteredFoods);
}

function filterRecipes() {
    const mealTypeFilter = document.getElementById('mealTypeFilter')?.value || '';
    const dietFilter = document.getElementById('dietFilter')?.value || '';
    const searchInput = document.getElementById('recipeSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filteredRecipes = Object.values(mockRecipes).filter(recipe => {
        const mealTypeMatch = mealTypeFilter === '' || recipe.mealType === mealTypeFilter;
        const dietMatch = dietFilter === '' || recipe.diet.includes(dietFilter);
        const titleMatch = recipe.title.toLowerCase().includes(query);
        return mealTypeMatch && dietMatch && titleMatch;
    });
    displayRecipes(filteredRecipes);
}

// --- Modal Functions ---
function showModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

function showFoodDetailModal(foodId) {
    const food = mockFoodData[foodId];
    if (!food) return;

    const modalElement = document.getElementById('foodDetailModal');
    if (!modalElement) return;

    modalElement.querySelector('.modal-title').textContent = food.name;
    modalElement.querySelector('#foodDetailImage').src = food.image;
    modalElement.querySelector('#foodDetailCategory').textContent = `Category: ${food.category}`;
    modalElement.querySelector('#foodDetailCalories').textContent = `${food.calories}`;
    modalElement.querySelector('#foodDetailProtein').textContent = `${food.protein}g`;
    modalElement.querySelector('#foodDetailCarbs').textContent = `${food.carbs}g`;
    modalElement.querySelector('#foodDetailFat').textContent = `${food.fat}g`;
    modalElement.querySelector('#foodDetailVitamins').textContent = food.vitamins.join(', ');
    modalElement.querySelector('#foodDetailMinerals').textContent = food.minerals.join(', ');
    modalElement.querySelector('#foodDetailBenefits').innerHTML = food.healthBenefits.map(b => `<li>${b}</li>`).join('');
    modalElement.querySelector('#foodDetailSideEffects').innerHTML = food.sideEffects.map(s => `<li>${s}</li>`).join('');

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

function showRecipeDetailModal(recipeId) {
    const recipe = mockRecipes[recipeId];
    if (!recipe) return;

    const modalElement = document.getElementById('recipeDetailModal');
    if (!modalElement) return;

    modalElement.querySelector('.modal-title').textContent = recipe.title;
    modalElement.querySelector('#recipeDetailImage').src = recipe.image;
    modalElement.querySelector('#recipeDetailPrepTime').textContent = recipe.prepTime;
    modalElement.querySelector('#recipeDetailCookTime').textContent = recipe.cookTime;
    modalElement.querySelector('#recipeDetailServings').textContent = recipe.servings;
    modalElement.querySelector('#recipeDetailCalories').textContent = recipe.calories;
    modalElement.querySelector('#recipeDetailDescription').textContent = recipe.description;
    modalElement.querySelector('#recipeDetailIngredients').innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
    modalElement.querySelector('#recipeDetailInstructions').innerHTML = recipe.instructions.map(i => `<li>${i}</li>`).join('');
    modalElement.querySelector('#recipeDetailDiet').innerHTML = recipe.diet.map(d => `<span class="badge bg-secondary me-1">${d}</span>`).join('');

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

function showArticleDetailModal(articleId) {
    const article = mockArticles[articleId];
    if (!article) return;

    const modalElement = document.getElementById('articleDetailModal');
    if (!modalElement) return;

    modalElement.querySelector('.modal-title').textContent = article.title;
    modalElement.querySelector('#articleDetailAuthor').textContent = `By ${article.author.name} on ${article.date}`;
    modalElement.querySelector('#articleDetailContent').innerHTML = article.content;

    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

// --- Calculator Functions ---
function calculateCalories() {
    const age = parseInt(document.getElementById('calcAge')?.value);
    const gender = document.querySelector('input[name="calcGender"]:checked')?.value;
    const weight = parseFloat(document.getElementById('calcWeight')?.value);
    const height = parseFloat(document.getElementById('calcHeight')?.value);
    const activityLevel = parseFloat(document.getElementById('calcActivityLevel')?.value);
    const goal = document.getElementById('calcGoal')?.value;

    const resultsDiv = document.getElementById('calorieResults');
    const bmrResultEl = document.getElementById('bmrResult');
    const calorieResultEl = document.getElementById('calorieResult');

    if (!resultsDiv || !bmrResultEl || !calorieResultEl) return;

    if (!age || !gender || !weight || !height || !activityLevel || !goal) {
        resultsDiv.innerHTML = '<p class="text-danger">Please fill in all fields.</p>';
        resultsDiv.style.display = 'block';
        return;
    }

    // Calculate BMR using Mifflin-St Jeor equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE (Total Daily Energy Expenditure)
    let tdee = bmr * activityLevel;

    // Adjust based on goal
    let calorieNeeds = tdee;
    if (goal === 'lose') {
        calorieNeeds = tdee - 500; // 500 calorie deficit for weight loss
    } else if (goal === 'gain') {
        calorieNeeds = tdee + 500; // 500 calorie surplus for weight gain
    }

    // Display results
    bmrResultEl.textContent = Math.round(bmr);
    calorieResultEl.textContent = Math.round(calorieNeeds);
    resultsDiv.style.display = 'block';
}

function calculateMacros() {
    const dailyCalories = parseInt(document.getElementById('macroCalories')?.value);
    const macroRatio = document.getElementById('macroRatio')?.value;
    const resultsDiv = document.getElementById('macroResults');
    const proteinResultEl = document.getElementById('proteinResult');
    const carbsResultEl = document.getElementById('carbsResult');
    const fatResultEl = document.getElementById('fatResult');

    if (!resultsDiv || !proteinResultEl || !carbsResultEl || !fatResultEl) return;

    if (!dailyCalories || !macroRatio) {
        resultsDiv.innerHTML = '<p class="text-danger">Please enter daily calories and select a ratio.</p>';
        resultsDiv.style.display = 'block';
        return;
    }

    let carbPercentage, proteinPercentage, fatPercentage;

    if (macroRatio === 'balanced') {
        proteinPercentage = 30; carbPercentage = 40; fatPercentage = 30;
    } else if (macroRatio === 'low-carb') {
        proteinPercentage = 40; carbPercentage = 20; fatPercentage = 40;
    } else if (macroRatio === 'high-protein') {
        proteinPercentage = 50; carbPercentage = 30; fatPercentage = 20;
    } else if (macroRatio === 'custom') {
        proteinPercentage = parseInt(document.getElementById('customProtein')?.value) || 0;
        carbPercentage = parseInt(document.getElementById('customCarb')?.value) || 0;
        fatPercentage = parseInt(document.getElementById('customFat')?.value) || 0;
        if (proteinPercentage + carbPercentage + fatPercentage !== 100) {
            resultsDiv.innerHTML = '<p class="text-danger">Custom percentages must add up to 100.</p>';
            resultsDiv.style.display = 'block';
            return;
        }
    } else {
        resultsDiv.innerHTML = '<p class="text-danger">Invalid ratio selected.</p>';
        resultsDiv.style.display = 'block';
        return;
    }

    const proteinGrams = Math.round((dailyCalories * (proteinPercentage / 100)) / 4);
    const carbGrams = Math.round((dailyCalories * (carbPercentage / 100)) / 4);
    const fatGrams = Math.round((dailyCalories * (fatPercentage / 100)) / 9);

    proteinResultEl.textContent = proteinGrams;
    carbsResultEl.textContent = carbGrams;
    fatResultEl.textContent = fatGrams;
    resultsDiv.style.display = 'block';

    // Update chart (if exists)
    updateMacroChart(proteinPercentage, carbPercentage, fatPercentage);
}

// --- Chart Update Functions (Placeholder) ---
function updateMacroChart(protein, carbs, fat) {
    // In a real app with Chart.js, update the chart data here
    console.log(`Updating macro chart: P=${protein}%, C=${carbs}%, F=${fat}%`);
}

// --- Meal Planner / Grocery List / Progress Tracker (Placeholder Functionality) ---
// Add basic alert messages for buttons inside these modals for now
document.addEventListener('DOMContentLoaded', () => {
    const mealPlannerModal = document.getElementById('mealPlannerModal');
    if (mealPlannerModal) {
        mealPlannerModal.querySelector('#generateGroceryListBtn')?.addEventListener('click', () => alert('Grocery List generation feature coming soon!'));
        mealPlannerModal.querySelector('#saveMealPlanBtn')?.addEventListener('click', () => alert('Meal Plan saving feature coming soon!'));
        mealPlannerModal.querySelector('#prevWeekBtn')?.addEventListener('click', () => alert('Previous week navigation coming soon!'));
        mealPlannerModal.querySelector('#nextWeekBtn')?.addEventListener('click', () => alert('Next week navigation coming soon!'));
    }

    const groceryListModal = document.getElementById('groceryListModal');
    if (groceryListModal) {
        groceryListModal.querySelector('#saveGroceryListBtn')?.addEventListener('click', () => alert('Grocery List saving feature coming soon!'));
        groceryListModal.querySelector('#printGroceryListBtn')?.addEventListener('click', () => alert('Grocery List printing feature coming soon!'));
    }

    const progressTrackerModal = document.getElementById('progressTrackerModal');
    if (progressTrackerModal) {
        progressTrackerModal.querySelector('#addMetricBtn')?.addEventListener('click', () => alert('Adding metrics feature coming soon!'));
        progressTrackerModal.querySelector('#viewReportsBtn')?.addEventListener('click', () => alert('Viewing reports feature coming soon!'));
    }
});

