import * as constant from '../constants/ThreeSixtyConstants';

export const Get360Tickets = () => ({
  type: constant.THREESIXTY_INIT,
});

export const Upload360File = data => ({
  type: constant.THREESIXTY_UPLOAD_INIT,
  data,
});
