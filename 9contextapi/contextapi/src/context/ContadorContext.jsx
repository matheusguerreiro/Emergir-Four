
// 1 - criar context

import { createContext, useState } from "react";

export const ContadorContext = createContext();

// 2 - provider

export const ContadorContextProvider = ({children}) => {
  const [contador, setContador] = useState(0)

  return (
    <ContadorContext.Provider value={{contador, setContador}}>
      {children}
    </ContadorContext.Provider>
  )
}