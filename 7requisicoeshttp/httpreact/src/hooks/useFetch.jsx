// 4 custom hook para resgate de dados
import {useState, useEffect} from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)

  // 5 refatorando post ------------------------------------
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)
  // 5 -----------------------------------------------------

  // 6 loading ---------------------------------------------------
  const [loading, setLoading] = useState(false)
  // 6 ------------------------------------------------

  // 7 tratando erros -----------------------------
  const [error, setError] = useState(null)
  // 7 ----------------------------------------

  // desafio delete
  const [itemId, setItemId] = useState(null)

  // 5 3 --------------------------------------------------------
  function httpConfig(data, method) {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setMethod('POST')
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setMethod('DELETE')
      setItemId(data)
    }
  }
  // 5 3 ---------------------------------------------------

  useEffect(() => {
    async function fetchData() {
      // 6 2 ----------------------------------
      setLoading(true)
      // 6 2 --------------------------------
      
      // 7 2 -------------------------------------
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
        setMethod(null)
        setError(null)
      } catch (error) {
        console.log(error.message)
        setError('Houve algum erro ao carregar os dados!')
      }
      // 7 2 --------------------------------------

      // 6 2 ------------------------------
      setLoading(false)
      // 6 2 ------------------------------
    }
    fetchData()
  }, [url,  /* 5 */ callFetch])

  // 5 2 ---------------------------------------------------
  useEffect(() => {
    async function httpRequest() {
      if (method === 'POST') {
        setLoading(true)

        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpRequest()
  }, [config, method, url, itemId])
  // 5 2 ---------------------------------------------

  return {data, httpConfig, loading, error}
}