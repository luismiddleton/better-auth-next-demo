import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/client";
import { Key } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignInPasskey() {
  const router = useRouter();
  const signInPasskey = async () => {
    const state = await authClient.signIn.passkey();

    if (state?.error) {
      console.error(state.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Button variant={"secondary"} onClick={signInPasskey}>
      <Key size={16} />
      Sign-in with Passkey
    </Button>
  );
}
