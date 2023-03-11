import * as constant from '../constants/MtrackConstants';

export const FetchTotalRevenue = (dashboarddata) => {
    return {
        type: constant.TOTAL_REVENUE,
        dashboarddata
    }
};

export const FetchTotalCost = (dashboarddata) => {
    return {
        type: constant.TOTAL_COST,
        dashboarddata
    }
};

export const FetchTotalEvents = (dashboarddata) => {
    return {
        type: constant.TOTAL_EVENTS,
        dashboarddata
    }
};

export const FetchTotalClicks = (dashboarddata) => {
    return {
        type: constant.TOTAL_CLICKS,
        dashboarddata
    }
};

export const FetchTotalPubevents = (dashboarddata) => {
    return {
        type: constant.TOTAL_PUBEVENTS,
        dashboarddata
    }
};

export const FetchTotalPubclicks = (dashboarddata) => {
    return {
        type: constant.TOTAL_PUBCLICKS,
        dashboarddata
    }
};

export const FetchTotalOverpubclicks = (dashboarddata) => {
    return {
        type: constant.TOTAL_OVERPUBCLICKS,
        dashboarddata
    }
};

export const FetchTotalFraudpubclicks = (dashboarddata) => {
    return {
        type: constant.TOTAL_FRAUDPUBCLICKS,
        dashboarddata
    }
};

export const FetchTotalEventpubclicks = (dashboarddata) => {
    return {
        type: constant.TOTAL_EVENTPUBCLICKS,
        dashboarddata
    }
};