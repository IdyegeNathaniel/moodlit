import { z } from "zod";

// Base schema for both register and signin
const baseSchema = {
  email: z.string("Enter a valid Email Address").min(1, "Enter a valid Email Address").toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),
};


//Register form schema
export const SignUpFormSchema = z
  .object({
    fullName: z.string().min(1, "Name must be at least 4 characters"),
    ...baseSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

  
// Signin form schema
export const SigninFormSchema = z.object({
  ...baseSchema
});

export type SignUpFormInput = z.infer<typeof SignUpFormSchema>;
export type SigninFormInput = z.infer<typeof SigninFormSchema>;

export type AuthFormInput = SignUpFormInput | SigninFormInput;