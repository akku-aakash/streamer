import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Core/Home';
import Upload from './Core/Upload';
import Viewvid from './Core/Viewvid';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' exact component={Upload} />
          <Route path='/viewvideo/public/video/:vId' exact render={props => <Viewvid {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;