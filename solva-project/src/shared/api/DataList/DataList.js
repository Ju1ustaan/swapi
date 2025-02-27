import api from '../instanseAxios'

export const getDataList = async (payload, page) => {
    return await api.get(`${payload}/?page=${page}`)
}