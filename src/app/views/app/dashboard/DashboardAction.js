export const FetchDASHBOARDChannelData = (dashboarddata) => {
    console.log('FetchDASHBOARDChannelData s-------',dashboarddata.data.channels);
    return {
        type: constant.DASHBOARD_DATA,
        dashboarddata : dashboarddata.data.channels
    }
};