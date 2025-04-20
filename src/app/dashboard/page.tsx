import { Button } from "@/components/ui/button";
import { signOut } from "../actions";

export default async function Dashboard() {
  return (
    <div className="flex flex-row gap-4">
      <h2>My Dashboard</h2>
      <SignOut />
    </div>
  );
}

function SignOut() {
  return <Button onClick={signOut}>Logout</Button>;
}
