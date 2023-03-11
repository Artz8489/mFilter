import * as constant from '../constants/CampaignConstants';

// export const FetchCampaignIncidents = (campaigndata) => {
//     return {
//         type: constant.CAMPAIGN_INCIDENTS,
//         campaigndata
//     }
// }
export const FetchAddCampaign = (campaignData) => {
    console.log('campaignData', campaignData)

    return {
        type: constant.CAMPAIGN_ADD,
        campaignData
    }
}

export const FetchGetCampaign = (campaignGetData) =>{
   return{
    type: constant.CAMPAIGN_GET,
    campaignGetData
   }
}

export const FetchUpdateCampaign = (campaignUpdatetData) => {
    console.log('campaignUpdatetData', campaignUpdatetData)
    return {
        type: constant.CAMPAIGN_UPDATE,
        campaignUpdatetData
    }
}

export const FetchDeleteCampaign = (id) => {
    return {
        type: constant.CAMPAIGN_DELETE,
        id
    }
}