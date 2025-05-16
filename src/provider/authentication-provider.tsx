import { SlidingLoader } from "@/components/common";
import { useWindowFocusVisible } from "@/hooks/use-window-focus-visible";
import { authRepository } from "@/modules/auth/repository.ts";
import React, {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";

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
  const windowInFocus = useWindowFocusVisible();
  const [loading, setLoading] = React.useState(true);
  const [authenticated, setAuthenticated] = React.useState(false);

  const setAuth = useCallback((v: boolean) => setAuthenticated(v), []);

  // Check authentication status on initial load and when the window is in focus
  // to handle cases where the user may have logged out in another tab or window
  // and the app is not in focus.
  useLayoutEffect(() => {
    setLoading(true);
    checkAuth().finally(() => setLoading(false));
  }, []);

  // Check authentication status when the window is in focus
  // to handle cases where the user may have logged out in another tab or window
  // and the app is not in focus.
  useEffect(() => {
    if (windowInFocus) checkAuth();
  }, [windowInFocus]);

  // Get the authentication status from the auth repository
  // and set the authenticated state accordingly.
  const checkAuth = useCallback(async () => {
    const user = await authRepository.getActiveUser();
    setAuthenticated(!!user);
  }, []);

  const value = useMemo(
    () => ({ pending: loading, authenticated, setAuthenticated: setAuth }),
    [loading, authenticated],
  );

  return (
    <AuthContext.Provider value={value}>
      {loading && <SlidingLoader loading={loading} />}
      {!loading && children}
    </AuthContext.Provider>
  );
};
