import React , { Component } from 'react'
import AppStack from './Screens/AppStack'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'

export default class ReduxApp extends React.Component {
  render(){
    return(
      <Provider store={Store}>
          <AppStack/>
      </Provider>
      
    )
      
  }
}