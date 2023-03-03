const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals);

    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
    <div class="card card-compact w-full bg-base-100 shadow-xl p-8">
        <figure><img class="rounded-lg" src="${meal.strMealThumb}" alt="food" /></figure>
        <div class="card-body">
            <h2 class="text-xl font-bold">${meal.strMeal}</h2>
            <p class="text-lg font-semibold">Available Now</p>
            <div class="flex">
                <img class="w-5" src="images/star.png" alt="">
                <img class="w-5" src="images/star.png" alt="">
                <img class="w-5" src="images/star.png" alt="">
                <img class="w-5" src="images/star.png" alt="">
                <img class="w-5" src="images/star.png" alt="">
            </div>
            <div class="card-actions justify-end">
                <label onclick="loadMealDetail2(${meal.idMeal})" id="btn" for="my-modal-3" class="btn bg-pink-300 text-black border-0 hover:bg-pink-200"
                    style="transition: 0.5s;">Order</label>
            </div>
        </div>
    </div>
    `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText)
    loadMeals(searchText);
}
loadMeals('fish');



// review page interactions

document.getElementById('btn-review').addEventListener('click', function(){
    const nameField = document.getElementById('name-field').value;
    const messageField = document.getElementById('message-field').value;

    if(nameField || messageField !== String){
        alert('Please Provide valid name or message!');
        return;
    }

    const reviewContainer = document.getElementById('review-container');
    const review = document.createElement('div');
    review.innerHTML = `
    <div class="bg-pink-50 p-8 rounded-lg">
    <div class="flex gap-4">
        <img class="w-8" src="images/user.png" alt="">
        <h3 class="text-3xl font-semibold">${nameField}</h3>
    </div>
    <p class="text-xl pl-12 py-1">${messageField}</p>
    <div class="flex pl-12">
        <img class="w-5" src="images/star.png" alt="">
        <img class="w-5" src="images/star.png" alt="">
        <img class="w-5" src="images/star.png" alt="">
        <img class="w-5" src="images/star.png" alt="">
        <img class="w-5" src="images/star.png" alt=""> 
      </div>
    </div>
    `;
    reviewContainer.appendChild(review);
})