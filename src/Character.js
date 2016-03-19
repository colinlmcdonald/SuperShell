import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import Attributes from './Attributes'
import fetchCharacters from './actions/index'

//require ('./App.css');

export default class Character extends Component {
  constructor(props) {
  	super(props)
  }

  componentDidMount() {
  	const { dispatch, selectedReddit } = this.props
  	dispatch(fetchCharacters())
  }
  render(){
    return (
      <ul>
        {this.props.characters.map((character) => 
          <li>{character}</li>
        )}
      </ul>
    )
  }

}

Character.propTypes = {
  characters: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    characters: []
  }
}

export default connect(mapStateToProps)(Character)