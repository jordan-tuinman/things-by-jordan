const initialState = []

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return {
        ...state,
        slider: action.slider,
      }

    default:
      return state
  }
}

export default sliderReducer
