import { AUTH_DATA } from '../../app/utils/const';
import { getLocalStorage } from '../../app/utils/helpers';
import { EndPoints } from '../helpers/Endpoints';

const VerificationService = {
  Verify(body) {
    if (Object.keys(body).length === 0) return {};
    const url = EndPoints.VERIFICATION_URL;
    const getauthvalue = JSON.parse(getLocalStorage(AUTH_DATA.AUTH));
    const URL = url.replace('KEY', getauthvalue.verification_api_key);
    return fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      // mode: 'no-cors',
    })
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          console.log('Verification Response', data);
          return data.data;
        }
        return {};
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  },
  bulkBankVerify(body) {
    const url = EndPoints.BULK_BANK_VERIFICATION_URL;
    const formdata = new FormData();
    formdata.append(
      'bankdetailslist',
      body.bankdetailslist,
      'bankaccountlist.csv'
    );
    return fetch(url, {
      method: 'POST',
      headers: {
        api_key: 'awsd2d_fefqw2dw',
      },
      body: formdata,
    })
      .then(async response => {
        const data = await response.json();
        return data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  },
};

export default VerificationService;
