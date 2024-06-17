// Function to fetch and display featured dishes
async function fetchFeaturedDishes() {
    try {
        const response = await fetch('https://api.example.com/dishes');
        const data = await response.json();

        const dishesContainer = document.querySelector('.dishes-container');

        data.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.classList.add('dish-card');

            const dishImage = document.createElement('img');
            dishImage.src = dish.image;
            dishImage.alt = dish.name;

            const dishName = document.createElement('h3');
            dishName.textContent = dish.name;

            const dishDescription = document.createElement('p');
            dishDescription.textContent = dish.description;

            dishCard.appendChild(dishImage);
            dishCard.appendChild(dishName);
            dishCard.appendChild(dishDescription);

            dishesContainer.appendChild(dishCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display featured dishes
fetchFeaturedDishes();
