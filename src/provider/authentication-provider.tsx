import React, { createContext, useCallback, useEffect } from "react";
import { useWindowFocusVisible } from "@/hooks/use-window-focus-visible";
import { authRepository } from "@/modules/auth/repository.ts";
import { SlidingLoader } from "@/components/common";

export type AuthContextType = {
  pending: boolean;
  authenticated: boolean;
  setAuthenticated: (_v: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

type AuthProviderProps = React.PropsWithChildren;
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = React.useState(false);
  const [authenticated, setAuthenticated] = React.useState(false);
  const isFocused = useWindowFocusVisible();

  const setAuth = useCallback((v: boolean) => setAuthenticated(v), []);
  useEffect(() => {
    setLoading(true);
    authRepository
      .getActiveUser()
      .then((user) => {
        setAuthenticated(!!user);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isFocused]);

  // TODO: Fix Loading UI
  return (
    <AuthContext.Provider
      value={{ pending: loading, authenticated, setAuthenticated: setAuth }}
    >
      {loading && <SlidingLoader loading={loading} />}
      {children}
    </AuthContext.Provider>
  );
};
