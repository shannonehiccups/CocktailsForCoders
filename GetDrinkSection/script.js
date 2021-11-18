// https://www.thecocktaildb.com/api.php
let drinkName
let drinkInfo
let drinkThumbnail
let drinkInstructions



axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then (res=> {
    // console.log("success!");
    //console.log(res);

    drinkInfo=(res.data.drinks[0]); 
    drinkName=(res.data.drinks[0].strDrink);
    drinkThumbnail=(res.data.drinks[0].strDrinkThumb);
    drinkInstructions=(res.data.drinks[0].strInstructions);
    in1=(res.data.drinks[0].strIngredient1);
    in2=(res.data.drinks[0].strIngredient2);
    in3=(res.data.drinks[0].strIngredient3);
    in4=(res.data.drinks[0].strIngredient4);
    in5=(res.data.drinks[0].strIngredient5);

   
    console.log(drinkName);
    console.log(drinkThumbnail);
    console.log(drinkInstructions);
    console.log(in1);
    console.log(in2);
    console.log(in3);
    console.log(in4);
    console.log(in5);

    const drinkSection=document.querySelector('#drinkSection`); 
    // const nameSect=document.createElement('h2');
    // nameSect.innerText=drinkName;
    // drinkSection.appendChild(nameSect); 

    let nameOfDrink=document.querySelector('#drinkName'); 
    nameOfDrink.innerText=drinkName;

    let img = document.querySelector('#thumbnail');
    img.src = drinkThumbnail;
    // drinkSection.appendChild(img);

    let ingredientList=document.querySelector('#ingredientList');
    // let newlistItem=document.createElement('li');
    // newlistItem.innerHTML=in1;
    // ingredientList.appendChild(newlistItem);

    // newlistItem.innerHTML=in2;
    // ingredientList.appendChild(newlistItem);

 const p1=document.createElement('p');
    p1.innerText=in1;
    drinkSection.appendChild(ingredientList);

    const p2=document.createElement('p');
    p1.innerText=in2;
    drinkSection.appendChild(ingredientList);



    const instructionsSect=document.createElement('p');
    instructionsSect.innerText=drinkInstructions;
    drinkSection.appendChild(instructionsSect);

    
         
})
.catch (err=>{
    console.log('fail'); 
    console.log(err); 
})




