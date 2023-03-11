import { EndPoints, ApiUrl } from '../helpers/Endpoints';
import axios from 'axios'
const DownloadServices = {}
DownloadServices.DownloadReportlist = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.download_report + "?" + searchParams
    console.log('this on works');
    return fetch(url,{
        method: "GET",
        mode: 'cors',
        headers: {
              'Content-Type': 'text/csv',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQG1maWx0ZXJpdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6ImNrejJnZGFmeTA2NzIxb2ZhMGZ3cjNoOTIiLCJwaG9uZU51bWJlciI6bnVsbCwicmVkbWluZSI6eyJpZCI6IjE2IiwidXNlcl9pZCI6ImNrejJnZGFmeTA2NzIxb2ZhMGZ3cjNoOTIiLCJyZWRtaW5lX2lkIjoiMjg3IiwicHJvamVjdF9pZCI6IjEiLCJpbnRlcm5hbF9hc3NpZ25lZV9pZCI6IjI4NyJ9LCJpYXQiOjE2NTcwMTY2OTQsImV4cCI6MTY1NzAyNzQ5NH0.Dj8-lhNyr2fwHnEiRYM7qcYK5NNXBM6TJpyyVVw2c5E"
    }
      })
        .then(async response => {
            const data =  await response;
            // const data =  await response.text();
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

export default DownloadServices