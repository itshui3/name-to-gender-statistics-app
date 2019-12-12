// import actions

const initialState = {
  genderInfo: {
    name: "",
    gender: "",
    probability: null,
    count: null
  },
  isFetching: false,
  error: null
}

export const reducer = (state = initialState, { type, payload }) => {

  switch(type) {

    case 'IS_FETCHING':
      return {
        ...state,
        isFetching: true
      }

    case 'SUCCESSFUL_FETCH':
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
    
      case 'FAILED_FETCH':
        return {
          ...state,
          error: payload,
          isFetching: false
        }

    default:
      return state
  }
}