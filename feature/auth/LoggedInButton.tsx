import { auth } from "@/auth/auth";
import { SignInButton } from "./SingInButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LoggedInDropdown } from "./LoggedInDropdown";

export const  LoggedInButton = async() => {
  const session = await auth();

  if (!session?.user) {
    return <SignInButton />;
  }

  return (
    <LoggedInDropdown>
    <Button variant={"outline"} size="sm">
      <Avatar className="h-5 w-5">
        <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
        {session.user.image ? (
          <AvatarImage
            src={session.user.image}
            alt={`${session.user.name ?? "-"}'s profile picture' `}
          />
        ) : null}
      </Avatar>
    </Button>
    </LoggedInDropdown>
  );
};
