import { LoggedInButton } from "../auth/LoggedInButton";

export const Headers = () => {
    return (
        <div className="flex items-center gap-4">
        <h1 className="font-bold test-lg flex-1">Testimonials</h1>
        <LoggedInButton />
        </div>
    );
    }