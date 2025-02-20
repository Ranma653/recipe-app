"use client";


import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {useForm} from "react-hook-form";
import{ Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage,} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// this is just for adding the recipe, saving the recipt to the server is going to come later.

export function CreateRecipe(){

    const clientAction = async(formData: FormData) =>{
        console.log(formData.get('name')), formData.get('recipeName')
    };
    return(
    
    <>
        {/* I AM DOING IT THIS WAY RIGHT NOW JUST TO GET STUFF DOWN
        
            WILL FIX WITH SHADCN FORMS LATER. I HOPE.
        */}
    
            <h3> Add Recipe</h3>
                <form action={clientAction}>
                    {/* im just setting this up so i can see how to grab input w/ prisma */}
                    <div className="form-control">
                        <label htmlFor="name">Recipe Name</label>
                        <input type="text" id="name" name="name"
                        placeholder="Enter Recipe Name" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className = "form-control">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description"
                        placeholder="The description of the recipe" />
                    </div>

                    
                    
                    {/* PREP TIME WILL GO HERE. IM THINKING OF A DROPDOWN MAYBE */}
                    {/* COOK TIME WILL ALSO GO HERE. SAMESIES ON ABOVE */}
                    
                    
                    {/* SERVINGS */}
                    <div className = "form-control">
                        <label htmlFor="servings">Servings</label>
                        <input type="text" id="servings" name="servings"
                        placeholder="How many servings?" />
                    </div>

                    {/* SPICY IS ALSO GOING TO GO HERE AT SOME POINT.
                        THIS ONE WILL BE A STAR SELECTER FROM 0 TO 5.
                        EXCEPT INSTEAD OF STARS IT WILL HAVE PEPEPRS.
                        IT WILL BE CUTE.
                     */}

                     {/* I WANT TO WORK OUT HOW TO MAKE IT SO I CAN HAVE A "ADD" BUTTON AND IT MAKES A NEW INPUT LINE */}
                    
                    {/* INGREDIENTS */}
                    <div className = "form-control">
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" id="ingredient" name="ingredient"
                        placeholder="Enter ingredients" />
                    </div>

                        {/* unit */}
                    <div className = "form-control">
                        <label htmlFor="unit">Units</label>
                        <input type="text" id="unit" name="unit"
                        placeholder="Enter Units" />
                        {/* QUANTITY HERE SHOULD HAVE A DROPDOWN FOR THE UNIT*/}
                    </div>
                    

                    {/* DITTO FOR STEPS HERE W/R/T THE "ADD" Button*/}
                    <div className = "form-control">
                        <label htmlFor="servings">Servings</label>
                        <input type="text" id="servings" name="servings"
                        placeholder="How many servings?" />
                    </div>


                </form>

    
    </>
    )
}

