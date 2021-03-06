import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux' //, applyMiddleware
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import reducers from '<project-path>/reducers'

import App from './App'
import Home from './components/Home'
import PostView from './components/PostView'
import CategoryView from './components/CategoryView'
import About from './components/About'
import NotFound from './components/NotFound'
import SomethingWentWrong from './components/SomethingWentWrong'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="post/:postSlug" component={PostView} />
        <Route path="page/:pageSlug" component={PostView} />
        <Route path="category/:categorySlug" component={CategoryView} />
        <Route path="error" component={SomethingWentWrong} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)