// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("food-buddies JS imported successfully!");
});

function remove(likedRecipes, element) {
  const index = likedRecipes.indexOf(element);
  if (index !== -1) {
      likedRecipes.splice(index, 1);
  }
}