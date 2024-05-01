import { Button } from "@/components/ui/button";
import { signIn } from "@/auth/auth";
import {LogIn} from "lucide-react";

export const SignInButton = () => {
  return (
    <form>
      <Button
        variant="secondary"
        size="sm"
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        <LogIn size={16} className="mr-2" />
        Sign In
      </Button>
    </form>
  );
};
