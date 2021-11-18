// COCKTAILS
// Group 6 project

// Create paragraphs for Name, Ingredients and Measurements for Drink of the Month.
const drinkMonth = document.querySelector (`#month`);
const p1 = document.createElement(`p`);
const p2 = document.createElement(`p`);
const p3 = document.createElement(`p`);
const p4 = document.createElement(`p`);
const p5 = document.createElement(`p`);

drinkMonth.append(p1);
drinkMonth.append(p2);
drinkMonth.append(p3);
drinkMonth.append(p4);
drinkMonth.append(p5);

// Accessing the Sidecar Img
async function displayDrinkImg(){
    try{
        const drink2 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar/preview`);
       
        console.log(`Axios get was successful`)
        console.log(drink2.data);
        console.log(drink2.data.drinks[0]); 
        console.log(drink2.data.drinks[0].strDrinkThumb);
        p1.innerText = drink2.data.drinks[0].strDrinkThumb;
    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayDrinkImg()

// Access to name of drink
async function displayDrinkName(){
    try{
        const drink2 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar`);
       
        console.log(`Axios get was successful`)
        console.log(drink2.data);
        console.log(drink2.data.drinks[0]); 
        console.log(drink2.data.drinks[0].strDrink);
        p1.innerText = drink2.data.drinks[0].strDrink
    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayDrinkName()

// Measurements and Ingredients for Sidecar (Cognac)
displayRecipe1();
async function displayRecipe1() {
    try{
        const ingre = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar`);
       
        console.log(`Axios get was successful`)
        console.log(ingre.data);
        console.log(ingre.data.drinks[0]); 
        console.log(ingre.data.drinks[0].strMeasure1);
        const msr1 = ingre.data.drinks[0].strMeasure1
        console.log(ingre.data.drinks[0].strIngredient1);
        const ing1 = ingre.data.drinks[0].strIngredient1;
        p2.innerText = msr1 + ing1;

    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayRecipe1();

// Measurements and Ingredients for Sidecar (Cointreau)

        async function displayRecipe2() {
            try{
                const ingre = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar`);
               
                console.log(`Axios get was successful`)
        
        console.log(ingre.data);
        console.log(ingre.data.drinks[0]); 
        console.log(ingre.data.drinks[0].strMeasure2);
        const msr2 = ingre.data.drinks[0].strMeasure2
        console.log(ingre.data.drinks[0].strIngredient2);
        const ing2 = ingre.data.drinks[0].strIngredient2;
        p3.innerText = msr2 + ing2;

    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayRecipe2();

// Measurements and Ingredients for Sidecar (Lemon juice)
async function displayRecipe3() {
    try{
        const ingre = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar`);
       
        console.log(`Axios get was successful`)
        console.log(ingre.data);
        console.log(ingre.data.drinks[0]); 
        console.log(ingre.data.drinks[0].strMeasure3);
        const msr3 = ingre.data.drinks[0].strMeasure3
        console.log(ingre.data.drinks[0].strIngredient3);
        const ing3 = ingre.data.drinks[0].strIngredient3;
        p4.innerText = msr3 + ing3;

    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayRecipe3();

// Instructions for mixing Sidecar
async function displayRecipe4() {
    try{
        const ingre = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sidecar`);
       
        console.log(`Axios get was successful`)
        console.log(ingre.data);
        console.log(ingre.data.drinks[0]); 
        console.log(ingre.data.drinks[0].strInstructions);
        p5.innerText = ingre.data.drinks[0].strInstructions;

    }catch (err) {
        console.log(`Not Successful`);
        console.log(err);
    }
}
displayRecipe4();


        