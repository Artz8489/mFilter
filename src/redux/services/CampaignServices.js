import { EndPoints, ApiUrl } from '../helpers/Endpoints';
import { API } from '../setupAxios'


const CampaignServices = {}

CampaignServices.ViewCampaign = function async(body){



    // API.put(`${ApiUrl}${EndPoints.campaign}/${id}`, formData)

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(body),
    //     // body
    // }
    const formdata = body
    let url = ApiUrl + EndPoints.campaign
    //  return fetch(url, requestOptions)
     API.post(`${url}`, formdata)
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

CampaignServices.ViewCampaignGet = function async(queryParams){
    let url = ApiUrl + EndPoints.campaign
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

CampaignServices.ViewCampaignUpdate = function async(data){
    console.log('data',data)
    const id = data && data.id
    const formData = data && data.values
    API.put(`${ApiUrl}${EndPoints.campaign}/${id}`, formData)
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

CampaignServices.ViewCampaignDelete = function async(payload){
    const { id } = payload 
    API.delete(`${ApiUrl}${EndPoints.campaign}/${id}`)
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

export default CampaignServices