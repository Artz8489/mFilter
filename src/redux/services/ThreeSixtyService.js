import { ApiUrl, EndPoints } from '../helpers/Endpoints';
import { TOKEN } from '../../app/utils/const';

const ThreeSixtyService = {
  async GetTickets() {
    let url = ApiUrl + EndPoints.THREESIXTY_GET_TICKET;
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
  async UploadFile({ data }) {
    let url = ApiUrl + EndPoints.THREESIXTY_UPLOAD;
    let formData = new FormData();
    const csv = data.csv?.files[0];
    if (!csv) throw new Error('File not selected');
    formData.append('csv', csv, 'data.csv');
    const extra = data.extra?.files[0];
    // return {};
    if (extra) {
      formData.append('extra', extra);
    }
    // return async () => ({ status: true });
    return fetch(url, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        authorization: TOKEN.token,
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('There was an error while uploading file!', error);
      });
  },
};
export default ThreeSixtyService;
