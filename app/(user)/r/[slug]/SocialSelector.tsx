import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export const SocialSelector = () => {
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSubmit = () => {
    //verify that url is linkedin or twitter
    //verify that name is not empty
    //submit
    }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Input
          className="bg-background/50"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          className="bg-background/50"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://linkedin.com/in/username"
        />
        <Button>
          <Check size={16} />
        </Button>
      </div>
      <p className="text-center text-sm font-light text-muted-foreground">
        Add a link to your Linkedin or Twitter.
      </p>
    </div>
  );
};
