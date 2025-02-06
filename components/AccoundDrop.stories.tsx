import { AccountDrop } from "@/components/AccountDrop";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta : Meta<typeof AccountDrop> ={
    component: AccountDrop,
}

export default meta;
type Story = StoryObj<typeof AccountDrop>

export const Account: Story ={
    render: (args) =>(
        <DropdownMenu>

        </DropdownMenu>
    )
}