// import * as constant from '../constants/Publisher';

// export const FetchAddPublisher = (publisherData) => {
//     return {
//         type: constant.PUBLISHER_ADD,
//         publisherData
//     }
// }

// export const FetchGetPublisher = (publisherGetData) => {
//     return {
//         type: constant.PUBLISHER_GET,
//         publisherGetData
//     }
// }

// export const FetchUpadtePublisher = (publisherUpdateData) => {
//     console.log("publisherUpdateData",publisherUpdateData)
//     return {
//         type: constant.PUBLISHER_UPDATE,
//         publisherUpdateData
//     }
// }

// export const FetchDeletePublisher = (publisherDeleteData) => {
//     console.log("publisherDeleteData",publisherDeleteData)
//     return {
//         type: constant.PUBLISHER_DELETE,
//         publisherDeleteData
//     }
// }

import * as constant from '../constants/Publisher';

export const FetchAddPublisher = (publisherData) => {
    return {
        type: constant.PUBLISHER_ADD,
        publisherData
    }
}
export const FetchGetPublisher = (publisherGetData) => {
    return {
        type: constant.PUBLISHER_GET,
        publisherGetData
    }
}
export const FetchUpadtePublisher = (id, formData) => {
    return {
        type: constant.PUBLISHER_UPDATE,
        id,
        formData
    }
}
export const FetchDeletePublisher = (id) => {
    return {
        type: constant.PUBLISHER_DELETE,
        id
    }
}