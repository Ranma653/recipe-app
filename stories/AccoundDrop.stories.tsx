import { AccountDrop } from "@/components/AccountDrop";
import { SignOutButton, ClerkProvider } from "@clerk/nextjs";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta : Meta<typeof AccountDrop> ={
    component: AccountDrop,
    title: "Account/AccountDrop",
    decorators: (Story) => <ClerkProvider> <Story /></ClerkProvider>
}

export default meta;
type Story = StoryObj<typeof AccountDrop>

export const Default: Story ={
   
}

export const SignedIn: Story ={
   //args if you're passing in props
   // msw mock service worker
    //you can use it to mock things to the database, useful if you don't have control
}