import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const UserManagement = ({ match }) => (
    <Suspense>
        <Switch>
            {<Redirect exact={true} from="/usermanagement" to="/usermanagement/list" />}
            <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
            <Route path={`${match.url}/create`} component={lazy(() => import(`./create`))} />
            <Route path={`${match.url}/edit`} component={lazy(() => import(`./edit`))} />
        </Switch>
    </Suspense>
);

export default UserManagement;