import React, { Component, Fragment } from 'react'
import styles from './styles/main.scss'

const content = 'COMING SOON!'

const App = () => (
  <Fragment>
    <div className={styles['resizeable-both']}>{content}</div>
  </Fragment>
)

export default App
