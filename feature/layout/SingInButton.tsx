import { Button } from "@/components/ui/button";
import { signIn } from "@/auth/auth";

export const SingInButton = () => {
  return (
    <form>
      <Button
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
