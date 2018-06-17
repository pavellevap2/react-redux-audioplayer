import ReactDom from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { App } from './components'
import store from './configureStore'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
