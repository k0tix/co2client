import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/country'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getWithCode = async (code) => {
    const response = await axios.get(`${baseUrl}/${code}`)
    console.log(code)
    return response.data
}

export default { getAll, getWithCode }