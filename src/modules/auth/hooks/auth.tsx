import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { authRepository } from "@/modules/auth/repository";
import { authSchema } from "@/modules/auth/utils/schema";
import { AuthFormFields } from "@/modules/auth/utils/types";

export type LoginContextType = {
  form: UseFormReturn<AuthFormFields>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

// Authentication context
const AuthContext = React.createContext<LoginContextType | undefined>(
  undefined,
);

// Authentication hook
export function useSignIn() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
}

// Authentication provider
type LoginProviderProps = React.PropsWithChildren;
export const AuthProvider = ({ children }: LoginProviderProps) => {
  const form = useForm<AuthFormFields>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
    },
  });

  const login = form.handleSubmit(async (data) => {
    const { email } = data;
    await authRepository.login(email);
    form.reset();
    toast({
      title: "Magic link sent",
      description: "Check your email for the magic link",
    });
  });

  const logout = async () => {
    await authRepository.logout();
  };

  return <AuthContext value={{ form, login, logout }}>{children}</AuthContext>;
};
