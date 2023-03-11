import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const TicketServices = {}

TicketServices.ViewTicketincidents = function (queryParams) {
    console.log('queryParams TicketServices',queryParams);
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.ticket + "?" + searchParams
    // console.log('ViewTicketincidents url',url);
    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
        .then(async response => {
            // console.log('ViewTicketincidents url',url);
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

TicketServices.ViewTicketSearchincidents = function (queryParams) {


    let url = ApiUrl + EndPoints.search_ticket + "/" + queryParams


    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
TicketServices.ViewTicketPriorityincidents = function () {


    let url = ApiUrl + EndPoints.priority


    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
TicketServices.ViewTicketAssigneeincidents = function () {


    let url = ApiUrl + EndPoints.ticket_customer


    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

TicketServices.ViewTicketStatusincidents = function () {


    let url = ApiUrl + EndPoints.status_ticket


    return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
        .then(async response => {
            const data = await response.json();
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

TicketServices.UpdateTicketApi = function (formData , id) {
    let url = ApiUrl + EndPoints.ticket_update + "/" + id
    const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'},
        body: JSON.stringify(formData), 
    }
    return fetch(url, requestOptions).then(async response => {
        const data = await response.json()
        return data
        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
    });   
}

export default TicketServices
