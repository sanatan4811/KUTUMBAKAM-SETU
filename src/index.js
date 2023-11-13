import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MESSAGE from './views/message'
import Home from './views/home'
import REGISTER from './views/register'
import RESCUEIMAGE1 from './views/rescue-image-1'
import WeatherAlert from './views/weather-alert'
import IMPORTANCE from './views/importance'
import PictureOfMemory from './views/picture-of-memory'
import AboutUs from './views/about-us'
import Sanskit from './views/sanskit'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MESSAGE} exact path="/message" />
        <Route component={Home} exact path="/" />
        <Route component={REGISTER} exact path="/register" />
        <Route component={RESCUEIMAGE1} exact path="/rescue-image-1" />
        <Route component={WeatherAlert} exact path="/weather-alert" />
        <Route component={IMPORTANCE} exact path="/importance" />
        <Route component={PictureOfMemory} exact path="/picture-of-memory" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Sanskit} exact path="/sanskit" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
