const mongoose = require("mongoose");
require("../config/config.recipes");
const Recipe = require("../models/Recipe.model");
require("./index")

let recipes = [
  {
    name: "Tater Tot Casserole",
    continent: "America",
    meal: "lunch",
    info: "comfort food packed with ground beef, creamy mushroom soup, and lots of Cheddar cheese",
  },
  {
    name: "Beef Stroganoff",
    continent: "America",
    meal: "dinner",
    info: "an originally Russian dish of sautéed pieces of beef served in a sauce of mustard and smetana (sour cream)",
  },
  {
    name: "Tamale Pie",
    continent: "Europe",
    meal: "dinner",
    info: "pie seasoned ground beef with cheddar cheese and cornbread",
  }, 
  {
    name: "Powder Biscuit",
    continent: "America",
    meal: "dessert",
    info: "a variety of baked bread with a firm, dry exterior and a soft, crumbly interior",
  },
  {
    name: "Pecan Pie",
    continent: "America",
    meal: "dessert",
    info: "a pie of pecan nuts mixed with a filling of eggs, butter, and sugar",
  },
  {
    name: "Broccoli Beer Cheese Soup",
    continent: "America",
    meal: "lunch",
    info: "broccoli, carrots, & potatoes blended in a beer-based soup with cheese",
  },
  {
    name: "Tangier Island Virginia Crab Cakes",
    continent: "America",
    meal: "lunch",
    info: "crab pancakes using crabmeat",
  },
  {
    name: "Creole Jambalaya",
    continent: "America",
    meal: "dinner",
    info:  "a dish of meat, vegetables, rice, and sometimes seafood with origins in New Orleans",
  },
  {
    name: "Potato Clam Chowder",
    continent: "America",
    meal: "lunch",
    info: "a chowder soups in American cuisine containing clams",
  },
  {
    name: "Yankee Red Flannel Hash",
    continent: "America",
    meal: "dinner",
    info: "corned beef hash with the addition of beets",
  },
  {
    name: "Cocido madrileño",
    continent: "Europe",
    meal: "lunch",
    info: "a traditional chickpea-based stew from Madrid, Spain",
  },
  {
    name: "Bifana",
    continent: "Europe",
    meal: "lunch",
    info: "a traditional Portuguese sandwich that comprises of a bread roll filled with marinated pork cutlets",
  },
  {
    name: "Sonhos",
    continent: "Europe",
    meal: "dessert",
    info: " fried dough rolled in white sugar",
  },
  {
    name: "Pan con tomate",
    continent: "Europe",
    meal: "lunch",
    info: "a Spanish tomato bread",
  },
  {
    name: "Chouquettes",
    continent: "Europe",
    meal: "dessert",
    info: "a French pastry sugar puffs made with choux pastry",
  },
  {
    name: "Croque monsieur",
    continent: "Europe",
    meal: "lunch",
    info: "a French ham and cheese sandwich made with gruyere, parmesan, ham and béchamel sauce",
  },
  {
    name: "Berenjenas con miel",
    continent: "Europe",
    meal: "lunch",
    info: "fried eggplant with honey",
  },
  {
    name: "Espinacas con garbanzos",
    continent: "Europe",
    meal: "lunch",
    info: "a Spanish dish of spinach and chickpeas",
  },
  {
    name: "Coda alla vaccinara",
    continent: "Europe",
    meal: "dinner",
    info: "an Italian oxtail stew",
  },
  {
    name: "Gado Gado",
    continent: "Asia",
    meal: "lunch",
    info: "an Indonesian mixed salad consists of a variety of vegetables, eggs, tempeh, and tofu ",
    },
  {
        name: "Chakalaka",
        continent: "Africa",
        meal: "dinner",
        info: "a spicy dish from South Africa that is usually made from onions, tomatoes, and beans",
  },
  {
        name: "Maafe",
        continent: "Africa",
        meal: "dinner",
        info: "an African peanut stew made in a spicy, creamy peanut and tomato sauce",
  },
  {
        name: "Zaalouk",
        continent: "Africa",
        meal: "lunch",
        info: "a Moroccan salad of cooked eggplants and tomatoes",
  },
// add breakfast
{
  name: "Egg Bhurji",
  continent: "Asia",
  meal: "breakfast",
  info: "an Indian spiced scrambled eggs",
},
{
  name: "Okayu",
  continent: "Asia",
  meal: "breakfast",
  info: "a Japanese rice porridge",
},
{
  name: "Kiribath",
  continent: "Asia",
  meal: "breakfast",
  info: "a traditional Sri Lankan milk rice with coconut milk",
},
{
  name: "Youtiao",
  continent: "Asia",
  meal: "breakfast",
  info: "a Chinese fried dough or Chinese crullers",
},
{
  name: "Pajeon",
  continent: "Asia",
  meal: "breakfast",
  info: "a Korean pancake with scallion",
},
{
  name: "Biscuits and Gravy",
  continent: "America",
  meal: "breakfast",
  info: "a southern-style sausage gravy with flaky biscuits",
},
{
  name: "Sfakianopita",
  continent: "Europe",
  meal: "breakfast",
  info: "a cheese, honey, and cinnamon pie from Crete",
},
{
  name: "Tiganopsomo",
  continent: "Europe",
  meal: "breakfast",
  info: "a fried Greek pita bread",
},
{
  name: "Pastechi",
  continent: "Europe",
  meal: "breakfast",
  info: "a stuffed fried pastry with a crescent shaped and can contain any number of fillings",
},
{
  name: "Fit-fit",
  continent: "Africa",
  meal: "breakfast",
  info: "an Ethiopian food served for breakfast, made with clarified spiced butter and berbere spices",
},
{
  name: "Ful medames",
  continent: "Africa",
  meal: "breakfast",
  info: "an Egyptian staple made primarily of mashed fava beans",
},
{
  name: "Attiéké",
  continent: "Africa",
  meal: "breakfast",
  info: "a traditional Ivorian dish made from fermented cassava",
},
{
  name: "Chicken Adobo",
  continent: "Asia",
  meal: "dinner",
  info: "a type of Filipino chicken stew",
},
{
  name: "Drunken Noodles",
  continent: "Asia",
  meal: "dinner",
  info: "a Thai stir-fried noodle dish",
},
{
  name: "Bihon Filipino Pancit",
  continent: "Asia",
  meal: "lunch",
  info: "a Filipino style fried rice noodles",
},
{
  name: "Katsudon",
  continent: "Asia",
  meal: "lunch",
  info: "a Japanese rice bowl featuring a fried pork cutlet that gets simmered with eggs and onions",
},
{
  name: "Castella Cake",
  continent: "Asia",
  meal: "dessert",
  info: "a sponge cake is made with whipped egg white and honey",
},
{
  name: "Bihon Filipino Pancit",
  continent: "Asia",
  meal: "lunch",
  info: "a Filipino style fried rice noodles",
},
{
  name: "Bambalouni",
  continent: "Africa",
  meal: "breakfast",
  info: "a traditional Tunisian fried doughnuts with sugar on top",
},
{
  name: "Creamy Grits",
  continent: "America",
  meal: "breakfast",
  info: "Grits are made of coursely ground corn and boiled in water or milk to create a creamy pourage",
},
{
  name: "Morning Buns",
  continent: "America",
  meal: "breakfast",
  info: "made with laminated croissant dough and tossed in an orange scented cinnamon sugar",
},
{
  name: "Best Bobotie",
  continent: "Africa",
  meal: "lunch",
  info: "a South African dish made with ground beef seasoned with curry and topped with a rich milk and egg custard",
},
{
  name: "Shakshuka",
  continent: "Africa",
  meal: "lunch",
  info: "a Maghrebi dish of eggs poached in a sauce of tomatoes, olive oil, peppers, onion and garlic, commonly spiced with cumin, paprika and cayenne pepper",
},
{
  name: "Raib",
  continent: "Africa",
  meal: "lunch",
  info: "a Moroccan-style yogurt flavored with orange blossom water, rose water, syrups, mint, or orange.",
},
{
  name: "Ngalakh",
  continent: "Africa",
  meal: "dessert",
  info: "a Senegalese millet porridge that is traditionally flavored with either baobab cream, peanut butter, or sweet yogurt",
},
{
  name: "Ma'amoul",
  continent: "Asia",
  meal: "lunch",
  info: "a type of Middle Eastern butter cookies filled with a variety of dried fruits or nuts",
},
{
  name: "Halo-Halo",
  continent: "Asia",
  meal: "dessert",
  info: "a traditional Filipino shaved ice dessert that's topped with a rainbow of delicious ingredients.",
},
{
  name: "Kalbi",
  continent: "Asia",
  meal: "dinner",
  info: "a traditional Korean grilled BBQ beef short rib dish marinated in a sweet soy mixture with garlic and green onion",
},
{
  name: "Koeksisters",
  continent: "Africa",
  meal: "dessert",
  info: "a traditional Afrikaner confectionery made of fried dough infused in syrup or honey",
}
];


Recipe.insertMany(recipes)
  .then((addedRecipes) => {
    addedRecipes.forEach((recipe) => console.log(recipe.name)); // to console.log each added name
  })
  .catch((err) => {
    console.log("Error with mongoose method", err);
  });



