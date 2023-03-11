import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

const GoogleMaterialPage = lazy(() =>
    import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
    import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
    import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
    import("./modules/UserProfile/UserProfilePage")
);
const DemoList = lazy(() =>
    import("./views/app/demo/list")
);
const DemoChart = lazy(() =>
    import("./views/app/demo/chart")
);
const DemoCreate = lazy(() =>
    import("./views/app/demo/create")
);

export default function BasePage() {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard" />
                }
                <ContentRoute path="/dashboard" component={DashboardPage} />
                <ContentRoute path="/builder" component={BuilderPage} />
                <ContentRoute path="/my-page" component={MyPage} />
                <Route path="/google-material" component={GoogleMaterialPage} />
                <Route path="/react-bootstrap" component={ReactBootstrapPage} />
                <Route path="/e-commerce" component={ECommercePage} />
                <Route path="/user-profile" component={UserProfilepage} />
                <Route path="/demo-list" component={DemoList} />
                <Route path="/demo-chart" component={DemoChart} />
                <Route path="/demo-create" component={DemoCreate} />
                <Redirect to="error/error-v1" />
            </Switch>
        </Suspense>
    );
}