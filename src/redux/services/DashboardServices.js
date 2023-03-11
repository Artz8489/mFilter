/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from '../helpers/Endpoints';
import {TOKEN} from '../../app/utils/const'

const DashboardServices = {}

DashboardServices.ViewTotalincidents = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    const requestOptions = {
        method: 'GET',
        mode : 'cors',
        headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } ,
    }
    console.log('requestOptions ',requestOptions);
    let url = ApiUrl + EndPoints.counts_data + "?" + searchParams;
    console.log('url @dasboard',url);
    return fetch(url,requestOptions)
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewIncidentVolumes = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.incident_volume + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewActivecasesbyChannel = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.activecases_channel + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewSubchannel = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.sub_channel + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewToptenlocation = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.topten_location + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewCategorylevelcount = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.category_level_count + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

DashboardServices.ViewPublisherlevelcount = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.publisher_level_count + "?" + searchParams
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

export default DashboardServices
