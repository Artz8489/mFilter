import * as constant from '../constants/DeepDiveConstants';

export const FetchDeepDiveURL = packageName => {
  return {
    type: constant.DEEPDIVE_INIT,
    packageName,
  };
};
