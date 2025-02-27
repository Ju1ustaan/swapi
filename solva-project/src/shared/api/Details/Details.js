import api from '../instanseAxios'

export const getDetails = async (payload) => {
    return await api.get(`${payload}`)
}