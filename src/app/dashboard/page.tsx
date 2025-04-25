import { Button } from "@/components/ui/button";
import { signOut } from "../actions";
import AddPasskey from "@/components/buttons/AddPasskey";

export default async function Dashboard() {
  return (
    <div className="p-10 flex flex-row gap-4">
      <SignOut />
      <AddPasskey />
    </div>
  );
}

function SignOut() {
  return <Button onClick={signOut}>Logout</Button>;
}
