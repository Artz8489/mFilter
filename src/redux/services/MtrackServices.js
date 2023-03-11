import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const MtrackServices = {}

MtrackServices.ViewTotalrevenue = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.revenue + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalcost = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.cost + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalevents = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.events + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalclicks = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.clicks + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalpubevents = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.pubevents + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalpubclicks = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.pubclicks + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalpubclicks = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.pubclicks + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalpubfraud = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.pubfraud + "?" + searchParams
    return fetch(url)
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
MtrackServices.ViewTotalpubevent = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.pubevent + "?" + searchParams
    return fetch(url)
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


export default MtrackServices
