import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {

  const [userName, setUserName] = useState("Oneal");

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}