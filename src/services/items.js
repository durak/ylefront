import axios from 'axios'
const baseUrl = '/api/items'

const getItems = async (offset) => {
  const response = await axios.get(`${baseUrl}/?availability=ondemand&offset=${offset}`)
  return response.data
}

export default { getItems }