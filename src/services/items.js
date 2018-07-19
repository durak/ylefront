import axios from 'axios'
const baseUrl = '/api/items'

const getItems = async (offset) => {
  const response = await axios.get(`${baseUrl}/?availability=ondemand&offset=${offset}`)
  return response.data
}

const getItemsWithQuery = async (query) => {
  console.log(query)
  const response = await axios.get(`${baseUrl}/?availability=ondemand&${query}`)
  return response.data
}

export default { getItems, getItemsWithQuery }