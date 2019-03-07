import axios from 'axios'
const baseUrl = 'api/country'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getWithHighestPopulation = async () => {
    const response = await axios.get(`${baseUrl}/highestPopulation`)
    return response.data
}

const getWithHighestPercapita = async () => {
    const response = await axios.get(`${baseUrl}/highestEmissionpercapita`)
    return response.data
}

const getWithCode = async (code) => {
    const response = await axios.get(`${baseUrl}/code/${code}`)
    return response.data
}

export default { getAll, getWithCode, getWithHighestPopulation, getWithHighestPercapita }