import React from 'react';
import './styles/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Test from './pages/test.jsx';
import VideosArt from './pages/videos-art';
import About from './pages/about';
import Privacy from './pages/privacy';
import Faq from './pages/faq';
import Gallery from './pages/gallery';
import Presskit from './pages/presskit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/videos-art" component={VideosArt} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/presskit" component={Presskit} />
        <Route exact path="/test" component={Test} />
        <Route patch="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
