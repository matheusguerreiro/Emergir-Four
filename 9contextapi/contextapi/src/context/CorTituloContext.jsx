import { createContext, useReducer } from "react";

export const CorTituloContext = createContext()

export const corTituloReducer = (state, action) => {
  // switch
  switch(action.type) {
    case 'RED':
      return {...state, color: 'red'}
    case 'BLUE':
      return {...state, color: 'blue'}
    default:
      return state
  }
}

export const CorTituloContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(corTituloReducer, {color: "yellow"})

  return (
    <CorTituloContext.Provider value={{...state, dispatch}}>
      {children}
    </CorTituloContext.Provider>
  )
}