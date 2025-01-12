import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthFormFields } from "@/modules/auth/utils/types";
import { authSchema } from "@/modules/auth/utils/schema";
import { authRepository } from "@/modules/auth/repository";
import { toast } from "@/hooks/use-toast";

export type LoginContextType = {
  form: UseFormReturn<AuthFormFields>;
  login: () => void;
  logout: () => void;
};

// Authentication context
const AuthContext = React.createContext<LoginContextType | undefined>(
  undefined,
);

// Authentication hook
export function useAuth() {
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
