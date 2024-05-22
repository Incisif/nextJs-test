"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";
import { LogOut } from "lucide-react";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <form>
          <DropdownMenuItem asChild>
            <button
              onClick={async () => {
                await signOutAction();
              }}
            >
              <span className="mr-2">
                <LogOut size={16} />
              </span>
              Logout
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
