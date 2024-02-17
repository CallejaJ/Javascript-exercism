/// <reference path="./global.d.ts" />
// @ts-check


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


export function addSecretIngredient(friendsList, myList) {
    const lastElementFriendsList = friendsList[friendsList.length - 1];
    myList.push(lastElementFriendsList);
}


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

