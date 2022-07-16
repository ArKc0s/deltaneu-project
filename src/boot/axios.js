import axios from 'axios'
import { boot } from 'quasar/wrappers'

const api = axios.create({baseURL: 'https://api.twitch.tv'})
const idApi = axios.create({baseURL: 'https://id.twitch.tv'})


export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  
  app.config.globalProperties.$api = api
  app.config.globalProperties.$idApi = idApi

})

export { axios, api, idApi }
