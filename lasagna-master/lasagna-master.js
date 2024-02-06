/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTimeOnTimer) {
    if (remainingTimeOnTimer === 0) {
        return 'Lasagna is done.'
    }
    else if (remainingTimeOnTimer > 0) {
        return 'Not done, please wait.'
    }
    else if (remainingTimeOnTimer === undefined || remainingTimeOnTimer === null || remainingTimeOnTimer === " ") {
        return 'You forgot to set the timer.'
    }
}

export function preparationTime(layers, averagePreparationTimePerLayer) {
    let minutes = 2
    if (averagePreparationTimePerLayer === undefined) {
        return minutes * layers.length
    }
    else if (averagePreparationTimePerLayer === null) {
        return 0
    }
    else return averagePreparationTimePerLayer * layers.length
}


// ## 3. Compute the amounts of noodles and sauce needed

// Besides reserving the time, you also want to make sure you have enough sauce and noodles 
// to cook the lasagna of your dreams. 
// For each noodle layer in your lasagna, 
// you will need 50 grams of noodles. 
// For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
// Define the function quantities that takes an array of layers as a parameter. 
// The function will then determine the quantity of noodles and sauce needed to make your meal. 
// The result should be returned as an object with keys noodles and sauce.

// - First, set up two variables to track the amount of noodles and sauce.
//   Define them with `let` so you can change the value later in your code.
//   Also, assign an appropriate initial value.
// - Use a [for loop][concept-for-loops] to iterate through the layers.
// - If you encounter a `'noodles'` or `'sauce'` layer in your loop, 
// increase the amount stored in the respective variable accordingly.
// - Use an [object][concept-objects] to return both results.

// const fewLayers = ['noodles', 'sauce', 'noodles', 'cheese']

export function quantities(layers) {
    const gramsOfNoodles = 50;
    const litersOfSauce = 0.2;

    let noodles = 0;
    let sauce = 0;

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            noodles += gramsOfNoodles
        }
        if (layers[i] === 'sauce') {
            sauce += litersOfSauce
        }
    }
    return {
        noodles,
        sauce
    }
}

// console.log(quantities(fewLayers));

// const friends = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
// const my = ['noodles', 'meat', 'sauce', 'mozzarella'];

// => undefined

// console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

export function addSecretIngredient(friendsList, myList) {
    const lastElementFriendsList = friendsList[friendsList.length - 1];
    // const lastElementFriendsList = friendsList.at(-1);
    // const lastElementFriendsList = friendsList.slice(-1);
    // console.log(friendsList);
    myList.push(lastElementFriendsList);
    // console.log(myList);
}

// addSecretIngredient(friends, my);


// The amounts listed in your cookbook only yield enough lasagna for two portions. 
// Since you want to cook for more people next time, 
// you want to calculate the amounts for different numbers of portions.
// Implement a function scaleRecipe that takes two parameters.
// A recipe object that holds the amounts needed for 2 portions. 
// The format of the object can be seen in the example below.
// The number of portions you want to cook.
// The function should return a recipe object with the amounts 
// needed for the desired number of portions.
// You want to keep the original recipe though. 
// This means, in this task the recipe argument should not be modified.

// const recipe1 = {
//     noodles: 200,
//     sauce: 0.5,
//     mozzarella: 1,
//     meat: 100,
// };

// const recipe2 = {
//     noodles: 400,
//     sauce: 1,
//     mozzarella: 2,
//     meat: 200,
// };

const recipe3 = {
    sauce: 1,
    noodles: 250,
    meat: 150,
    tomatoes: 3,
    onion: 2,
};


// HINTS

// First, calculate the factor that you need to apply to all amounts based on the target portions.
// One way to ensure the arguments are not modified is to use a new object to save the results.
// Use a for...in loop to go through all the entries in the original recipe and fill the object accordingly.


export function scaleRecipe(recipe, portions) {
    let recipe1 = recipe;
    if (recipe) {
        if (portions) {
            for (let ingredient in recipe1) {
                recipe1[ingredient] = recipe1[ingredient] * portions / 2
            }
        }
        return recipe1
    }

    if (recipe && portions === undefined)
        return {}
}

console.log(scaleRecipe(recipe3, 4));