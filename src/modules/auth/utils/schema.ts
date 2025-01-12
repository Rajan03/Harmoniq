import z from "zod";

export const authSchema = z.object({
  email: z
    .string({ message: "Email must be a valid email id" })
    .email({ message: "Email must be a valid email id" })
    .min(6, { message: "Email must be at least 6 characters" })
    .max(255, { message: "Email must be at most 255 characters" }),
});

export type AuthSchema = z.infer<typeof authSchema>;
