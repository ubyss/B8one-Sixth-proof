import {useEffect, useState} from 'react'
import React, { createContext, useContext } from 'react';

interface UserContextProps {
  isOver65: boolean,
  setIsOver65: (bool: boolean) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [isOver65, setIsOver65] = useState(false);

  useEffect(() => {  
    console.log('@@', isOver65);

  }, [isOver65])

  return (
    <UserContext.Provider value={{ setIsOver65, isOver65 }}>
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