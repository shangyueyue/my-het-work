import React from 'react';
import {Provider} from 'mobx-react';
import store from '@/store/index';
import Routers from '@/router/index';
const App = () => (
  <Provider {...store}>
    <Routers />
  </Provider>
);

export default App;


