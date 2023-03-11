import * as constant from '../constants/VerificationConstants';

export const PostVerification = body => {
  console.log('Verification FETCH ', body);
  return {
    type: constant.VERIFICATION_INIT,
    body,
  };
};
export const InitVerification = () => {
  console.log('Verification INIT');
  return {
    type: constant.VERIFICATION_INIT,
    body: {},
  };
};
export const PostBulkBankVerification = body => {
  console.log('Bulk Verification INIT');
  return {
    type: constant.BULK_BANK_VERIFICATION_INIT,
    body,
  };
};
