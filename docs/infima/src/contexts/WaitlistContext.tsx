import React, { createContext, useState, ReactNode } from 'react';

interface WaitlistContextProps {
  emailAddress: string;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
}

export const WaitlistContext = createContext<WaitlistContextProps | null>(null);

interface WaitlistProviderProps {
  children: ReactNode;
}

const WaitlistProvider: React.FC<WaitlistProviderProps> = ({ children }) => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <WaitlistContext.Provider value={{ emailAddress, setEmailAddress }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export default WaitlistProvider;
