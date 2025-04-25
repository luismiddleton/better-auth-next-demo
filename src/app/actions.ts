import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  "use server";

  const status = await auth.api.signOut({
    headers: await headers(),
  });

  if (status.success) {
    redirect("/");
  }
};