import React, { Component } from 'react'
import { render } from 'react-dom'
import Attributes from './Attributes'

//require ('./App.css');

export default class Character extends Component {
  render(){
    return (
      <div>
        Bleargh Me Precious
        <Attributes />
      </div>
    )
  }
}

