'use server'

import {PrismaClient } from "@prisma/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";



//this will be the interface for the typescript
// interface RecipeData{
//   name: string;
//   description: string;
//   //more to come! my ritalin ran out of my system and it's 8:30pm

// }

//this is the interface for shoving the data into the prisma DB.
// interface RecipeResult{
//   data?: RecipeData;
//   error?: string;
// }

const prisma = new PrismaClient();

export async function createRecipe(formData: FormData){

  const user = await currentUser();
    const loggedInUser = await db.users.findUnique({
      where: {
          clerkUserId: user?.id
      }
  });
  
    //[Žižek voice] and sho on and sho forth.
    //we're grabbing the ids from the input fields and plopping them in to some variables to shove into the interface.


      //the below is a template of how constructing the actual recipe
      // will enter the database
      
    const recipe = await prisma.recipes.create({
        data: {
          title: formData.get('name') as string,
          description: formData.get('description') as string,
          cookTime: 30,
          prepTime: 15,
          servings: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          user: {
            connect: {id: loggedInUser!.username}  // Assuming the user with id 1 exists
          },
          category: {
            connect: { id: 1 } // Assuming the category with id 1 exists
          },
          recipeIngredients: {
            create: [
              {
                quantity: 400,
                unit: "grams",
                ingredient: {
                  connect: { id: 1 } // Assuming the ingredient with id 1 exists
                }
              },
              // Add more ingredients as needed
            ]
          },
          steps: {
            create: [
              {
                description: "Boil the pasta in salted water",
                recipeOrder: 1
              },
              {
                description: "Cook pancetta in a pan until crispy",
                recipeOrder: 2
              },
              // Add more steps as needed
            ]
          }
        }
      });
    }