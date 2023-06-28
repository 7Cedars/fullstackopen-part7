import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const create = async (event) => {
    const response = await axios.post(baseUrl, event)
    resources.push(response.data)
    }
    
  useEffect(() => {
    console.log("useEffect CALLED on initialisation")
    const getAll = async () => {
      const response = await axios.get(baseUrl)
      setResources(response.data)
    }
    getAll()
  }, [baseUrl])

  const service = {
    create
  }

  return [
    resources, service
  ]
}