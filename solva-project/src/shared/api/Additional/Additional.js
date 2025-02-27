import axios from 'axios'

export const getAdditional = async (payload) => {
    console.log(payload, 'payload');
    
    return await axios.get(`${payload}`)
}