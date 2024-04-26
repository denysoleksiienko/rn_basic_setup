import React, { FC, useCallback, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

export interface IAuthContextState {
  isLogged: boolean;
  handleUserLogin: () => void;
}

const AuthContext = React.createContext<IAuthContextState>({
  isLogged: false,
  handleUserLogin: () => null,
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleUserLogin = useCallback(() => setIsLogged((login) => !login), []);

  const value = useMemo(
    () => ({
      isLogged,
      handleUserLogin,
    }),
    [isLogged, handleUserLogin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
