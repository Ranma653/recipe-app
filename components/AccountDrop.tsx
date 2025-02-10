import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuPortal,
    DropdownMenuShortcut,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";



// im gonna be adding comments to this for readability. is it a lot? yes.
// do i go cross-eyed while looking at code blocks? also yes
export function AccountDrop(){
    return(
        <DropdownMenu>
            
            {/* starting the dropdown menu. this is the thing that will appear before the dropdown menu
            uuuhhh drops down*/}
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>

            {/* starting the first dropdownmenu. this one is for the account */}
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                    {/* going to have to add a link to the profile when the time comes */}
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>

                <DropdownMenuSeparator />
                    {/* be sure to incldue Links to view their recipes */}
                    <DropdownMenuItem>My Recipies</DropdownMenuItem>
                    
                <DropdownMenuSeparator />
                
                {/* finally we have the log out */}
                <DropdownMenuItem>
                    {/* <LogoutLink>Log Out</LogoutLink> */}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}