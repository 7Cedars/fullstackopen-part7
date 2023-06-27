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

  const create = async (resource) => {
      const response = await axios.post(baseUrl, resource)
      let resourcesTemp =  resources
      resourcesTemp.push(response.data)
      setResources(resourcesTemp)

      console.log("resources: ", resources)
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