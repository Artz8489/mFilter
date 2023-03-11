import * as constant from '../constants/DashboardConstants';

export const FetchTotalIncidents = (dashboarddata) => {
    return {
        type: constant.TOTAL_INCIDENTS,
        dashboarddata
    }
};

export const FetchIncidentVolumes = (dashboarddata) => {
    return {
        type: constant.INCIDENT_VOLUMES,
        dashboarddata
    }
};

export const FetchActivecasesbychannel = (dashboarddata) => {
    return {
        type: constant.ACTIVECASE_CHANNEL,
        dashboarddata
    }
};

export const FetchSubchannel = (dashboarddata) => {
    return {
        type: constant.SUBCHANNEL_INIT,
        dashboarddata
    }
};

export const FetchToptenLocation = (dashboarddata) => {
    return {
        type: constant.TOPTEN_LOCATION_INIT,
        dashboarddata
    }
};

export const FetchCategorlevelcount = (dashboarddata) => {
    return {
        type: constant.CATEGORY_LEVEL_COUNT,
        dashboarddata
    }
};

export const FetchPublisherlevelcount = (dashboarddata) => {
    return {
        type: constant.PUBLISHER_LEVEL_COUNT,
        dashboarddata
    }
};
// export const FetchDASHBOARDChannelData = (dashboarddata) => {
//     console.log('FetchDASHBOARDChannelData s-------',dashboarddata.data.channels);
//     return {
//         type: constant.DASHBOARD_DATA,
//         dashboarddata : dashboarddata.data.channels
//     }
// };


