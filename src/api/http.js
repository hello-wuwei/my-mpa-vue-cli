import axios from './axios'

export const post = (url, data) => axios.post(url, data)

export const get = (url, data) => axios.get(url, { params: { r: Math.random(), ...data } })

export const put = (url, data) => axios.put(url, data)

export const del = (url, data) => axios.delete(url, { params: data })

export const patch = (url, data) => axios.patch(url, data)