import React from 'react';
import './styles/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Test from './pages/test.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route patch="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
