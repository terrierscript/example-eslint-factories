import React from "react"
import Router from "react-router"
import {Route, DefaultRoute} from "react-router"
import App from "./components/App.jsx"
import Start from "./components/Start.jsx"
import {Question1} from "./components/Question.jsx"
import {Timeline} from "./components/Timeline.jsx"
var routes = (
  <Route name="app" path="/" handler={App} >
    <Route path="/" handler={Start} />
    <Route path="/question/1" handler={Question1} />
    <Route path="/timeline" handler={Timeline} />
    <DefaultRoute handler={Start} />
  </Route>
)

export default function render(container){
  Router.run(routes, function (Root) {
    React.render(<Root/>, container);
  })
}