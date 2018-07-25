import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';


const Loading = () => <div>Loading ...</div>;
const Main = Loadable({
  loader: () => import(/* webpackChunkName: "main1" */ '@/pages/main/Main'),
  loading: Loading
});


const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ '@/pages/login/Login'),
  loading: Loading
});


const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} />
    </Switch>
  </Router>
);

export default Routers;
