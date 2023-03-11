import { ApiUrl, EndPoints } from '../helpers/Endpoints';

const DigitalFootPrintService = {
  async getReport() {
    let url = ApiUrl + EndPoints.DIGITAL_FOOT_PRINT;
    return fetch(url).then(response => response.json());
  },
  async Download() {},
};

export default DigitalFootPrintService;
