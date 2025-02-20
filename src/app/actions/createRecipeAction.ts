'use server'

import {PrismaClient } from "@prisma/client";
import { db } from "@/lib/db";


//this will be the interface for the typescript
interface RecipeData{
  name: string;
  description: string;
  //more to come! my ritalin ran out of my system and it's 8:30pm

}

//this is the interface for shoving the data into the prisma DB.
interface RecipeResult{
  data?: RecipeData;
  error?: string;
}

export async function createRecipe(formData: FormData): Promise<RecipeResult>{

    const nameValue = formData.get('name');
    //[Žižek voice] and sho on and sho forth.
    //we're grabbing the ids from the input fields and plopping them in to some variables to shove into the interface.


      //the below is a template of how constructing the actual recipe
      // will enter the database

    // const recipe = await prisma.recipes.create({
    //     data: {
    //       title: "Spaghetti Carbonara",
    //       description: "A classic Italian pasta dish",
    //       cookTime: 30,
    //       prepTime: 15,
    //       servings: 4,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       user: {
    //         connect: { id: 1 } // Assuming the user with id 1 exists
    //       },
    //       category: {
    //         connect: { id: 1 } // Assuming the category with id 1 exists
    //       },
    //       recipeIngredients: {
    //         create: [
    //           {
    //             quantity: 400,
    //             unit: "grams",
    //             ingredient: {
    //               connect: { id: 1 } // Assuming the ingredient with id 1 exists
    //             }
    //           },
    //           // Add more ingredients as needed
    //         ]
    //       },
    //       steps: {
    //         create: [
    //           {
    //             description: "Boil the pasta in salted water",
    //             recipeOrder: 1
    //           },
    //           {
    //             description: "Cook pancetta in a pan until crispy",
    //             recipeOrder: 2
    //           },
    //           // Add more steps as needed
    //         ]
    //       }
    //     }
    //   });
    }