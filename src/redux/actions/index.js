import Axios from 'axios'

export const IS_FETCHING = 'IS_FETCHING'
export const SUCCESSFUL_FETCH = 'SUCCESSFUL_FETCH'
export const FAILED_FETCH = 'FAILED_FETCH'

export const attemptFetch = name => dispatch => {
  dispatch({ type: IS_FETCHING })

  Axios.get(`https://api.genderize.io?name=${name}`)
    .then( res => {
      console.log(res)
      dispatch({ type: SUCCESSFUL_FETCH, payload: res.data})
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_FETCH, payload: err })
    })
}