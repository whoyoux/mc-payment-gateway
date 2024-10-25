import { Button } from "./ui/button";
import { signInViaDiscord } from "@/app/actions";

export default function SignInButton() {
	return (
		<form action={signInViaDiscord}>
			<Button type="submit">Sign In</Button>
		</form>
	);
}
