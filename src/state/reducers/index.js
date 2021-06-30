const initialState = { link: 0 }

const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LINK":
      return {
        ...state,
        link: action.link,
      }

    default:
      return state
  }
}

export default linkReducer
