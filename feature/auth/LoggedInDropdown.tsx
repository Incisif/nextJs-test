import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { signOut } from "@/auth/auth";
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
              formAction={async () => {
                "use server";
                await signOut();
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
