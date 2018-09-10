import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { receiveProducts } from './actions'
import App from './containers/App'
import _products from './api/products.json'

import PouchDB from 'pouchdb'
import { persistentStore, persistentReducer } from 'redux-pouchdb'

const db = new PouchDB('dbname')

db.sync('https://fb8d8d6e-a8e3-4110-9acd-390b429a9868-bluemix:aca5ae2da3b78448621e00fb3292e741b0ac9fa41ab1c036d7d568b39d08b65f@fb8d8d6e-a8e3-4110-9acd-390b429a9868-bluemix.cloudant.com/redux-pouchdb-example-shopping-cart-now-sh', {
  live: true,
  retry: true
})

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  persistentStore(db, change => console.log('change', change))
)(createStore)

const finalReducer = persistentReducer(reducer, 'redux-shopping')

const store = createStoreWithMiddleware(finalReducer)

store.dispatch(receiveProducts(_products))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
