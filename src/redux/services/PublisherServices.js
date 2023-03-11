// import { id } from 'date-fns/locale';
// import { EndPoints, ApiUrl } from '../helpers/Endpoints';
// import { API } from '../setupAxios'

// const PublisherServices = {}

// PublisherServices.ViewPublisher = function async(body){
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//     }
//     let url = ApiUrl + EndPoints.publisher
//      return fetch(url, requestOptions)
//     .then(async response => {
//         const data = await response.json()
//         if (!response.ok) {
//             const error = (data && data.message) || response.status;
//             return Promise.reject(error);
//         }
//         return data
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// }

// PublisherServices.ViewPublisherGet = function async(queryParams){
//     // let searchParams = new URLSearchParams()
//     // Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
//     let url = ApiUrl + EndPoints.publisher   
//      return fetch(url)
//     .then(async response => {
//         const data = await response.json()
//         if (!response.ok) {
//             const error = (data && data.message) || response.status;
//             return Promise.reject(error);
//         }
//         return data
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// }

// PublisherServices.ViewPublisherUpdate = function async(data){
//     const id = data && data.id
//     const formData = data && data.values
//     API.put(`${ApiUrl}${EndPoints.publisher}/${id}`, formData)
//     .then(async response => {
//         const data = await response.json()
//         if (!response.ok) {
//             const error = (data && data.message) || response.status;
//             return Promise.reject(error);
//         }
//         return data
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// }

// PublisherServices.ViewPublisherDelete = function async(data){
//     const id = data && data.id 
//     console.log("dddddd" ,id)
//     API.delete(`${ApiUrl}${EndPoints.publisher}/${id}`)
//     .then(async response => {
//         const data = await response.json()
//         if (!response.ok) {
//             const error = (data && data.message) || response.status;
//             return Promise.reject(error);
//         }
//         return data
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// }

// export default  PublisherServices 
import { id } from 'date-fns/locale';
import { EndPoints, ApiUrl } from '../helpers/Endpoints';
import { API } from '../setupAxios'

const PublisherServices = {}

PublisherServices.ViewPublisher = function async(body){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }
    let url = ApiUrl + EndPoints.publisher
     return fetch(url, requestOptions)
    .then(async response => {
        const data = await response.json()
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        return data
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}

PublisherServices.ViewPublisherGet = function async(queryParams){
    // let searchParams = new URLSearchParams()
    // Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.publisher   
     return fetch(url)
    .then(async response => {
        const data = await response.json()
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        return data
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}

PublisherServices.ViewPublisherUpdate = function async(payload){
    const {id, formData} = payload;
    
    API.put(`${ApiUrl}${EndPoints.publisher}/${id}`, formData)
    .then(async response => {
        const data = await response.json()
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        return data
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}

PublisherServices.ViewPublisherDelete = function async(payload){
    const { id } = payload 
    API.delete(`${ApiUrl}${EndPoints.publisher}/${id}`)
    .then(async response => {
        const data = await response.json()
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        console.log("wwwwwwww",data)

        return data
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}

export default  PublisherServices 