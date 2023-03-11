import * as constant from '../constants/CommonConstants';

export const FetchPackagename = () => {
    return {
        type: constant.PACKAGENAME_INIT,
    }
};

export const FetchMenulist = (packageName) => {
    return {
        type: constant.MENULIST_INIT,
        packageName
    }
};

export const FetchFilterlist = (packageName) => {
    return {
        type: constant.FILTERLIST_INIT,
        packageName
    }
};

export const FetchChannellist = (packageName,fromDate,toDate) => {
    return {
        type: constant.CHANNEL_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchCountrylist = (packageName,fromDate,toDate) => {
    return {
        type: constant.COUNTRY_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchCategorylist = (packageName,fromDate,toDate) => {
    return {
        type: constant.CATEGORY_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchBrandlist = (packageName,fromDate,toDate) => {
    return {
        type: constant.BRAND_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchPrioritylist = (packageName,fromDate,toDate) => {
    return {
        type: constant.PRIORITY_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchPublisherlist = (packageName,fromDate,toDate) => {
    return {
        type: constant.PUBLISHER_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};
export const FetchStatuslist = (packageName,fromDate,toDate) => {
    return {
        type: constant.STATUS_LIST_INIT,
        packageName,
        fromDate,
        toDate
    }
};



