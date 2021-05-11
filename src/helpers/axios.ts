import axios from 'axios'

axios.defaults.baseURL = 'https://api.rephonic.com'
axios.defaults.headers = {
  'X-Rephonic-Api-Key': '203b90fd-bfa4-4671-b46e-af95a5d1f56c',
}

export { axios }
