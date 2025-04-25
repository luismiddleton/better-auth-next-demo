"use client";

import { Key } from "lucide-react";
import { Button } from "../ui/button";
import { authClient } from "@/lib/client";

export default function AddPasskey() {
  const addPasskey = async () => {
    const state = await authClient.passkey.addPasskey({
      authenticatorAttachment: "cross-platform",
    });

    if (state) {
      console.error(state.error);
    }
  };

  return (
    <Button onClick={addPasskey}>
      <Key size={16} /> Add Passkey
    </Button>
  );
}
