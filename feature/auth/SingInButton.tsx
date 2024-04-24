import { Button } from "@/components/ui/button";
import { signIn } from "@/auth/auth";

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
        Sign In
      </Button>
    </form>
  );
};
