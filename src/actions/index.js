import fetch from 'isomorphic-fetch'

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'

function requestCharacters() {
  return {
  	type: REQUEST_CHARACTERS, 
  	// characters
  }
}

function receiveCharacters(json) {
  return {
  	type: RECEIVE_CHARACTERS,
  	posts: json.data
  }
}

export default function fetchCharacters () {
	return dispatch => {
    dispatch(requestCharacters())
    return fetch('/images')
      .then(response => response.json())
      .then(json => dispatch(receiveCharacters(json)))
  	}

	return {
		type: REQUEST_CHARACTERS,
	}
}