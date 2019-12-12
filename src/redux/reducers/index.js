import {
  IS_FETCHING,
  SUCCESSFUL_FETCH,
  FAILED_FETCH,
  SET_IS_HUI
} from '../actions'

const initialState = {
  genderInfo: {
    name: "",
    gender: "",
    probability: null,
    count: null
  },
  isFetching: false,
  error: null,
  isHui: false
}

export const reducer = (state = initialState, { type, payload }) => {

  switch(type) {

    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      }

    case SUCCESSFUL_FETCH:
      return {
        ...state,
        genderInfo: {
          name: payload.name,
          gender: payload.gender,
          probability: payload.probability * 100,
          count: payload.count
        },
        isFetching: false,
        error: ''
      }
    
      case FAILED_FETCH:
        return {
          ...state,
          error: payload,
          isFetching: false
        }

      case SET_IS_HUI:
        return {
          ...state,
          isHui: payload
        }


    default:
      return state
  }
}