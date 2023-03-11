import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Demo = ({ match }) => (
    <Suspense>
        <Switch>
            {<Redirect exact={true} from="/demo" to="/demo/list"/>}
            <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
            <Route path={`${match.url}/create`} component={lazy(() => import(`./create`))} />
            <Route path={`${match.url}/view/:id`} component={lazy(() => import(`./view`))} />
            <Route path={`${match.url}/edit/:id`} component={lazy(() => import(`./edit`))} />
        </Switch>
    </Suspense>
);

export default Demo;