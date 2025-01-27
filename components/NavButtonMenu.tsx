import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";
 import Link from "next/link";
 import{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";

 type Props = {
    icon: LucideIcon,
    label: string,
    choices:{
        title: string,
        href: string,
    } [],
 }

 export function NavButtonMenu({
    icon: Icon,
    label,
    choices,
 }: Props) {
    return(
        <DropdownMenu>

            {/* setting up dropdown trigger */}

            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    >
                        <Icon className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">{label}</span>
                    </Button>

                <DropdownMenuContent align="end">
                    {/* mapping the choices availabel to links */}
                    {choices.map(choice => (
                        <DropdownMenuItem key={choice.title} asChild>
                            < Link href={choice.href}>
                            {choice.title}
                            </Link>
                        </DropdownMenuItem>
                    ))}

                </DropdownMenuContent>
            </DropdownMenuTrigger>

        </DropdownMenu>
    )
 }