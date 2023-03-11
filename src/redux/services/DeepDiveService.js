import { ApiUrl, EndPoints } from '../helpers/Endpoints';
import { TOKEN } from '../../app/utils/const';

const DeepDiveService = {
  async GetDeepDiveUrl() {
    let url = ApiUrl + EndPoints.DEEP_DIVE_ANALYSIS;
    const package_name = localStorage.getItem('dpackage');
    url = url.replace('PACKAGE', package_name);
    console.log(url);
    return fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: TOKEN.token,
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('There was an error!', error);
      });
  },
};

export default DeepDiveService;
