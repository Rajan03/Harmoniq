import React, { createContext, useCallback, useEffect } from "react";
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
  const [loading, setLoading] = React.useState(true);
  const [authenticated, setAuthenticated] = React.useState(false);

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
  }, []);

  // TODO: Fix Loading UI
  return (
    <AuthContext.Provider
      value={{ pending: loading, authenticated, setAuthenticated: setAuth }}
    >
      {loading && <SlidingLoader loading={loading} />}
      {!loading && children}
    </AuthContext.Provider>
  );
};
