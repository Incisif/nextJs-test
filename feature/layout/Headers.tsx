import { LoggedInButton } from "../auth/LoggedInButton";
import Image from "next/image";
import { Layout } from "@/components/layout";
import { ModeToggle } from "../theme/ModeToggle";
export const Headers = async () => {
  return (
    <header className="w-full border-b border-border ">
      <Layout className="flex items-center gap-4">
        <div className="flex-1">
          <Image src="/icon.png" width={32} height={32} alt="Page Icon" />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
