import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must have a valid domain",
  }),
  password: z.string().min(6, {
    message: "Please enter a valid password",
  }),
});
