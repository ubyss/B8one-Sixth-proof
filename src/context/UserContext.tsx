import {useEffect} from 'react'
import React, { createContext, useContext } from 'react';

interface UserContextProps {
  test: string
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  
  const test = 'dwdw'


  useEffect(() => {  

  }, [])

  return (
    <UserContext.Provider value={{ test }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };