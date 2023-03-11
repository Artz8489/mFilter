import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const LoginServices = {}


// mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }
LoginServices.Loginincidents = function async(body) {

    const requestOptions = {
        method: 'POST',
        mode : 'cors',
        headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*' } ,
        body: JSON.stringify(body),
    }
    let url = ApiUrl + EndPoints.login

    return fetch(url, requestOptions)
        .then(async response => {

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

LoginServices.Changeincidents = function async(body) {
    const requestOptions = {
        method: 'POST',
        mode : 'cors',
        headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*' } ,
        body: JSON.stringify(body),
    }
    let url = ApiUrl + EndPoints.change

    return fetch(url, requestOptions)
    .then(async response => {
        const data = await response.json()
        // if(requestOptions.data.status === 200){
        //     console.log("success")
        // }else {
        //     console.log("error")
        // }
        return data;
        

       

        // if (!response.ok) {
        //     const error = (data && data.message) || response.status;
        //     return Promise.reject(error);
        // }

    })
    .catch(error => {
        console.error('There was an error!', error);
    });


}

export default LoginServices
