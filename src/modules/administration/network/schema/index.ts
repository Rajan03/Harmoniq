import { z } from "zod";

export const networkSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});

export type NetworkFormData = z.infer<typeof networkSchema>;
