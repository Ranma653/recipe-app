import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"


//exporting the handlers and sign in passing in all our proviers
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers:[GitHub],
})