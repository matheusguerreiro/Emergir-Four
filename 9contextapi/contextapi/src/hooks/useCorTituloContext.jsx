import { useContext } from "react"
import {CorTituloContext} from '../context/CorTituloContext'

export const useCorTituloContext = () => {
  const context = useContext(CorTituloContext)

  if (!context) {
    console.log('context não encontrado!')
  }

  return context
}