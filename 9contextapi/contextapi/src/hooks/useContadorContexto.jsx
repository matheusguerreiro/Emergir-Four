import {useContext} from 'react'
import { ContadorContext } from '../context/ContadorContext'

export const useContadorContext = () => {
  const context = useContext(ContadorContext)

  if (!context) {
    console.log('Contexto não encontrado!')
  }
  
  return context
}