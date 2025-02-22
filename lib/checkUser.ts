"use server"

import { currentUser} from"@clerk/nextjs/server"
import { db } from "@/lib/db"




//all of this is to avoid some dork crap called ngrok and dealing with dumb things like port forwarding.
// PORTS!

export const checkUser = async () => {
    const user = await currentUser();

    //check for current logged in user w/ clerk. this don't poke our DB!

    if(!user){
        return null;
    }

    
    //check if user is already in the DB. you can tell this pokes the DB because i told you it does
    //i made 4 database migrations to fix this. if this doesn't work me gonna get angy 🧨
    const loggedInUser = await db.users.findUnique({
        where: {
            clerkUserId: user.id
        }
    });

    //if user is in DB, then return user
    if(loggedInUser) {
        return loggedInUser;
    }

    //if not in database, create new user
    const newUser = await db.users.create({
        data: {
          username: loggedInUser!.username,
          clerkUserId: loggedInUser!.clerkUserId,
          email: loggedInUser!.email,
        },
      });

    return newUser;
}