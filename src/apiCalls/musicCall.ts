import axios from 'axios';

const baseUrl = 'https://api.openopus.org'

const getEverything = async () => {
  const response = await axios.get(`${baseUrl}/work/dump.json`)
  return response.data
}

const getAllComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/epoch/all.json`)
  return response.data
}

const getPopularComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/rec.json`);
  return response.data
}

const getComposer = async (name:string) => {
  const response = await axios.get(`${baseUrl}/composer/list/search/${name}.json`)
  return response.data
}

const getWorks = async (id:string) => {
  const response = await axios.get(`${baseUrl}/work/list/composer/${id}/all.json`)
  return response.data
}

const musicCall = {
  getAllComposers,
  getPopularComposers,
  getComposer,
  getWorks,
  getEverything
}

export default musicCall