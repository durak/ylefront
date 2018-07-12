import axios from 'axios'
const baseUrl = '/api/items'

const getItems = async () => {
  const response = await axios.get(`${baseUrl}/?availability=ondemand`)
  return response.data
}

export default { getItems }