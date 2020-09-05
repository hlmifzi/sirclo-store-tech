import axios from 'axios';
// import NotifSwal from '../../MyComponent/notification/Swal'

const developmentHost = 'https://run.mocky.io/v3/'
const productionHost = 'https://run.mocky.io/v3/'


const ROOT_API = axios.create({
    baseURL: `${process.env.NODE_ENV === "development" ? developmentHost : productionHost}`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const clientGet = async (endPoint, params = "") => {
    try {
        let getData = await ROOT_API.get(endPoint, params)
        if (getData.status === 200) return getData.data
    } catch (e) {
        // return NotifSwal.failed(e.message)
        return alert(e.message)
    }
}

export const clientPost = async (endPoint, body) => {
    try {
        let getData = await ROOT_API.post(endPoint, body)
        if (getData.status === 200) return getData.data
    } catch (e) {
        // return NotifSwal.failed(e.message || e.error.message)
        return alert(e.message || e.error.message)
    }
}


export const clientDelete = async (endPoint, { params = "" }) => {
    try {
        let getData = await ROOT_API.delete(endPoint, params)

        if (getData.status === 200) return getData.data
    } catch (e) {
        // return NotifSwal.failed(e.message)
        return alert(e.message)
    }
}


export const clientPatch = async (endPoint, body) => {
    try {
        let getData = await ROOT_API.patch(endPoint, body)

        if (getData.status === 200) return getData.data
    } catch (e) {
        // return NotifSwal.failed(e.message)
        return alert(e.message)
    }
}
