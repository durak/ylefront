import axios from 'axios'
const baseUrl = '/api/categories'

const getCategories = async () => {
  const response = await axios.get(`${baseUrl}`)
  console.log('data',response.data)
  return response.data
}

export default { getCategories }