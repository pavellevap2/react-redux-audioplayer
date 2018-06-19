import ReactDom from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import { AppContainer } from './containers'

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
)
