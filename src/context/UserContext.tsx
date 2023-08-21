import {useEffect, useState} from 'react'
import React, { createContext, useContext } from 'react';
import { MinicartItem } from '../interfaces/IProducts';
import { getSeniorDiscount } from '../__mocks__/mockApis.js'


interface UserContextProps {
  isOver65: boolean,
  setIsOver65: (bool: boolean) => void
  minicart: MinicartItem[]
  setMinicart: React.Dispatch<React.SetStateAction<MinicartItem[]>>
  seniorDiscont: number
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [isOver65, setIsOver65] = useState(false);
  const [minicart, setMinicart] = useState<MinicartItem[]>([]);

  const seniorDiscont = getSeniorDiscount()

  return (
    <UserContext.Provider value={{ setIsOver65, isOver65, minicart, setMinicart, seniorDiscont }}>
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