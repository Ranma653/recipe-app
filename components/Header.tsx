import {HomeIcon, File, UsersRound, LogOut } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {LogoutLink, LoginLink, RegisterLink} from '@kinde-oss/kinde-auth-nextjs/components';


import { NavButton } from './NavButton';
import { ModeToggle } from './ModeToggle';
import { NavButtonMenu } from './NavButtonMenu';

export function Header(){

   return( 
    <header className=' bg-background h-12 p-2 border-b sticky top-z z-20'>
        
        {/* setting up the div for the home button */}
        <div className='flex items-center gap-2'>
            <NavButton href="/home" label="Home icon" icon={HomeIcon} />
            <Link href="/home" className="flex justify center gap-2 items center ml-0" title="Home">
                <h1 className='hiden sm:block text-xl font-bold m-0 mt-1'>
                    Recipe App
                </h1>

            </Link>

        </div>

        {/*  setting up the new recipe button to pup up a modal, adding in the day/night mode, and login/logout button*/}
        
        <ModeToggle />
        <Button
            variant="ghost"
            size="icon"
            aria-label="LogIn"
            title="LogIn"
            className='rounded-full'
            asChild>
                <LoginLink> Log In</LoginLink>
            </Button>
        <Button
            variant="ghost"
            size="icon"
            aria-label="Register"
            className='rounded-full'
            asChild>
                <RegisterLink>Register</RegisterLink>
            </Button>

    </header>
   )
}