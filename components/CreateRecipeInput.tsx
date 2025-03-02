"use client";


import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import{ Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage,} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import{ useForm, SubmitHandler } from "react-hook-form";
import { db } from '@/lib/db'



//setting up thetype forms
type FormValues = {
    username:string,
    categoryName: string,
    spicy: number,
    allergy: string,
    diet: string,
    recipeName: string,
    ingredients: string[],
    steps: string[],
    cookTime: number,
    prepTime: number,
    quantity: number,
    unit:string,
    servings: number,

}

// this is just for adding the recipe, saving the recipt to the server is going to come later.

export function CreateRecipeInput(){

    
    return(
    
    <>
        {/* I AM DOING IT THIS WAY RIGHT NOW JUST TO GET STUFF DOWN
        
            WILL FIX WITH SHADCN FORMS LATER. I HOPE.
        */}
    
            <h3> Add Recipe</h3>
                <form>
                


                </form>

    
    </>
    )
}

