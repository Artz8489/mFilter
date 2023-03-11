import * as constant from '../constants/DownloadConstants';

export const DownloadReport = (downloaddata) => {
    return {
        type: constant.DOWNLOAD_INIT,
      downloaddata

    }
};