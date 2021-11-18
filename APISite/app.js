// https://www.thecocktaildb.com/api.php
let drinkName
let drinkInfo
let drinkThumbnail
let drinkInstructions
let drinkIngredients


axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then (res=> {
    // console.log("success!");
    //console.log(res);

    drinkInfo=(res.data.drinks[0]); 
    drinkName=(res.data.drinks[0].strDrink);
    drinkThumbnail=(res.data.drinks[0].strDrinkThumb);
    drinkInstructions=(res.data.drinks[0].strInstructions);
    // drinkIngredients=(res.data.drinks[0].strIngredient1);
    // To list the ingredients, I think I need to run a while loop that adds 1 to the end of the "strIngredient1" until it reaches a key with the value of null. I do not know how to do that right now :)  

    
    console.log(drinkName);
    console.log(drinkThumbnail);
    console.log(drinkInstructions);
    // console.log(drinkIngredients);

    const featuredCocktailImage=document.querySelector(`#featuredCocktailImage`); 
    const nameSect=document.createElement('h2');
    nameSect.innerText=drinkName;
    drinkSection.appendChild(nameSect); 

    const instructionsSect=document.createElement('p');
    instructionsSect.innerText=drinkInstructions;
    drinkSection.appendChild(instructionsSect);


// NEED HELP TEAM! 
    // const thumbnailSect=document.createElement(`img`);
    // thumbnailSect.innerHTML=drinkThumbnail;
    // drinkSection.appendChild(thumbnailSect); 

    
})
.catch (err=>{
    console.log('fail'); 
    console.log(err); 
})