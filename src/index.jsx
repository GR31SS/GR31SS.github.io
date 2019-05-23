import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import './scss/main.scss'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
