// import React, { lazy, Suspense } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// // const Dashboard = lazy(() => import('../mtrackitdash/index'));

// const DemoPages = lazy(() => import('./views/app/demo'));

// // const Dashboard = lazy(() => import('./dashboard'));
// const Campaign = lazy(() => import('./campaign'));
// const Publisher = lazy(() => import('./publisher'));
// const AddCampaign = lazy(() => import('./campaign/addCampaign'));
// const AddPublisher = lazy(() => import('./publisher/addPublisher'));
// const UpdatePublisher = lazy(() => import('./publisher/addPublisher'));
// const UpdateCampaign = lazy(() => import('./campaign/addCampaign'));
// const Reportrack = lazy(() => import('./report/index'));

// // import { Switch, Route, Redirect } from "react-router-dom";




// const Mtrackit = ({ match }) => (
//     <Suspense>
//         <Switch>
//             {/* {<Redirect exact={true} from="/mtrackit" to="/mtrackit/dashboard"/>} */}
//             <Route path={`mtrackit_dashboard`} component={Dashboard} />
//             <Route path={`/mtrackit/campaign`} component={Campaign} />
//             <Route path={`/mtrackit/addCampaign`} component={AddCampaign}/>
//             <Route path={`/mtrackit/publisher`} component={Publisher} />
//             <Route path={`/mtrackit/addPublisher`} component={AddPublisher}/>
//             <Route path={`/mtrackit/updatePublisher/:id`} component={UpdatePublisher}/>
//             <Route path={`/mtrackit/updateCampaign/:id`} component={UpdateCampaign}/>
//             <Route path={`/mtrackit/report`} component={Reportrack} />


//         </Switch>
//     </Suspense>
// );

// export default Mtrackit;